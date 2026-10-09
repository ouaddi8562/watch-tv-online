
const fs = require("fs");

function generatePage(title, content) {
    return `import { Metadata } from "next";

export const metadata: Metadata = {
    title: "${title} | Watch-TV Online",
};

export default function Page() {
    return (
        <main style={{ padding: "80px 20px", maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ marginBottom: 32, fontSize: "2.5rem", color: "var(--primary)", fontWeight: 800 }}>${title}</h1>
            <div className="legal-content" style={{ color: "var(--text-main)", lineHeight: 1.8, fontSize: 16 }}>
                ${content}
            </div>
            <style>{\`
                .legal-content h2 { color: var(--primary); margin: 32px 0 16px; font-size: 1.5rem; }
                .legal-content p { margin-bottom: 16px; color: var(--text-light); }
                .legal-content ul { margin-bottom: 24px; padding-left: 20px; color: var(--text-light); }
                .legal-content li { margin-bottom: 8px; }
            \`}</style>
        </main>
    );
}
`;
}

const refundContent = `
<h2>1. 7-Day Money-Back Guarantee</h2>
<p>At Watch-TV Online, we want you to be completely satisfied with your purchase. We offer a strict, no-questions-asked 7-Day Money-Back Guarantee for all new subscriptions.</p>
<p>Because we do not offer 24-hour free trials (as they do not provide enough time to properly test stability during peak hours), we encourage you to purchase a subscription and test our service thoroughly. If you experience buffering, missing channels, or if the service simply does not meet your expectations, you are fully covered.</p>

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
`;

const termsContent = `
<h2>1. Acceptance of Terms</h2>
<p>By accessing and subscribing to Watch-TV Online, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our service.</p>

<h2>2. Service Usage & Restrictions</h2>
<p>Your subscription is for personal, non-commercial use only. You agree to the following conditions:</p>
<ul>
    <li><strong>Device Limits:</strong> You may only use the service on the number of simultaneous screens purchased in your plan. If you purchased a 1-device plan, attempting to stream from two TVs at the same time will result in an automatic temporary block.</li>
    <li><strong>No Restreaming:</strong> You may not capture, rip, restream, or re-broadcast any of our feeds.</li>
    <li><strong>Account Sharing:</strong> You may not share your login credentials or M3U link with individuals outside of your household.</li>
</ul>

<h2>3. Service Availability (99.9% Uptime)</h2>
<p>We guarantee a 99.9% network uptime. However, IPTV technology is dependent on your local internet connection. We are not responsible for buffering caused by your Internet Service Provider (ISP) throttling, local Wi-Fi interference, or insufficient bandwidth.</p>
<p>If an ISP block occurs, you are permitted (and encouraged) to use a VPN. Our servers do not block VPN connections.</p>

<h2>4. Renewals & Billing</h2>
<p>Watch-TV Online operates on a strict <strong>No Auto-Renewal</strong> policy. When your subscription expires, it will automatically stop working. We will never automatically charge your card. To continue using the service, you must proactively contact us to renew.</p>

<h2>5. Modifications to Service</h2>
<p>We reserve the right to add, remove, or modify channels and VOD content without prior notice. Channel lineups are subject to change based on source availability.</p>
`;

const privacyContent = `
<h2>1. Information We Collect</h2>
<p>We strongly believe in data minimization. We only collect the information absolutely necessary to provide you with your IPTV subscription:</p>
<ul>
    <li>Your WhatsApp phone number (used exclusively for communication, support, and delivering your login details).</li>
    <li>An optional email address (if you prefer communication via email).</li>
</ul>

<h2>2. Payment Security</h2>
<p><strong>We do not collect or store your credit card information.</strong> All transactions are handled securely via third-party payment gateways during our WhatsApp checkout process. Watch-TV Online servers never have access to your raw payment data.</p>

<h2>3. Usage & Viewing Logs</h2>
<p>We respect your privacy. <strong>We do not log your viewing history.</strong> We do not track which movies you watch, which channels you view, or what time you stream.</p>
<p>The only technical data monitored by our automated load-balancers is your IP address and active connection count. This is strictly to enforce the device limits of your purchased plan and to prevent DDoS attacks against our network.</p>

<h2>4. Data Sharing</h2>
<p>We will never sell, rent, or share your personal information (including your phone number) with any third parties, marketing agencies, or advertisers.</p>
`;

const dmcaContent = `
<h2>1. Nature of Our Service</h2>
<p>Watch-TV Online acts purely as an index and directory of media links found publicly on the Internet. <strong>We do not host, store, upload, or transmit any video files, live streams, or media on our own servers.</strong></p>
<p>All content provided is streamed directly from third-party media servers over which we have no control.</p>

<h2>2. Copyright Infringement & Takedown Requests</h2>
<p>Watch-TV Online respects the intellectual property rights of others. If you are a copyright owner or an agent thereof, and you believe that any content linked by our service infringes upon your copyrights, please submit a formal DMCA takedown request.</p>

<h2>3. Submitting a Notice</h2>
<p>To file a copyright infringement notification, you must send a written communication that includes the following:</p>
<ul>
    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.</li>
    <li>Identification of the copyrighted work claimed to have been infringed.</li>
    <li>Identification of the material that is claimed to be infringing and a specific URL / M3U entry pointing to the location of the material.</li>
    <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and an email address.</li>
</ul>

<h2>4. Action Taken</h2>
<p>Upon receipt of a valid and complete DMCA notice, Watch-TV Online will promptly remove or disable access to the infringing links within our index. Because we do not host the files, removing the link from our directory is the maximum extent of the action we can take.</p>
`;

fs.writeFileSync("app/refund/page.tsx", generatePage("Refund Policy", refundContent), "utf-8");
fs.writeFileSync("app/terms/page.tsx", generatePage("Terms of Service", termsContent), "utf-8");
fs.writeFileSync("app/privacy/page.tsx", generatePage("Privacy Policy", privacyContent), "utf-8");
fs.writeFileSync("app/dmca/page.tsx", generatePage("DMCA", dmcaContent), "utf-8");

