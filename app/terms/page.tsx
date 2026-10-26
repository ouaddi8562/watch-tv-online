import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Watch-TV Online",
};

export default function Page() {
    return (
        <main className="legal-page">
            <h1>Terms of Service</h1>
            <div className="legal-content">
                
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

            </div>
        </main>
    );
}
