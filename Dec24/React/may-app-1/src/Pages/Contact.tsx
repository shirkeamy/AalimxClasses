import React, { useState } from "react";

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page" style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
        }}>
            <div style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 8px 32px rgba(60,60,120,0.15)",
                padding: "2.5rem 2rem 2rem 2rem",
                textAlign: "center",
                maxWidth: 420,
                width: "100%"
            }}>
                <h1 style={{ color: "#6366f1", fontWeight: 700, marginBottom: 8 }}>Contact Us</h1>
                <p style={{ color: "#555", marginBottom: 24 }}>
                    We'd love to hear from you! Fill out the form below and we'll get back to you soon.
                </p>
                {submitted ? (
                    <div style={{ color: "#22c55e", fontWeight: 600, fontSize: 20, margin: "2rem 0" }}>
                        Thank you for reaching out!<br />We'll respond as soon as possible.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "0.75rem 1rem",
                                borderRadius: 8,
                                border: "1px solid #c7d2fe",
                                fontSize: 16
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "0.75rem 1rem",
                                borderRadius: 8,
                                border: "1px solid #c7d2fe",
                                fontSize: 16
                            }}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            style={{
                                padding: "0.75rem 1rem",
                                borderRadius: 8,
                                border: "1px solid #c7d2fe",
                                fontSize: 16,
                                resize: "vertical"
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                background: "#6366f1",
                                color: "#fff",
                                border: "none",
                                borderRadius: 8,
                                padding: "0.75rem 0",
                                fontWeight: 600,
                                fontSize: 18,
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
                                transition: "background 0.2s"
                            }}
                            onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
                            onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
                        >
                            Send Message
                        </button>
                    </form>
                )}
                <div style={{ marginTop: 32 }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="60" cy="70" rx="50" ry="8" fill="#e0e7ff" />
                        <circle cx="40" cy="40" r="18" fill="#c7d2fe" />
                        <circle cx="80" cy="50" r="14" fill="#a5b4fc" />
                        <circle cx="70" cy="30" r="10" fill="#818cf8" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Contact;
