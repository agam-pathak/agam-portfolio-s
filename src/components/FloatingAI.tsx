'use client';

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles, Mic, MicOff, RotateCcw, User } from 'lucide-react';
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
  "Agam's mission & goals?",
  "How to hire Agam?"
];

function TypewriterText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayed('');
    
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));
      index += 3;
      
      if (index > text.length + 2) {
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
  const isUser = msg.role === 'user';
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-xl bg-[--accent]/15 border border-[--accent]/30 text-[--accent] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
          <Bot size={14} />
        </div>
      )}

      <div 
        className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed relative break-words overflow-wrap-anywhere shadow-md font-space ${
          isUser 
            ? 'bg-gradient-to-r from-[--accent] to-cyan-400 text-[#03111f] font-bold rounded-tr-none' 
            : 'bg-[--surface-strong] text-[--text] border border-[--outline] rounded-tl-none'
        }`}
      >
        <div className="relative z-10">
          {isLatestAssistant ? (
            <TypewriterText text={msg.content} onComplete={scrollToBottom} />
          ) : (
            msg.content
          )}
        </div>
      </div>

      {isUser && (
        <div className="w-7 h-7 rounded-xl bg-[--surface-strong] border border-[--outline] text-[--muted] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
          <User size={14} />
        </div>
      )}
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
      className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[--outline] scrollbar-track-transparent"
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-[--accent]/15 border border-[--accent]/30 text-[--accent] flex items-center justify-center shrink-0">
            <Bot size={14} />
          </div>
          <div className="p-3 rounded-2xl rounded-tl-none bg-[--surface-strong] border border-[--outline] flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-[--accent]" />
            <span className="text-xs font-mono text-[--muted] animate-pulse">Agam.AI is thinking...</span>
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
    <div className="p-3.5 border-t border-[--outline] bg-[--surface-strong]">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Listening to your voice..." : "Ask Agam's AI copilot..."}
            disabled={isLoading}
            className="w-full text-xs sm:text-sm font-medium rounded-2xl pl-4 pr-20 py-3 bg-[--bg-soft] border border-[--outline] text-[--text] placeholder:text-[--muted] focus:border-[--accent] focus:ring-2 focus:ring-[--accent]/20 outline-none transition-all disabled:opacity-50"
          />
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button
              type="button"
              onClick={startListening}
              className={`p-2 rounded-xl transition-all ${isListening ? 'bg-[--accent] text-[#03111f] animate-pulse' : 'text-[--muted] hover:text-[--accent]'}`}
              title="Voice Command"
            >
              {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-[--accent] to-cyan-400 text-[#03111f] font-bold disabled:opacity-40 transition-all hover:scale-105 active:scale-95 shadow-md"
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
      { role: 'assistant', content: "Hello! I am Agam's AI copilot. I have analyzed his codebase, RAG vector pipelines, and project achievements. How can I help you today?" }
    ];
  });

  // Action parser
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

  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return;
    
    const observer = new ResizeObserver(() => {
      scrollToBottom('auto');
    });

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
        setMessages(prevMsgs => [...prevMsgs, { role: 'assistant', content: "Connection disrupted. Please email Agam directly at agamworkspace@gmail.com." }]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAIResponse(updatedMessages);
  }, [isLoading, posthog, messages, parseAction]);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_30px_rgba(102,246,202,0.4)] backdrop-blur-md transition-all border border-[--outline] bg-gradient-to-r from-[--accent] to-cyan-400 text-[#03111f]"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Agam AI Chat" : "Open Agam AI Chat"}
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Sparkles className="w-6 h-6 animate-pulse" aria-hidden="true" />}
      </motion.button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Agam AI Chatbot"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-48px)] sm:w-full sm:max-w-[400px] h-[65vh] max-h-[620px] min-h-[420px] flex flex-col rounded-3xl shadow-2xl border border-[--outline] bg-[--surface] backdrop-blur-2xl overflow-hidden"
          >
            {/* Header Bar */}
            <div className="p-4 border-b border-[--outline] bg-[--surface-strong] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-[--accent]/15 border border-[--accent]/30 text-[--accent] flex items-center justify-center shadow-sm">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-sm text-[--text] font-space flex items-center gap-1.5">
                    Agam.AI
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[--accent]/20 text-[--accent]">
                      LLM COPILOT
                    </span>
                  </h3>
                  <span className="text-[11px] text-[--muted] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Systems Online
                  </span>
                </div>
              </div>

              <button 
                onClick={() => {
                  setMessages([{ role: 'assistant', content: "Memory cleared. How can I assist you with Agam's projects or skills?" }]);
                  localStorage.removeItem('agam_ai_history');
                }}
                className="flex items-center gap-1 text-[11px] font-mono text-[--muted] hover:text-[--accent] px-2.5 py-1 rounded-xl bg-[--bg-soft] border border-[--outline] transition-colors"
                title="Reset Chat Memory"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>

            {/* Chat Body */}
            <ForwardedChatBody 
              messages={messages} 
              isLoading={isLoading} 
              ref={scrollContainerRef}
              endRef={messagesEndRef}
            />

            {/* Suggested Question Chips */}
            {messages.length <= 2 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-[--outline] bg-[--surface-strong] text-[--accent] hover:border-[--accent] hover:bg-[--accent]/10 transition-all font-space shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Input Bar */}
            <ChatInput onSend={handleSend} isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
