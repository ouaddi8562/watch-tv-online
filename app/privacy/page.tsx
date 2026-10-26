import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Watch-TV Online",
};

export default function Page() {
    return (
        <main className="legal-page">
            <h1>Privacy Policy</h1>
            <div className="legal-content">
                
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

            </div>
        </main>
    );
}
