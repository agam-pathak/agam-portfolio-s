'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePostHog } from 'posthog-js/react';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What is your tech stack?",
  "Tell me about Lexora AI.",
  "Are you available for work?"
];

function TypewriterText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayed('');
    
    // Very fast typewriter because nobody likes waiting
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

export function FloatingAI() {
  const posthog = usePostHog();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello. I am Agam's AI. I've analyzed his background, codebase, and engineering capabilities. How can I assist you?" }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      posthog?.capture('ai_chat_opened');
      scrollToBottom();
    }
  }, [messages, isOpen, posthog]);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    posthog?.capture('ai_message_sent', { question: messageText });
    
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: messageText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.filter(m => m.role !== 'system') }),
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      const aiReply = data.choices?.[0]?.message?.content || "System overload. Please try again.";
      
      setMessages([...newMessages, { role: 'assistant', content: aiReply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "Connection disrupted. Please contact Agam directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(102,246,202,0.3)] backdrop-blur-sm transition-opacity"
        style={{ background: 'linear-gradient(135deg, var(--accent), #69b6ff)', color: '#03111f', border: '1px solid var(--outline)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Agam AI"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
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
                  <Sparkles className="w-5 h-5 mx-auto" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Agam.AI</h3>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                    <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: 'var(--accent)' }}></span>
                    Systems Online
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => {
                const isLatestAssistant = msg.role === 'assistant' && idx === messages.length - 1 && idx !== 0;
                
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] p-3.5 rounded-2xl text-[0.9rem] leading-relaxed relative ${
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
                      {msg.role === 'assistant' && idx !== 0 && (
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
              })}
              
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="p-3.5 rounded-2xl rounded-bl-sm" style={{ background: 'var(--surface)', border: '1px solid var(--outline)' }}>
                    <Loader2 className="w-4 h-4 animate-spin" style={{ color: 'var(--accent)' }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-2" />
            </div>

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

            <div className="p-4" style={{ borderTop: '1px solid var(--outline)', background: 'var(--surface)' }}>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 text-sm rounded-full pl-5 pr-12 py-3.5 focus:outline-none transition-all disabled:opacity-50"
                  style={{ 
                    background: 'var(--input-bg)', 
                    color: 'var(--text)', 
                    border: '1px solid var(--accent)',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
                  }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-full disabled:opacity-50 transition-transform active:scale-95"
                  style={{ background: 'linear-gradient(135deg, var(--accent), #69b6ff)', color: '#03111f' }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
