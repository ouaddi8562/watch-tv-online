
import Link from "next/link";
import NavMenu from "./NavMenu";

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
                    <span>Watch-TV<span>.online</span></span>
                </Link>
                <NavMenu />
            </div>
        </header>
    );
}

