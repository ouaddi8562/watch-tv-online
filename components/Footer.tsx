import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col" style={{ gridColumn: "span 2" }}>
                        <Link href="/" className="logo" style={{ marginBottom: 16, display: "block" }}>
                            Watch-TV<span>.online</span>
                        </Link>
                        <p style={{ color: "var(--text-light)", fontSize: 14, maxWidth: 300, marginBottom: 24, lineHeight: 1.6 }}>
                            Watch-TV Online — Premium IPTV subscription: live channels, movies & series on demand, 5 min activation, 24/7 support.
                        </p>
                        <a href="https://wa.me/19296072130" target="_blank" rel="noopener noreferrer" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "#25D366",
                            color: "white",
                            padding: "10px 20px",
                            borderRadius: 24,
                            fontWeight: 600,
                            fontSize: 15,
                            textDecoration: "none",
                            transition: "background 0.2s"
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            +1 929-607-2130
                        </a>
                    </div>
                    <div className="footer-col">
                        <h4>Service</h4>
                        <ul>
                            <li><Link href="/pricing">Pricing & Subscription</Link></li>
                            <li><Link href="/channels-vod">Channels List</Link></li>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/pricing">How it works</Link></li>
                            <li><Link href="/contact">Become a Reseller</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Help</h4>
                        <ul>
                            <li><Link href="/installation">Setup Guides</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/#reviews">Customer Reviews</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/faq">About</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/refund">Refund Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/dmca">DMCA</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div style={{
                    marginTop: 60,
                    paddingTop: 24,
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                        <p style={{ color: "var(--text-light)", fontSize: 13, margin: 0 }}>
                            &copy; 2026 Watch-TV Online. Entertainment subscription service. All rights reserved.
                        </p>
                        <a href="https://wa.me/19296072130" target="_blank" rel="noopener noreferrer" style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: "var(--primary)",
                            fontWeight: 600,
                            fontSize: 14,
                            textDecoration: "none"
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            +1 929-607-2130
                        </a>
                    </div>
                    <p style={{ color: "var(--text-light)", fontSize: 12, margin: 0 }}>
                        Watch-TV Online is an independent service and is not affiliated with any channel, broadcaster or audiovisual group. Trademarks belong to their respective owners.
                    </p>
                </div>
            </div>
            {/* Sticky Mobile CTA */}
            <div className="mobile-sticky-cta">
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 600, margin: "0 auto", padding: "12px 20px"}}>
                    <div style={{fontWeight: 700}}>Subscriptions from $19.99</div>
                    <Link href="/pricing" className="btn btn-primary btn-sm">Choose Plan</Link>
                </div>
            </div>
            <style>{`
                .mobile-sticky-cta {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: var(--bg-color);
                    border-top: 1px solid var(--border);
                    z-index: 50;
                    box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
                }
                @media (max-width: 768px) {
                    .mobile-sticky-cta { display: block; }
                    body { padding-bottom: 60px; }
                }
            `}</style>
        </footer>
    );
}
