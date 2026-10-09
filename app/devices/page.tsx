
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Compatible Devices | Watch-TV Online",
    description: "Watch Watch-TV Online on your television, computer, tablet or smartphone. One subscription is all you need.",
};

export default function Devices() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: 0 }}>
                <div className="container text-center" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
                    <h1>Compatible with <span>all your screens</span>.</h1>
                    <p style={{ margin: "0 auto 40px" }}>Watch Watch-TV Online on your television, computer, tablet or smartphone. One subscription is all you need.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 40, border: "1px solid var(--border)", boxShadow: "var(--shadow-glow)" }}>
                        <img src="/images/devices-mockup.jpg" alt="Compatible Devices" style={{ width: "100%", display: "block" }} />
                    </div>
                    
                    <div className="grid-4">
                        <div className="card" style={{ textAlign: "center" }}>
                            <h3 style={{ marginTop: 12 }}>📺 Smart TV</h3>
                            <p>Samsung Tizen, LG WebOS, Android TV, Sony, Philips, TCL, Hisense...</p>
                        </div>
                        <div className="card" style={{ textAlign: "center" }}>
                            <h3 style={{ marginTop: 12 }}>🔥 Box & Sticks</h3>
                            <p>Amazon Firestick, Apple TV, Xiaomi Mi Box, Nvidia Shield, Formuler, MAG...</p>
                        </div>
                        <div className="card" style={{ textAlign: "center" }}>
                            <h3 style={{ marginTop: 12 }}>📱 Mobiles & Tablets</h3>
                            <p>iPhone, iPad, Android Smartphones and Tablets.</p>
                        </div>
                        <div className="card" style={{ textAlign: "center" }}>
                            <h3 style={{ marginTop: 12 }}>💻 Computers</h3>
                            <p>Windows, Mac OS, Linux via VLC, Ibo Player, Smarters Pro, etc.</p>
                        </div>
                    </div>
                    
                    <div style={{ textAlign: "center", marginTop: 48 }}>
                        <p style={{ marginBottom: 24, color: "var(--text-light)" }}>You will receive a detailed installation guide per device after your order.</p>
                        <Link href="/pricing" className="btn btn-primary">Order Now</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

