import React from "react";

const Contact: React.FC = () => {
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
                maxWidth: 900,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 32,
                justifyContent: "space-between"
            }}>
                {/* Left: Office Info */}
                <div style={{ flex: 1, textAlign: "left", paddingRight: 24 }}>
                    <h1 style={{ color: "#6366f1", fontWeight: 700, marginBottom: 8 }}>Contact Us</h1>
                    <p style={{ color: "#555", marginBottom: 24 }}>
                        Get in touch with our office for any queries or information.
                    </p>
                    <div style={{ fontSize: 18, marginBottom: 18 }}>
                        <strong>Office Address:</strong><br />
                        123 Demo Street,<br />
                        City Center, Demo City 123456<br />
                        Country
                    </div>
                    <div style={{ fontSize: 18, marginBottom: 18 }}>
                        <strong>Office Hours:</strong><br />
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                    </div>
                    <div style={{ fontSize: 18, marginBottom: 18 }}>
                        <strong>Contact Number:</strong><br />
                        <a href="tel:+1234567890" style={{ color: "#6366f1", textDecoration: "none" }}>+1 234 567 890</a>
                    </div>
                    <div style={{ fontSize: 18 }}>
                        <strong>Email:</strong><br />
                        <a href="mailto:info@demoapp.com" style={{ color: "#6366f1", textDecoration: "none" }}>info@demoapp.com</a>
                    </div>
                </div>
                {/* Right: Map */}
                <div style={{ flex: 1, minWidth: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "100%", height: 340, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(99,102,241,0.10)" }}>
                        <iframe
                            title="Office Location"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik"
                            style={{ width: "100%", height: "100%", border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
