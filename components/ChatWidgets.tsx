"use client";

import { useEffect } from "react";
import { CRISP_WEBSITE_ID, whatsappLink } from "../lib/site";

declare global {
    interface Window {
        $crisp?: unknown[];
        CRISP_WEBSITE_ID?: string;
    }
}

export default function ChatWidgets() {
    useEffect(() => {
        // Initialize Crisp Chat (once)
        if (window.$crisp) return;
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
        const s = document.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        document.head.appendChild(s);
    }, []);

    return (
        <div className="floating-widgets">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="widget-btn widget-wa" id="wa-floating-btn" aria-label="Chat on WhatsApp">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <div className="wa-badge">1</div>
            </a>
        </div>
    );
}
