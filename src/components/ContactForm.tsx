"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Mail } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#66f6ca", "#e7eefc", "#101b2f"];

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
            className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
          >
            <div className="w-20 h-20 bg-[--accent]/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-[--accent]" />
            </div>
            <h3 className="text-3xl font-bold font-space">Message Sent Successfully!</h3>
            <p className="text-[--muted] max-w-sm">
              Thanks for reaching out! I've received your inquiry and will get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setStatus("idle")} 
              className="btn btn-secondary mt-8"
              data-cursor="pointer"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="contact-form"
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

            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium opacity-80 ml-1">Your Name</label>
                <input 
                  id="contact-name" 
                  name="name" 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[--accent] focus:ring-1 focus:ring-[--accent] outline-none transition-all"
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium opacity-80 ml-1">Email Address</label>
                <input 
                  id="contact-email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[--accent] focus:ring-1 focus:ring-[--accent] outline-none transition-all"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <label htmlFor="contact-message" className="text-sm font-medium opacity-80 ml-1">Message</label>
              <textarea 
                id="contact-message" 
                name="message" 
                rows={5} 
                placeholder="How can I help you? Describe your project or inquiry..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[--accent] focus:ring-1 focus:ring-[--accent] outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 mt-6 border-t border-white/5">
              <p className="text-xs opacity-60 max-w-[250px]">
                Form uses secure encryption and delivers directly to my inbox.
              </p>
              <button 
                type="submit" 
                className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 group px-8" 
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
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </div>
            
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl mt-6 text-sm flex items-center gap-3"
              >
                <Mail className="w-4 h-4" />
                <p>{errorMsg}</p>
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
