import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  // state -------------------------------------------------
  const [open, setOpen] = useState(false); // إظهار أو إخفاء نافذة الدردشة
  const [messages, setMessages] = useState([
    { from: "bot", text: "أهلاً! كيف أقدر أساعدك؟" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // scroll to latest -------------------------------------
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send message -----------------------------------------
  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    const question = input;
    setInput("");

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: question })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "حصل خطأ، حاول لاحقاً." }
      ]);
    }
  };

  // handle Enter -----------------------------------------
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // colors ------------------------------------------------
  const brand = "#FD7B06"; // اللون الرئيسي المطلوب

  return (
    <>
      {/* زر عائم دائري */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{ backgroundColor: brand, zIndex: 3 }}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-2xl hover:scale-105 transition-transform"
        >
          💬
        </button>
      )}

      {/* نافذة الدردشة */}
      {open && (
        <div
          style={{ zIndex: 3 }}
          className="fixed bottom-6 right-6 w-80 shadow-2xl rounded-2xl bg-white flex flex-col border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div
            style={{ backgroundColor: brand }}
            className="p-3 text-white font-semibold flex justify-between items-center"
          >
            <span>Thaheen FAQ Bot</span>
            <button onClick={() => setOpen(false)} className="font-bold">
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm max-h-96">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-lg whitespace-pre-wrap ${
                  m.from === "user"
                    ? "bg-indigo-100 self-end ml-8"
                    : "bg-gray-100 self-start mr-8"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="اكتب سؤالك..."
              className="flex-1 resize-none outline-none rounded-md border px-2 py-1"
            />
            <button
              onClick={sendMessage}
              style={{ backgroundColor: brand }}
              className="text-white px-3 py-1 rounded-md hover:opacity-90"
            >
              إرسال
            </button>
          </div>
        </div>
      )}
    </>
  );
}
