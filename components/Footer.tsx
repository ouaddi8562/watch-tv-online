import Link from "next/link";
import { WHATSAPP_DISPLAY, whatsappLink } from "../lib/site";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link href="/" className="logo footer-logo">
                            <span>Watch-TV<span>.online</span></span>
                        </Link>
                        <p className="footer-about">
                            Watch-TV Online — Premium IPTV subscription: live channels, movies & series on demand, 5 min activation, 24/7 support.
                        </p>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="wa-pill">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            {WHATSAPP_DISPLAY}
                        </a>
                    </div>
                    <div className="footer-col">
                        <h4>Service</h4>
                        <ul>
                            <li><Link href="/pricing">Pricing & Subscription</Link></li>
                            <li><Link href="/channels-vod">Channels List</Link></li>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/#how-it-works">How it works</Link></li>
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

                <div className="footer-legal">
                    <div className="footer-legal-row">
                        <p>&copy; 2026 Watch-TV Online. Entertainment subscription service. All rights reserved.</p>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="footer-wa-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            {WHATSAPP_DISPLAY}
                        </a>
                    </div>
                    <p className="footer-disclaimer">
                        Watch-TV Online is an independent service and is not affiliated with any channel, broadcaster or audiovisual group. Trademarks belong to their respective owners.
                    </p>
                </div>
            </div>
            {/* Sticky Mobile CTA */}
            <div className="mobile-sticky-cta">
                <div className="mobile-sticky-cta-inner">
                    <div>Subscriptions from $19.99</div>
                    <Link href="/pricing" className="btn btn-primary btn-sm">Choose Plan</Link>
                </div>
            </div>
        </footer>
    );
}
