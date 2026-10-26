"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/devices", label: "Devices" },
    { href: "/installation", label: "Installation" },
    { href: "/features", label: "Features" },
    { href: "/channels-vod", label: "Channels" },
    { href: "/faq", label: "FAQ" },
];

export default function NavMenu() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const close = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <div className="nav-wrap">
            <nav id="site-nav" className={open ? "open" : undefined}>
                <ul>
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className={pathname === l.href ? "active" : undefined} onClick={close}>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                    <li className="nav-support">
                        <Link href="/contact" className="btn btn-primary btn-sm" style={{ color: "white" }} onClick={close}>
                            Support
                        </Link>
                    </li>
                </ul>
            </nav>
            <ThemeToggle />
            <button
                type="button"
                className="nav-burger"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="site-nav"
                onClick={() => setOpen((o) => !o)}
            >
                {open ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
                )}
            </button>
        </div>
    );
}
