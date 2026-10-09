
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Watch-TV Online",
    description: "We provide 24/7 human support via WhatsApp for any questions, support, or trial requests.",
};

export default function Contact() {
    return (
        <main>
            <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
                <div className="container">
                    <div className="card" style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
                        <div className="icon-box" style={{ margin: "0 auto 24px", background: "#dcfce7", color: "#22c55e" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <h2>We are on WhatsApp!</h2>
                        <p style={{ marginTop: 12, color: "var(--text-light)" }}>We provide 24/7 human support. Click the button below to chat with us instantly for any questions, support, or to request a trial.</p>
                        
                        <a href="https://wa.me/19296072130?text=Hello%20Watch-TV%20Online!%20I%20need%20some%20help." target="_blank" rel="noopener noreferrer" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 12,
                            backgroundColor: "#25D366",
                            color: "white",
                            padding: "16px 32px",
                            borderRadius: "var(--radius-full)",
                            fontSize: 18,
                            fontWeight: 700,
                            boxShadow: "var(--shadow-md)",
                            transition: "all 0.3s",
                            marginTop: 24,
                            textDecoration: "none"
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

