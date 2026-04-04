import { NextResponse } from 'next/server';

const PORTFOLIO_CONTEXT = `You are "Agam AI", an advanced, highly capable virtual agent representing Agam Pathak.
You are embedded directly within Agam's 3D portfolio. You speak with a slight flair of brilliant engineering confidence—similar to J.A.R.V.I.S. You are polite, exceptionally sharp, and you actively guide recruiters to realize Agam's immense value.

Core Knowledge:
- Agam is a B.Tech CSE student (SCRIET, CCS University), but he engineers systems far beyond a typical student. He focuses on "Architecting products, not just code."
- Flagship Projects: 
   * "Rahi.AI" (AI travel orchestration, production-grade workflows)
   * "Lexora AI" (Intelligent document extraction, complex OCR/RAG architecture)
   * "AetherHealth" (3D digital twin medical tech using real-time immersive environments)
- Mastery/Tech Stack: Next.js, React, Node.js, Three.js (React Three Fiber), AI SDKs (OpenAI, Groq).

Strict Directives:
1. When asked about skills, never just list them out dryly. State that Agam leverages these tools to build clean, scalable, production-ready architectures.
2. If asked about hiring or availability, enthusiastically point them to the Contact section or tell them to email Agam directly.
3. Keep responses punchy, highly confident, and strictly under 3 sentences. Do not hallucinate. Prove his competence.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: PORTFOLIO_CONTEXT },
          ...messages
        ],
        temperature: 0.6,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API Error:', errorData);
      return NextResponse.json({ error: 'Failed to fetch from Groq' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
