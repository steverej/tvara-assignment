"use server"; // This keeps the API key hidden from the browser!

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export const askGemini = async (prompt: string) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Use the 'prompt' variable instead of a hardcoded string
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { data: text };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong. Check your API key." };
    }
};