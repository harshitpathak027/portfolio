import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import emailjs from "emailjs-com";

const Contact = () => {
  const { darkMode } = useDarkMode();
  const inputBg = darkMode ? "bg-slate-900" : "bg-white";
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_qkwtp4i",
      "template_js8ke8d",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "2rMUI3_1UFz8xXrU9"
    ).then(
      () => {
        alert("Message sent successfully 🚀");
        setform({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send message 😢");
        console.error(error);
      }
    );
  };

  const contactCards = [
    {
      title: "Email",
      value: "harshitpathak027@gmail.com",
      href: "mailto:harshitpathak027@gmail.com",
      icon: "bx bx-envelope",
    },
    {
      title: "WhatsApp",
      value: "+91 6395133813",
      href: "https://wa.me/916395133813",
      icon: "bx bxl-whatsapp",
    },
    {
      title: "LinkedIn",
      value: "harshit-pathak-7914ab348",
      href: "https://www.linkedin.com/in/harshit-pathak-7914ab348",
      icon: "bx bxl-linkedin-square",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span className={`contact-pill ${darkMode ? "contact-pill-dark" : ""}`}>Let’s connect</span>
        <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl accent-underline accent-orange ${darkMode ? "text-white" : "text-slate-900"}`}>
          Contact Me
        </h2>
        <p className={`contact-subtitle ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          Open for collaborations, freelance work, and meaningful conversations.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-links">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`contact-card ${darkMode ? "contact-card-dark" : ""}`}
            >
              <div className="contact-card-icon">
                <i className={card.icon} />
              </div>
              <div>
                <div className="contact-card-title">{card.title}</div>
                <div className={`contact-card-value ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {card.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={`contact-form ${darkMode ? "contact-form-dark" : ""}`}>
          <div className="form-field">
            <input
              onChange={handleChange}
              name="name"
              required
              type="text"
              value={form.name}
              placeholder=" "
              className={`peer ${darkMode ? "bg-slate-900" : "bg-white"}`}
            />
            <label className={`form-label ${inputBg}`}>Name</label>
          </div>

          <div className="form-field">
            <input
              onChange={handleChange}
              name="email"
              required
              type="email"
              value={form.email}
              placeholder=" "
              className={`peer ${darkMode ? "bg-slate-900" : "bg-white"}`}
            />
            <label className={`form-label ${inputBg}`}>Email</label>
          </div>

          <div className="form-field">
            <textarea
              onChange={handleChange}
              required
              value={form.message}
              name="message"
              rows={4}
              placeholder=" "
              className={`peer ${darkMode ? "bg-slate-900" : "bg-white"}`}
            />
            <label className={`form-label ${inputBg}`}>Message</label>
          </div>

          <button type="submit" className="contact-submit">
            Send Message <span>✈️</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
