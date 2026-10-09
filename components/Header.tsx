
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header>
            <div className="container header-content">
                <Link href="/" className="logo">
                    <div className="logo-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                    Watch-TV<span>.online</span>
                </Link>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/devices">Devices</Link></li>
                        <li><Link href="/installation">Installation</Link></li>
                        <li><Link href="/features">Features</Link></li>
                        <li><Link href="/channels-vod">Channels</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><ThemeToggle /></li>
                        <li><Link href="/contact" className="btn btn-primary btn-sm" style={{color: "white"}}>Support</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

