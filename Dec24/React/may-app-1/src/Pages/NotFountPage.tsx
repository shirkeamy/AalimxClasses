import React from "react";

const NotFountPage: React.FC = () => {
    return (
        <div className="not-found" style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
            color: "#222",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
        }}>
            <div style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 8px 32px rgba(60,60,120,0.15)",
                padding: "3rem 2.5rem 2.5rem 2.5rem",
                textAlign: "center",
                maxWidth: 420
            }}>
                <div style={{ fontSize: 120, fontWeight: 700, color: "#6366f1", marginBottom: 0 }}>
                    404
                </div>
                <h1 style={{ fontSize: 32, margin: "0.5rem 0 1rem 0", color: "#222" }}>Page Not Found</h1>
                <p style={{ fontSize: 18, color: "#555", marginBottom: 24 }}>
                    Oops! The page you are looking for does not exist or has been moved.<br />
                    Please check the URL or return to the homepage.
                </p>
                <a href="/" style={{
                    display: "inline-block",
                    padding: "0.75rem 2rem",
                    background: "#6366f1",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 18,
                    boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
                    transition: "background 0.2s"
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
                onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
                >
                    Go Home
                </a>
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
}

export default NotFountPage;