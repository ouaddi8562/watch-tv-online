
import { Metadata } from "next";
import PricingCalculator from "../../components/PricingCalculator";

export const metadata: Metadata = {
    title: "IPTV Subscription Plans & Prices | Watch-TV Online",
    description: "Clear IPTV Subscription, no surprises. Choose your duration and number of screens. The price updates instantly — no hidden fees.",
};

export default function Pricing() {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <p style={{ textTransform: "uppercase", fontSize: 12, fontWeight: 700, color: "var(--text-light)", marginBottom: 8 }}>Pricing & Subscription</p>
                        <h2>Clear IPTV Subscription, <br/><span>no surprises.</span></h2>
                        <p>Choose your duration and number of screens. The price updates instantly — no hidden fees, no commitments.</p>
                    </div>
                    
                    <PricingCalculator />
                </div>
            </section>

            <section className="section" style={{ backgroundColor: "var(--card-bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="grid-3" style={{ textAlign: "center" }}>
                        <div style={{ padding: "32px 16px" }}>
                            <div style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22c55e", width: 64, height: 64, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h3>Secure WhatsApp Checkout</h3>
                            <p style={{ color: "var(--text-light)", marginTop: 12, fontSize: 14 }}>You don't need to enter your credit card on a random website. You finalize the payment directly with a human via WhatsApp using secure methods.</p>
                        </div>
                        <div style={{ padding: "32px 16px" }}>
                            <div style={{ background: "rgba(249, 115, 22, 0.1)", color: "#f97316", width: 64, height: 64, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
                            </div>
                            <h3>7-Day Money Back</h3>
                            <p style={{ color: "var(--text-light)", marginTop: 12, fontSize: 14 }}>We don't offer 2-hour trials because they aren't enough to test stability. Buy a plan, test it for a week, and if you aren't satisfied, we refund you.</p>
                        </div>
                        <div style={{ padding: "32px 16px" }}>
                            <div style={{ background: "rgba(14, 165, 233, 0.1)", color: "#0ea5e9", width: 64, height: 64, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <h3>No Auto-Renewal</h3>
                            <p style={{ color: "var(--text-light)", marginTop: 12, fontSize: 14 }}>We do not save your payment details, nor do we auto-charge you. When your plan expires, it simply ends. You renew manually only if you wish.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

