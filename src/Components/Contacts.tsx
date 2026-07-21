import React, { useState } from "react";

export const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:kenasaasfaw1@gmail.com?subject=Message from ${form.name}&body=${form.message}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-6 sm:mx-auto p-6 sm:p-8 bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-2xl shadow-lg flex flex-col gap-4 sm:gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 transition outline-none bg-background text-foreground"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            required
            className="w-full p-3 sm:p-4 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 transition outline-none bg-background text-foreground"
          />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Your Message"
          required
          className="w-full p-3 sm:p-4 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 transition outline-none resize-none bg-background text-foreground"
        />

        <button
          type="submit"
          className="bg-primary text-background py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
