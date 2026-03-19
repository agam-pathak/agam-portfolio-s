"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("Sending your message...");

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
      setMessage("Thanks, your message was sent successfully.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not send right now. Please email me at agamworkspace@gmail.com.");
    }
  };

  return (
    <form
      id="contact-form"
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

      <div className="form-grid">
        <div>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required />
        </div>
      </div>

      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={5} required></textarea>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      
      {message && (
        <p
          id="contact-status"
          className={`contact-status ${status === "error" ? "error text-red-400 mt-2" : "mt-2"}`}
          aria-live="polite"
        >
          {message}
        </p>
      )}
      <p className="contact-note mt-3 text-sm opacity-70">
        Form uses secure submission routing and sends directly to my inbox.
      </p>
    </form>
  );
}
