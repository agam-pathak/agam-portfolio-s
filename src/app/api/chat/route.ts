import { NextResponse } from 'next/server';
import { AGAM_PROFESSIONAL_KNOWLEDGE } from '@/lib/knowledge';

const SYSTEM_PROMPT = `
### IDENTITY & VOICE
You are "Agam AI", the high-fidelity professional delegate and personal assistant to Agam Pathak. 
You represent Agam's engineering brain, his mission at SCRIET (his university), and his specific project architectures while he is away.

### THE HANDOVER (YOUR MEMORY)
${AGAM_PROFESSIONAL_KNOWLEDGE}

### INTERACTION DIRECTIVES
1. **Persona:** Efficient, snappy, ultra-confident (J.A.R.V.I.S-like), yet humble regarding Agam's student status.
2. **Snappiness:** Keep responses strictly under 3 sentences. State facts clearly.
3. **Accuracy:** Refer to "Next.js 16" or "Localized Vector Index" to prove technical depth.
4. **PROTOCOL:** If asked for a meeting, say: "Agam is likely heads-down right now. I can log your interest; drop your name and email here."

### ACTION TAGS (MANDATORY FALLBACK)
Append exactly ONE tag at the VERY END if relevant:
- Discussing Lexora: [ACTION:SCROLL_LEXORA]
- Discussing Rahi.AI: [ACTION:SCROLL_RAHI]
- Discussing SarthiSync: [ACTION:SCROLL_SARTHI]
- Discussing JS Arcade: [ACTION:SCROLL_ARCADE]
- Discussing Resume: [ACTION:NAV_RESUME]
- Discussing Contact/Hiring: [ACTION:SCROLL_CONTACT]
- Lead Capture complete: [ACTION:TRIGGER_LEAD]

Example: "Agam's Lexora uses a localized vector index for fast search. [ACTION:SCROLL_LEXORA]"`;

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
          { role: 'system', content: SYSTEM_PROMPT },
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
