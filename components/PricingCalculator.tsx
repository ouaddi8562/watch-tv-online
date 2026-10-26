"use client";

import { useState } from "react";
import { whatsappLink } from "../lib/site";

export default function PricingCalculator() {
    const [devices, setDevices] = useState<number>(1);
    const [mult, setMult] = useState<number>(1);

    const handleTabClick = (d: number, m: number) => {
        setDevices(d);
        setMult(m);
    };

    const getPrice = (base: number) => (base * mult).toFixed(2);
    const getMonthly = (base: number, months: number) => ((base * mult) / months).toFixed(2);
    
    const getWhatsAppLink = (planName: string, basePrice: number) => {
        const finalPrice = getPrice(basePrice);
        const text = `Hello Watch-TV Online! 👋\nI would like to order the IPTV subscription:\n  Plan: ${planName}\n  Devices: ${devices} screen(s)\n  Price: $${finalPrice}\n\nPlease tell me the payment and activation steps.`;
        return whatsappLink(text);
    };

    const plans = [
        { name: "3 Months", base: 19.99, months: 3, popular: false },
        { name: "6 Months", base: 39.99, months: 6, popular: false },
        { name: "12 Months", base: 49.99, months: 12, popular: true }
    ];

    return (
        <>
            <div className="device-selector-wrapper">
                <p>Number of connected devices</p>
                <div className="device-tabs">
                    <button className={`tab-btn ${devices === 1 ? "active" : ""}`} onClick={() => handleTabClick(1, 1)}>1</button>
                    <button className={`tab-btn ${devices === 2 ? "active" : ""}`} onClick={() => handleTabClick(2, 1.7)}>2</button>
                    <button className={`tab-btn ${devices === 3 ? "active" : ""}`} onClick={() => handleTabClick(3, 2.4)}>3</button>
                    <button className={`tab-btn ${devices === 4 ? "active" : ""}`} onClick={() => handleTabClick(4, 3.0)}>4</button>
                    <button className={`tab-btn ${devices === 5 ? "active" : ""}`} onClick={() => handleTabClick(5, 3.5)}>5</button>
                </div>
            </div>

            <div className="grid-3" id="pricing-grid">
                {plans.map((plan, idx) => (
                    <div key={idx} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                        {plan.popular && <span className="badge">Best Value</span>}
                        <div className="plan-header">
                            <h3>{plan.name}</h3>
                            <span className="device-label">{devices} screen{devices > 1 ? "s" : ""}</span>
                        </div>
                        <div className="plan-price">
                            <span className="amount">${getPrice(plan.base)}</span>
                        </div>
                        <div className="plan-price-monthly">
                            that&apos;s <span>${getMonthly(plan.base, plan.months)}</span> / month
                        </div>
                        <ul className="plan-features">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4 4 10-10"/></svg> All Premium Live Channels</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4 4 10-10"/></svg> 60,000+ VOD Movies & Series</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4 4 10-10"/></svg> 4K / Full HD Quality</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4 4 10-10"/></svg> 7-Day Catch-up (EPG)</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4 4 10-10"/></svg> Anti-freeze technology</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4 4 10-10"/></svg> 5-minute activation</li>
                        </ul>
                        <a href={getWhatsAppLink(plan.name, plan.base)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            Order {plan.name}
                        </a>
                    </div>
                ))}
            </div>
            <p className="pricing-note">Payment finalized on WhatsApp • 7-day money-back guarantee • No commitment</p>
        </>
    );
}

