import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Compatible Devices | Watch-TV Online",
    description: "Watch Watch-TV Online on your television, computer, tablet or smartphone. One subscription is all you need.",
};

export default function Devices() {
    return (
        <main>
            <section className="hero page-hero">
                <div className="container">
                    <h1>Compatible with <span>all your screens</span>.</h1>
                    <p>Watch Watch-TV Online on your television, computer, tablet or smartphone. One subscription is all you need.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="media-frame mb-40">
                        <Image src="/images/devices-mockup.jpg" alt="Compatible Devices" width={1024} height={1024} sizes="(max-width: 900px) 100vw, 530px" />
                    </div>
                    
                    <div className="grid-4">
                        <div className="card device-card">
                            <h3>📺 Smart TV</h3>
                            <p>Samsung Tizen, LG WebOS, Android TV, Sony, Philips, TCL, Hisense...</p>
                        </div>
                        <div className="card device-card">
                            <h3>🔥 Box & Sticks</h3>
                            <p>Amazon Firestick, Apple TV, Xiaomi Mi Box, Nvidia Shield, Formuler, MAG...</p>
                        </div>
                        <div className="card device-card">
                            <h3>📱 Mobiles & Tablets</h3>
                            <p>iPhone, iPad, Android Smartphones and Tablets.</p>
                        </div>
                        <div className="card device-card">
                            <h3>💻 Computers</h3>
                            <p>Windows, Mac OS, Linux via VLC, Ibo Player, Smarters Pro, etc.</p>
                        </div>
                    </div>
                    
                    <div className="center mt-48">
                        <p className="muted mb-24">You will receive a detailed installation guide per device after your order.</p>
                        <Link href="/pricing" className="btn btn-primary">Order Now</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

