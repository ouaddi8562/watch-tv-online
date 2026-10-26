import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Watch-TV Online",
    description: "Frequently Asked Questions about our premium IPTV service. Everything you need to know before ordering.",
};

export default function FAQ() {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <p className="eyebrow">Help & Support</p>
                        <h2>Frequently Asked <span>Questions</span></h2>
                        <p>Everything you need to know before ordering. Got another question? Contact us on WhatsApp.</p>
                    </div>
                    
                    <div className="faq-list stack">
                        <div className="card">
                            <h3>How does delivery work after I subscribe?</h3>
                            <p>Once your payment is validated on WhatsApp, your login credentials (M3U link, Xtream codes, and installation guide) will be sent instantly to you within 5 to 15 minutes.</p>
                        </div>

                        <div className="card">
                            <h3>What internet speed do I need for streaming without buffering?</h3>
                            <p>For the best experience, we recommend a minimum internet speed of 15 Mbps for standard HD streaming, and at least 30 Mbps if you want to stream seamlessly in 4K resolution.</p>
                        </div>

                        <div className="card">
                            <h3>Can I watch on multiple screens at the same time?</h3>
                            <p>Yes! You can choose the desired number of screens (up to 5 devices) directly on our pricing page when placing your order. A single subscription can cover all your devices simultaneously if you select a multi-screen plan.</p>
                        </div>

                        <div className="card">
                            <h3>What devices are supported?</h3>
                            <p>Our service is highly compatible. You can watch on Amazon Firestick, Smart TVs (Samsung, LG, Sony, etc.), Android TV boxes, Apple TV, MAG boxes, smartphones (iOS/Android), tablets, and computers (Windows/Mac).</p>
                        </div>

                        <div className="card">
                            <h3>Do you offer a free trial before I buy?</h3>
                            <p>Instead of a limited free trial, we offer a rock-solid 7-Day Money-Back Guarantee. You can purchase a plan, try out all the premium features, and if you aren’t satisfied within the first 7 days, we will refund you entirely.</p>
                        </div>

                        <div className="card">
                            <h3>Is there an automatic renewal or contract?</h3>
                            <p>No. There are absolutely no hidden fees, contracts, or automatic billings. You only pay for the period you choose (e.g., 3 months). Once it expires, you manually renew only if you wish to continue.</p>
                        </div>

                        <div className="card">
                            <h3>Can I use my subscription in another country when I travel?</h3>
                            <p>Yes, your subscription is entirely portable. You can use it anywhere in the world as long as you have a stable internet connection. Our servers are globally distributed to ensure a smooth connection globally.</p>
                        </div>

                        <div className="card">
                            <h3>Do I need a VPN to use your service?</h3>
                            <p>A VPN is not mandatory as our servers are highly secure and encrypted. However, if your Internet Service Provider (ISP) is throttling IPTV traffic in your region, using a VPN can significantly improve your streaming experience. Our service is 100% VPN friendly.</p>
                        </div>

                        <div className="card">
                            <h3>How often is the VOD (Movies & Series) library updated?</h3>
                            <p>Our VOD library is updated daily. We continuously add the latest box office movies, newly released series episodes from major streaming platforms, and live sports replays so you always have fresh content.</p>
                        </div>

                        <div className="card">
                            <h3>What payment methods do you accept?</h3>
                            <p>To ensure maximum security and convenience, all payments are finalized securely via WhatsApp. Our support team will provide you with various flexible payment options depending on your region (such as PayPal, Credit/Debit Cards, or Crypto).</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

