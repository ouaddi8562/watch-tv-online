
"use client";

import { useEffect } from "react";

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
        window.CRISP_WEBSITE_ID = "b5dfb1b1-ec10-4f34-93fb-cbd44d933df0";
        const s = document.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        document.head.appendChild(s);
    }, []);

    return (
        <>
            <style>{`
                .floating-widgets {
                    position: fixed;
                    bottom: 24px;
                    left: 24px;
                    z-index: 9999;
                    pointer-events: none;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .widget-btn {
                    pointer-events: auto;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    transition: transform 0.3s, box-shadow 0.3s;
                    position: relative;
                    cursor: pointer;
                    text-decoration: none;
                }
                .widget-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                }
                .widget-wa {
                    background-color: #25D366;
                    color: white;
                }
                .widget-wa:hover {
                    background-color: #128C7E;
                }
                .wa-badge {
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    background-color: #ef4444;
                    color: white;
                    font-size: 11px;
                    font-weight: bold;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid var(--bg-color);
                }
                @media (max-width: 768px) {
                    .floating-widgets { bottom: 84px; left: 16px; }
                    .widget-btn { width: 50px; height: 50px; }
                }
            `}</style>
            
            <div className="floating-widgets">
                <a href="https://wa.me/19296072130" target="_blank" rel="noopener noreferrer" className="widget-btn widget-wa" id="wa-floating-btn">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <div className="wa-badge">1</div>
                </a>
            </div>
        </>
    );
}

