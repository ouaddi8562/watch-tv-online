import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | Watch-TV Online",
};

export default function Page() {
    return (
        <main style={{ padding: "80px 20px", maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ marginBottom: 32, fontSize: "2.5rem", color: "var(--primary)", fontWeight: 800 }}>Refund Policy</h1>
            <div className="legal-content" style={{ color: "var(--text-main)", lineHeight: 1.8, fontSize: 16 }}>
                
<h2>1. 7-Day Money-Back Guarantee</h2>
<p>At Watch-TV Online, we want you to be completely satisfied with your purchase. We offer a strict, no-questions-asked 7-Day Money-Back Guarantee for all new subscriptions.</p>
<p>Because we do not offer free trials (as they do not provide enough time to properly test stability during peak hours), we encourage you to purchase a subscription and test our service thoroughly. If you experience buffering, missing channels, or if the service simply does not meet your expectations, you are fully covered.</p>

<h2>2. How to Request a Refund</h2>
<p>To request a refund within your first 7 days, please follow these simple steps:</p>
<ul>
    <li>Contact our support team directly via WhatsApp at <strong>+1 929-607-2130</strong>.</li>
    <li>Provide your account details (the name or email used during setup).</li>
    <li>State clearly that you would like a refund. You do not need to provide a lengthy explanation, though feedback is always appreciated.</li>
</ul>

<h2>3. Refund Processing Times</h2>
<p>Once your refund is approved on WhatsApp, it will be processed immediately on our end. Depending on your original payment method, it may take <strong>1 to 5 business days</strong> for the funds to appear back in your account.</p>

<h2>4. Exceptions & Non-Refundable Cases</h2>
<ul>
    <li><strong>After 7 Days:</strong> We cannot issue full refunds after the initial 7-day period has passed.</li>
    <li><strong>Account Abuse:</strong> If your account was suspended for violating our Terms of Service (such as sharing your account across multiple locations simultaneously without a multi-device plan), you are not eligible for a refund.</li>
</ul>

            </div>
            <style>{`
                .legal-content h2 { color: var(--primary); margin: 32px 0 16px; font-size: 1.5rem; }
                .legal-content p { margin-bottom: 16px; color: var(--text-light); }
                .legal-content ul { margin-bottom: 24px; padding-left: 20px; color: var(--text-light); }
                .legal-content li { margin-bottom: 8px; }
            `}</style>
        </main>
    );
}
