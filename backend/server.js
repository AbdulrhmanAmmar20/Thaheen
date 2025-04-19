// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";
import "dotenv/config";

//
// إعداد __dirname في ES Modules
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//
// الإعدادات العامة
//
const PORT = process.env.PORT || 3000;
const TOP_K = 3;            // عدد المرشحين الأوائل
const brand = "#FD7B06";    // (غير مستخدم بالخادم، للواجهة فقط)

const openai = new OpenAI();
const app = express();
app.use(express.json());
app.use(cors());

//
// تحميل المتجهات (faq_vectors.json) مرة واحدة عند الإقلاع
//
let faqVectors = [];
async function loadFAQ() {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "data", "faq_vectors.json"),
      "utf8"
    );
    faqVectors = JSON.parse(data);
    console.log("✔︎ FAQ vectors loaded:", faqVectors.length);
  } catch (err) {
    console.error("❌ Failed to load faq_vectors.json:", err.message);
    process.exit(1);
  }
}
await loadFAQ();

//
// دالة حساب تشابه كوزاين بين متجهين
//
function cosine(a, b) {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
  const magB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
  return dot / (magA * magB);
}

//
// مسار الدردشة
//
app.post("/chat", async (req, res) => {
  try {
    const q = (req.body.q || "").trim();
    if (!q) return res.status(400).json({ error: "empty_question" });

    // 1) تضمين السؤال
    const embResp = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: q,
    });
    const emb = embResp.data?.[0]?.embedding;
    if (!emb) throw new Error("embedding_failed");

    // 2) رتب المرشحين حسب التشابه
    const candidates = faqVectors
      .filter((f) => Array.isArray(f.vector))
      .map((f) => ({
        ...f,
        score: cosine(f.vector, emb),
      }))
      .sort((a, b) => b.score - a.score);

    // 3) اختر أفضل TOP_K دون فلترة بالعتبة
    const top = candidates.slice(0, TOP_K);

    // إذا لم يكن هناك أي مرشح
    if (!top.length) {
      return res.json({
        answer: "عذرًا، لا أملك معلومات عن هذا السؤال.",
      });
    }

    // 4) جهّز سياق Q/A
    const context = top
      .map((t) => `Q: ${t.question}\nA: ${t.answer}`)
      .join("\n---\n");

    // 5) اطلب من GPT‑4o الرد بدقة
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0,
      messages: [
        {
          role: "system",
          content:
            "أجب بالنص المطابق للإجابة (A) الأقرب دون أي إضافة:\n" + context,
        },
        { role: "user", content: q },
      ],
    });

    return res.json({
      answer: completion.choices[0].message.content.trim(),
    });
  } catch (err) {
    console.error("Backend error:", err);
    return res
      .status(500)
      .json({ error: err.message || "server_error" });
  }
});

//
// تشغيل الخادم
//
app.listen(PORT, () =>
  console.log(`🚀 FAQ‑Bot ready on http://localhost:${PORT}`)
);
