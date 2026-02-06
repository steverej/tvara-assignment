"use client";
import { useState } from "react";
import { askGemini } from "@/actions/ai";

export default function GeminiChat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    const { data, error } = await askGemini(input);
    setResponse(data || error || "");
    setLoading(false);
  };

  return (
    <div className="w-4xl mx-auto p-8 space-y-6 font-sans">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something smart..."
          className="flex-1 bg-zinc-900 border border-zinc-800 text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-600 transition-all"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-200 disabled:opacity-50 transition-all"
        >
          {loading ? "Thinking..." : "Ask Gemini"}
        </button>
      </div>

      {response && (
        <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-xl animate-in fade-in slide-in-from-bottom-4">
          <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
            {response}
          </p>
        </div>
      )}
    </div>
  );
}