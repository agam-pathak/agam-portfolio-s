"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Mail, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#66f6ca", "#38bdf8", "#a855f7"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Submission failed");
      
      setStatus("success");
      form.reset();
      triggerConfetti();
    } catch {
      setStatus("error");
      setErrorMsg("Could not send right now. Please email me at agamworkspace@gmail.com.");
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="flex flex-col items-center justify-center p-10 text-center space-y-4 bg-[--surface] border border-[--outline] rounded-3xl backdrop-blur-xl shadow-[var(--shadow)]"
          >
            <div className="w-16 h-16 bg-[--accent]/20 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8 text-[--accent]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-space text-[--text]">Message Sent Successfully!</h3>
            <p className="text-[--muted] text-sm max-w-sm">
              Thanks for reaching out. I usually reply within 24 hours.
            </p>
            <button 
              onClick={() => setStatus("idle")} 
              className="btn btn-secondary mt-6"
              data-cursor="pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] flex flex-col gap-6"
            action="https://formsubmit.co/ajax/agamworkspace@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="visually-hidden" htmlFor="contact-bot">Bot Field</label>
            <input
              id="contact-bot"
              name="_honey"
              className="visually-hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-[--text] font-space ml-1">
                  Your Name
                </label>
                <input 
                  id="contact-name" 
                  name="name" 
                  type="text" 
                  placeholder="e.g. John Doe"
                  className="w-full bg-[--bg-soft] border border-[--outline] text-[--text] placeholder:text-[--muted] rounded-2xl px-4 py-3.5 focus:border-[--accent] focus:ring-2 focus:ring-[--accent]/20 outline-none transition-all text-sm font-medium"
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-[--text] font-space ml-1">
                  Email Address
                </label>
                <input 
                  id="contact-email" 
                  name="email" 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-[--bg-soft] border border-[--outline] text-[--text] placeholder:text-[--muted] rounded-2xl px-4 py-3.5 focus:border-[--accent] focus:ring-2 focus:ring-[--accent]/20 outline-none transition-all text-sm font-medium"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-[--text] font-space ml-1">
                Your Message / Inquiry
              </label>
              <textarea 
                id="contact-message" 
                name="message" 
                rows={5} 
                placeholder="Describe your project, role opportunity, or technical inquiry..."
                className="w-full bg-[--bg-soft] border border-[--outline] text-[--text] placeholder:text-[--muted] rounded-2xl px-4 py-3.5 focus:border-[--accent] focus:ring-2 focus:ring-[--accent]/20 outline-none transition-all resize-none text-sm font-medium"
                required
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[--outline]">
              <p className="text-xs text-[--muted]">
                Direct inbox delivery via FormSubmit • Instant Response
              </p>
              <button 
                type="submit" 
                className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 group px-8 shadow-[0_0_20px_rgba(102,246,202,0.3)]" 
                disabled={status === "submitting"}
                data-cursor="pointer"
              >
                {status === "submitting" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
            
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 rounded-2xl mt-2 text-xs flex items-center gap-3 font-medium"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <p>{errorMsg}</p>
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
