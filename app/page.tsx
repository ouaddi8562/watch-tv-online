import Link from "next/link";
import PricingCalculator from "../components/PricingCalculator";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="container hero-content">
                    <div>
                        <div className="pill">
                            N°1 PREMIUM IPTV · 99.9% UPTIME
                        </div>
                        <h1>The <span>Premium IPTV</span>,<br/>clear and buffer-free.</h1>
                        <p>Instant access to over <strong>20,000 Live TV Channels</strong> and <strong>60,000 Movies & Series</strong> in stunning 4K/8K quality with advanced anti-freeze technology.</p>
                        
                        <div className="hero-actions">
                            <Link href="#pricing" className="btn btn-primary">
                                Explore Offers
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                            <Link href="/contact" className="btn btn-outline">
                                Free Trial
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hero-image-container">
                        <img src="/images/hero-banner.jpg" alt="IPTV Cinematic Display" className="hero-image" />
                        
                        <div className="floating-badge fb-1">
                            <div className="fb-icon blue">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                            </div>
                            <div className="fb-text">
                                <h4>Fluid Streaming</h4>
                                <p>4K Buffer-Free</p>
                            </div>
                        </div>
                        
                        <div className="floating-badge fb-2">
                            <div className="fb-icon purple">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div className="fb-text">
                                <h4>Anti-Freeze 5.0</h4>
                                <p>Active Protection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="stats" style={{ backgroundColor: "var(--card-bg)" }}>
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>20K+</h3>
                            <p>Live Channels Worldwide</p>
                        </div>
                        <div className="stat-item">
                            <h3>60K+</h3>
                            <p>VOD Movies & Series</p>
                        </div>
                        <div className="stat-item">
                            <h3>99.9%</h3>
                            <p>Uptime Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="pricing">
                <div className="container">
                    <div className="section-header">
                        <p style={{ textTransform: "uppercase", fontSize: 12, fontWeight: 700, color: "var(--text-light)", marginBottom: 8 }}>Pricing & Subscription</p>
                        <h2>Clear Plans, <span>No Surprises</span></h2>
                        <p>Choose your duration and number of screens. The price updates instantly - no hidden fees.</p>
                    </div>
                    <PricingCalculator />
                </div>
            </section>

            <section className="section" style={{ paddingBottom: 40, borderTop: "1px solid var(--border)", backgroundColor: "var(--card-bg)" }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: 32 }}>
                        <p style={{ textTransform: "uppercase", fontSize: 12, fontWeight: 700, color: "var(--text-light)", marginBottom: 8 }}>Compatibility</p>
                        <h2>Watch on <span>Any Device</span></h2>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
                        <div style={{ padding: "16px 32px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600 }}>📺 Smart TVs</div>
                        <div style={{ padding: "16px 32px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600 }}>🔥 Amazon Firestick</div>
                        <div style={{ padding: "16px 32px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600 }}>🍎 Apple TV</div>
                        <div style={{ padding: "16px 32px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600 }}>🤖 Android Box</div>
                        <div style={{ padding: "16px 32px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600 }}>💻 Windows & Mac</div>
                        <div style={{ padding: "16px 32px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600 }}>📱 iOS & Android</div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 24 }}>
                        <Link href="/devices" style={{ color: "var(--accent-color)", fontWeight: 600, textDecoration: "underline" }}>See all compatible devices</Link>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: "var(--card-bg)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="section-header">
                        <h2>How to Start in <span>3 Easy Steps</span></h2>
                        <p>Getting your premium IPTV up and running takes less than 5 minutes.</p>
                    </div>
                    <div className="grid-3">
                        <div className="step-card" style={{ boxShadow: "none", borderColor: "var(--border)" }}>
                            <div className="step-num">1</div>
                            <div className="icon-box" style={{ margin: "0 auto", background: "transparent", color: "var(--text-main)" }}>
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            </div>
                            <h3>Choose a Plan</h3>
                            <p>Select the subscription duration and the number of screens you want to connect simultaneously.</p>
                        </div>
                        <div className="step-card" style={{ boxShadow: "none", borderColor: "var(--border)" }}>
                            <div className="step-num">2</div>
                            <div className="icon-box" style={{ margin: "0 auto", background: "transparent", color: "var(--text-main)" }}>
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            </div>
                            <h3>Contact via WhatsApp</h3>
                            <p>Finalize your order securely with our human support team directly on WhatsApp for instant activation.</p>
                        </div>
                        <div className="step-card" style={{ boxShadow: "none", borderColor: "var(--border)" }}>
                            <div className="step-num">3</div>
                            <div className="icon-box" style={{ margin: "0 auto", background: "transparent", color: "var(--text-main)" }}>
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <h3>Start Watching!</h3>
                            <p>Receive your M3U link and Xtream Codes instantly. Follow the setup guide and enjoy your content!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Everything you love in <span>One Place</span></h2>
                        <p>No more switching between 5 different streaming apps. Get it all with Watch-TV.</p>
                    </div>
                    
                    <div className="grid-3" style={{ textAlign: "center" }}>
                        <div style={{ padding: 32, border: "1px solid var(--border)", borderRadius: 16 }}>
                            <h1 style={{ fontSize: 48, marginBottom: 16 }}>⚽</h1>
                            <h3 style={{ marginBottom: 8 }}>Live Sports</h3>
                            <p style={{ color: "var(--text-light)", fontSize: 14 }}>Never miss a match. Premier League, NBA, UFC, F1, and PPV events live.</p>
                        </div>
                        <div style={{ padding: 32, border: "1px solid var(--border)", borderRadius: 16 }}>
                            <h1 style={{ fontSize: 48, marginBottom: 16 }}>🍿</h1>
                            <h3 style={{ marginBottom: 8 }}>Cinema & Series</h3>
                            <p style={{ color: "var(--text-light)", fontSize: 14 }}>The latest box office hits and binge-worthy series from all major platforms.</p>
                        </div>
                        <div style={{ padding: 32, border: "1px solid var(--border)", borderRadius: 16 }}>
                            <h1 style={{ fontSize: 48, marginBottom: 16 }}>🌍</h1>
                            <h3 style={{ marginBottom: 8 }}>International</h3>
                            <p style={{ color: "var(--text-light)", fontSize: 14 }}>Watch news, shows, and channels from the US, UK, Europe, Latino, and more.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <Link href="/channels-vod" className="btn btn-outline">Explore our library</Link>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: "var(--card-bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container grid-2">
                    <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-glow)" }}>
                        <img src="/images/family.jpg" alt="Family watching TV" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div>
                        <p style={{ textTransform: "uppercase", fontSize: 12, fontWeight: 700, color: "var(--text-light)", marginBottom: 8 }}>Client Success Stories</p>
                        <h2 style={{ fontSize: "2.25rem", color: "var(--primary)", lineHeight: 1.2, marginBottom: 32 }}>What our clients <br/>are saying.</h2>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            <div style={{ padding: 24, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-color)" }}>
                                <div style={{ color: "#fbbf24", marginBottom: 8 }}>★★★★★</div>
                                <p style={{ fontStyle: "italic", marginBottom: 12 }}>"We cut the cord a year ago. Watch-TV Online has every single channel we used to pay $120/month for, without any freezing during big football matches."</p>
                                <p style={{ fontWeight: 600, fontSize: 14, color: "var(--primary)" }}>— David M., Chicago, IL</p>
                            </div>
                            <div style={{ padding: 24, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-color)" }}>
                                <div style={{ color: "#fbbf24", marginBottom: 8 }}>★★★★★</div>
                                <p style={{ fontStyle: "italic", marginBottom: 12 }}>"The setup took 5 minutes on my LG Smart TV. The WhatsApp support team was incredible and walked me through the whole thing."</p>
                                <p style={{ fontWeight: 600, fontSize: 14, color: "var(--primary)" }}>— Sarah K., Austin, TX</p>
                            </div>
                            <div style={{ padding: 24, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-color)" }}>
                                <div style={{ color: "#fbbf24", marginBottom: 8 }}>★★★★★</div>
                                <p style={{ fontStyle: "italic", marginBottom: 12 }}>"I travel a lot for work. Having access to all my local US channels from my iPad in a hotel room overseas has been an absolute lifesaver."</p>
                                <p style={{ fontWeight: 600, fontSize: 14, color: "var(--primary)" }}>— Michael T., New York, NY</p>
                            </div>
                            <div style={{ padding: 24, border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-color)" }}>
                                <div style={{ color: "#fbbf24", marginBottom: 8 }}>★★★★★</div>
                                <p style={{ fontStyle: "italic", marginBottom: 12 }}>"Best IPTV provider I've ever used. Zero lag during UFC pay-per-view events, which is exactly what I was looking for. Incredible value."</p>
                                <p style={{ fontWeight: 600, fontSize: 14, color: "var(--primary)" }}>— Omar H., Miami, FL</p>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: 32 }}>
                            <Link href="/faq" style={{ color: "var(--accent-color)", fontWeight: 600, textDecoration: "underline" }}>Read our Q&A for more details</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
