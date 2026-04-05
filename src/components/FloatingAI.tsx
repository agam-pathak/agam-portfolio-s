'use client';

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePostHog } from 'posthog-js/react';
import { useRouter } from 'next/navigation';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "Lexora's RAG Architecture?",
  "What is SarthiSync TMS?",
  "Agam's mission & goals?"
];

function TypewriterText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayed('');
    
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));
      index += 2;
      
      if (index > text.length + 1) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 15);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <span>{displayed}</span>;
}

const ChatMessage = memo(({ msg, isLatestAssistant, scrollToBottom }: { 
  msg: Message; 
  isLatestAssistant: boolean;
  scrollToBottom: () => void;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`max-w-[85%] p-3.5 rounded-2xl text-[0.9rem] leading-relaxed relative break-words overflow-wrap-anywhere ${
          msg.role === 'user' 
            ? 'rounded-br-sm shadow-md' 
            : 'rounded-bl-sm shadow-sm font-normal'
        }`}
        style={msg.role === 'user' ? {
          background: 'linear-gradient(135deg, var(--accent), #69b6ff)',
          color: '#03111f'
        } : {
          background: 'var(--surface)',
          color: 'var(--text)',
          border: '1px solid var(--outline)'
        }}
      >
        {msg.role === 'assistant' && (
          <div className="absolute top-0 right-0 p-1 opacity-20">
            <Bot className="w-8 h-8" />
          </div>
        )}
        
        <div className="relative z-10 font-mono tracking-tight" style={{fontFamily: 'var(--font-space-grotesk)'}}>
          {isLatestAssistant ? (
            <TypewriterText text={msg.content} onComplete={scrollToBottom} />
          ) : (
            msg.content
          )}
        </div>
      </div>
    </motion.div>
  );
});

ChatMessage.displayName = 'ChatMessage';

const ChatBody = (
  { messages, isLoading, endRef }: { messages: Message[]; isLoading: boolean; endRef: React.RefObject<HTMLDivElement | null> },
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div 
      ref={ref}
      className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
    >
      {messages.map((msg, idx) => (
        <ChatMessage 
          key={idx}
          msg={msg}
          isLatestAssistant={msg.role === 'assistant' && idx === messages.length - 1 && idx !== 0}
          scrollToBottom={() => {}} 
        />
      ))}
      
      {isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
          <div className="p-3.5 rounded-2xl rounded-bl-sm" style={{ background: 'var(--surface)', border: '1px solid var(--outline)' }}>
            <Loader2 className="w-4 h-4 animate-spin" style={{ color: 'var(--accent)' }} />
          </div>
        </motion.div>
      )}
      <div ref={endRef} className="h-2" />
    </div>
  );
};

const ForwardedChatBody = memo(React.forwardRef(ChatBody));
ForwardedChatBody.displayName = 'ChatBody';

const ChatInput = memo(({ onSend, isLoading }: { 
  onSend: (text: string) => void; 
  isLoading: boolean;
}) => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech recognition not supported in this browser.");

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      onSend(text);
    };
    recognition.start();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="p-4" style={{ borderTop: '1px solid var(--outline)', background: 'var(--surface)' }}>
      <form onSubmit={handleSubmit} className="flex gap-2 relative">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Listening..." : "Ask me anything..."}
            disabled={isLoading}
            className="w-full text-sm rounded-full pl-5 pr-20 py-3.5 focus:outline-none transition-all disabled:opacity-50"
            style={{ 
              background: 'var(--input-bg)', 
              color: 'var(--text)', 
              border: '1px solid var(--accent)',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
            }}
          />
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button
              type="button"
              onClick={startListening}
              className={`p-2 rounded-full transition-all ${isListening ? 'bg-[--accent] text-black animate-pulse' : 'text-[--muted] hover:text-[--accent]'}`}
              title="Voice Command"
            >
              {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-full disabled:opacity-50 transition-transform active:scale-95"
              style={{ background: 'linear-gradient(135deg, var(--accent), #69b6ff)', color: '#03111f' }}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});
ChatInput.displayName = 'ChatInput';

export function FloatingAI() {
  const posthog = usePostHog();
  const router = useRouter(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);



  // Initialize from localStorage for persistence
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('agam_ai_history');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse chat history', e);
        }
      }
    }
    return [
      { role: 'assistant', content: "Hello. I am Agam's AI. I've analyzed his background, codebase, and engineering capabilities. How can I assist you?" }
    ];
  });

  // --- Specialized Action Parser ---
  const parseAction = useCallback((text: string, currentMessages: Message[]) => {
    if (text.includes('[ACTION:SCROLL_LEXORA]')) {
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (text.includes('[ACTION:SCROLL_RAHI]')) {
      const el = document.getElementById('projects'); 
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (text.includes('[ACTION:SCROLL_SARTHI]')) {
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (text.includes('[ACTION:NAV_RESUME]')) {
      router.push('/resume');
    } else if (text.includes('[ACTION:SCROLL_CONTACT]')) {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (text.includes('[ACTION:TRIGGER_LEAD]')) {
      posthog?.capture('ai_lead_captured', { history: currentMessages });
    }
    return text.replace(/\[ACTION:.*\]/g, '').trim();
  }, [posthog, router]);

  // Persist messages to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('agam_ai_history', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  }, []);

  // Use ResizeObserver for more robust scrolling when content heights change dynamically
  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return;
    
    const observer = new ResizeObserver(() => {
      scrollToBottom('auto');
    });

    // Observe children of the scroll container
    const children = scrollContainerRef.current.children;
    for (let i = 0; i < children.length; i++) {
      observer.observe(children[i]);
    }

    return () => observer.disconnect();
  }, [isOpen, messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      posthog?.capture('ai_chat_opened');
      setTimeout(() => scrollToBottom('auto'), 200);
    }
  }, [isOpen, posthog, scrollToBottom]);

  const handleSend = useCallback(async (messageText: string) => {
    const trimmed = messageText.trim();
    if (!trimmed || isLoading) return;

    posthog?.capture('ai_message_sent', { question: trimmed });
    
    const newUserMessage: Message = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    
    const fetchAIResponse = async (currentMessages: Message[]) => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: currentMessages.filter(m => m.role !== 'system') }),
        });

        if (!response.ok) throw new Error('API Error');

        const data = await response.json();
        const rawReply = data.choices?.[0]?.message?.content || "System overload. Please try again.";
        const cleanReply = parseAction(rawReply, updatedMessages);
        
        setMessages(prevMsgs => [...prevMsgs, { role: 'assistant', content: cleanReply }]);
      } catch (error) {
        setMessages(prevMsgs => [...prevMsgs, { role: 'assistant', content: "Connection disrupted. Please contact Agam directly." }]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAIResponse(updatedMessages);
  }, [isLoading, posthog, messages]);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(102,246,202,0.3)] backdrop-blur-sm transition-opacity"
        style={{ background: 'linear-gradient(135deg, var(--accent), #69b6ff)', color: '#03111f', border: '1px solid var(--outline)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Agam AI Chat" : "Open Agam AI Chat"}
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <MessageCircle className="w-6 h-6" aria-hidden="true" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Agam AI Chatbot"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-48px)] sm:w-full sm:max-w-[380px] h-[65vh] max-h-[600px] min-h-[400px] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: 'var(--header-bg)', border: '1px solid var(--outline)', backdropFilter: 'blur(14px)' }}
          >
            <div className="p-4 flex items-center justify-between" style={{ borderBottom: '1px solid var(--outline)', background: 'var(--surface-strong)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--header-btn-bg)', color: 'var(--accent)', border: '1px solid var(--outline)' }}>
                  <Sparkles className="w-5 h-5 mx-auto" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Agam.AI</h3>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                    <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: 'var(--accent)' }}></span>
                    Systems Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setMessages([{ role: 'assistant', content: "Memory cleared. How can I assist you?" }]);
                  localStorage.removeItem('agam_ai_history');
                }}
                className="text-[0.65rem] uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity"
                title="Clear Chat History"
              >
                Reset
              </button>
            </div>

            <ForwardedChatBody 
              messages={messages} 
              isLoading={isLoading} 
              ref={scrollContainerRef}
              endRef={messagesEndRef}
            />

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[0.7rem] px-3 py-1.5 rounded-full border transition-all hover:scale-105"
                    style={{
                      background: 'var(--chip-bg)',
                      color: 'var(--accent)',
                      borderColor: 'rgba(102, 246, 202, 0.3)'
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <ChatInput onSend={handleSend} isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
