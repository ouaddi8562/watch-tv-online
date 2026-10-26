import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | Watch-TV Online",
    description: "Discover why Watch-TV Online is the leader in premium IPTV streaming.",
};

export default function Features() {
    return (
        <main>
            <section className="hero page-hero pb-20">
                <div className="container">
                    <h1>Premium <span>Features</span>.</h1>
                    <p>Discover why Watch-TV Online is the leader in premium IPTV streaming.</p>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div className="media-frame banner mb-60">
                        <Image src="/images/servers.jpg" alt="Our high speed servers" width={1024} height={1024} sizes="(max-width: 900px) 100vw, 530px" />
                    </div>

                    <div className="grid-3">
                        <div className="card">
                            <div className="icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 18v-3M9 18v-6M14 18v-9M19 18V6"/></svg></div>
                            <h3>Anti-Freeze 5.0</h3>
                            <p>Our proprietary technology analyzes and redirects your stream in milliseconds to guarantee buffer-free viewing, even during highly watched live events.</p>
                        </div>
                        <div className="card">
                            <div className="icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10v4M7 12h2.5M9.5 10v4M13 10v4h1.5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H13Z"/></svg></div>
                            <h3>4K / 8K Quality</h3>
                            <p>Experience your movies and sports events in ultra high definition. Our servers encode the stream in the best possible quality for your device.</p>
                        </div>
                        <div className="card">
                            <div className="icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                            <h3>Zero Hidden Fees</h3>
                            <p>Clear pricing and no automatic subscription renewals. You pay exactly what you see, and renewal is always manual and at your request.</p>
                        </div>
                        <div className="card">
                            <div className="icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                            <h3>7-Day Catch-Up</h3>
                            <p>Missed your favorite show? Go back in time up to 7 days on most major international live TV channels.</p>
                        </div>
                        <div className="card">
                            <div className="icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
                            <h3>24/7 WhatsApp Support</h3>
                            <p>A real human responds to you day and night. Need setup help or experiencing a technical issue? We are here to assist instantly.</p>
                        </div>
                        <div className="card">
                            <div className="icon-box"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                            <h3>VPN Allowed & Included</h3>
                            <p>Our service is compatible with all VPNs on the market. While not required, you are free to use your VPN for maximum privacy.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container grid-2">
                    <div>
                        <p className="eyebrow">Deep Dive Q&A</p>
                        <h2 className="split-title tight">Everything you need<br/>to know.</h2>
                        <p className="muted mb-24">We want you to be 100% confident in your choice. Here are the answers to the most technical questions our clients ask.</p>
                    </div>
                    <div className="qa-list stack">
                        <div className="card">
                            <h4>What exactly does “Anti-Freeze” mean?</h4>
                            <p>During major sports events, standard IPTV servers get overloaded and freeze. Our load-balancers automatically switch you to an empty backup server seamlessly, so you never miss a goal.</p>
                        </div>
                        <div className="card">
                            <h4>Can I use a VPN with this service?</h4>
                            <p>Yes! In fact, we encourage it if your ISP throttles streaming traffic. Our servers do not block VPNs.</p>
                        </div>
                        <div className="card">
                            <h4>How fast does my internet need to be?</h4>
                            <p>15 Mbps is enough for standard HD. If you plan to stream our 4K channels, we strongly recommend 30 Mbps or higher for a completely flawless experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

