import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DMCA | Watch-TV Online",
};

export default function Page() {
    return (
        <main style={{ padding: "80px 20px", maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ marginBottom: 32, fontSize: "2.5rem", color: "var(--primary)", fontWeight: 800 }}>DMCA</h1>
            <div className="legal-content" style={{ color: "var(--text-main)", lineHeight: 1.8, fontSize: 16 }}>
                
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
