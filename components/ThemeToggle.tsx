"use client";

import { useSyncExternalStore } from "react";

// The theme lives on <html data-theme>, set before paint by the inline script in app/layout.tsx.
function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
}
const getTheme = () => document.documentElement.getAttribute("data-theme") || "light";
const getServerTheme = () => null;

export default function ThemeToggle() {
    const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        try {
            localStorage.setItem("theme", newTheme);
        } catch {
            // storage unavailable (private mode) — theme still applies for this visit
        }
    };

    if (theme === null) return <button className="theme-toggle theme-toggle-placeholder" aria-label="Toggle Theme"></button>;

    return (
        <button className="theme-toggle" aria-label="Toggle Theme" onClick={toggleTheme}>
            {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
        </button>
    );
}
