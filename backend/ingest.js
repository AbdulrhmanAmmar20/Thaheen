import fs from "fs/promises";
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI();
const faqs = JSON.parse(await fs.readFile("./data/faq.json", "utf8"));

const out = [];
for (const item of faqs) {
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: item.question
  });
  out.push({ ...item, vector: data[0].embedding });
  console.log("✔︎ embedded:", item.question);
}
await fs.writeFile("./data/faq_vectors.json", JSON.stringify(out));
console.log("✅ All embeddings saved.");
