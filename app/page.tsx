import Image from "next/image";
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
                        </div>
                    </div>
                    
                    <div className="hero-image-container">
                        <Image src="/images/hero-banner.jpg" alt="IPTV Cinematic Display" className="hero-image" width={1024} height={1024} sizes="(max-width: 1024px) 100vw, 550px" preload />
                        
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

            <div className="stats section-alt">
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
                        <p className="eyebrow">Pricing & Subscription</p>
                        <h2>Clear Plans, <span>No Surprises</span></h2>
                        <p>Choose your duration and number of screens. The price updates instantly - no hidden fees.</p>
                    </div>
                    <PricingCalculator />
                </div>
            </section>

            <section className="section section-alt pb-40">
                <div className="container">
                    <div className="section-header compact">
                        <p className="eyebrow">Compatibility</p>
                        <h2>Watch on <span>Any Device</span></h2>
                    </div>
                    <div className="device-chips">
                        <div className="device-chip">📺 Smart TVs</div>
                        <div className="device-chip">🔥 Amazon Firestick</div>
                        <div className="device-chip">🍎 Apple TV</div>
                        <div className="device-chip">🤖 Android Box</div>
                        <div className="device-chip">💻 Windows & Mac</div>
                        <div className="device-chip">📱 iOS & Android</div>
                    </div>
                    <div className="center mt-24">
                        <Link href="/devices" className="text-link">See all compatible devices</Link>
                    </div>
                </div>
            </section>

            <section className="section section-alt border-bottom" id="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2>How to Start in <span>3 Easy Steps</span></h2>
                        <p>Getting your premium IPTV up and running takes less than 5 minutes.</p>
                    </div>
                    <div className="grid-3">
                        <div className="step-card flat">
                            <div className="step-num">1</div>
                            <div className="icon-box plain">
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            </div>
                            <h3>Choose a Plan</h3>
                            <p>Select the subscription duration and the number of screens you want to connect simultaneously.</p>
                        </div>
                        <div className="step-card flat">
                            <div className="step-num">2</div>
                            <div className="icon-box plain">
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            </div>
                            <h3>Contact via WhatsApp</h3>
                            <p>Finalize your order securely with our human support team directly on WhatsApp for instant activation.</p>
                        </div>
                        <div className="step-card flat">
                            <div className="step-num">3</div>
                            <div className="icon-box plain">
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
                    
                    <div className="grid-3 center">
                        <div className="highlight-card">
                            <div className="emoji-icon" aria-hidden="true">⚽</div>
                            <h3>Live Sports</h3>
                            <p>Never miss a match. Premier League, NBA, UFC, F1, and PPV events live.</p>
                        </div>
                        <div className="highlight-card">
                            <div className="emoji-icon" aria-hidden="true">🍿</div>
                            <h3>Cinema & Series</h3>
                            <p>The latest box office hits and binge-worthy series from all major platforms.</p>
                        </div>
                        <div className="highlight-card">
                            <div className="emoji-icon" aria-hidden="true">🌍</div>
                            <h3>International</h3>
                            <p>Watch news, shows, and channels from the US, UK, Europe, Latino, and more.</p>
                        </div>
                    </div>
                    <div className="center mt-40">
                        <Link href="/channels-vod" className="btn btn-outline">Explore our library</Link>
                    </div>
                </div>
            </section>

            <section className="section section-alt" id="reviews">
                <div className="container grid-2">
                    <div className="media-frame fill">
                        <Image src="/images/family.jpg" alt="Family watching TV" width={1024} height={1024} sizes="(max-width: 900px) 100vw, 530px" />
                    </div>
                    <div>
                        <p className="eyebrow">Client Success Stories</p>
                        <h2 className="split-title">What our clients <br/>are saying.</h2>
                        
                        <div className="stack loose">
                            <div className="review">
                                <div className="review-stars">★★★★★</div>
                                <p className="review-text">“We cut the cord a year ago. Watch-TV Online has every single channel we used to pay $120/month for, without any freezing during big football matches.”</p>
                                <p className="review-author">— David M., Chicago, IL</p>
                            </div>
                            <div className="review">
                                <div className="review-stars">★★★★★</div>
                                <p className="review-text">“The setup took 5 minutes on my LG Smart TV. The WhatsApp support team was incredible and walked me through the whole thing.”</p>
                                <p className="review-author">— Sarah K., Austin, TX</p>
                            </div>
                            <div className="review">
                                <div className="review-stars">★★★★★</div>
                                <p className="review-text">“I travel a lot for work. Having access to all my local US channels from my iPad in a hotel room overseas has been an absolute lifesaver.”</p>
                                <p className="review-author">— Michael T., New York, NY</p>
                            </div>
                            <div className="review">
                                <div className="review-stars">★★★★★</div>
                                <p className="review-text">“Best IPTV provider I’ve ever used. Zero lag during UFC pay-per-view events, which is exactly what I was looking for. Incredible value.”</p>
                                <p className="review-author">— Omar H., Miami, FL</p>
                            </div>
                        </div>
                        
                        <div className="mt-32">
                            <Link href="/faq" className="text-link">Read our Q&A for more details</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
