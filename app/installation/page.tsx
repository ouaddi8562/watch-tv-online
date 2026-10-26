import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Install and Setup | Watch-TV Online",
    description: "Step-by-step guide to install and set up your IPTV subscription on Firestick, Android TV, and Smart TVs.",
};

export default function Installation() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: 0 }}>
                <div className="container text-center" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
                    <p style={{ textTransform: "uppercase", fontSize: 14, fontWeight: 700, color: "var(--primary)", marginBottom: 12, letterSpacing: 1 }}>Setup Guide</p>
                    <h1>How to Install and Setup <span>Watch-TV</span></h1>
                    <p style={{ margin: "0 auto 40px" }}>Follow our 4 easy steps to get IPTV Smarters Pro running on your Firestick, Android TV, or Android Box in under 5 minutes.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h2>Enable Unknown Sources</h2>
                            <p>First, we need to prepare your Firestick or Android TV to allow third-party installations.</p>
                            <ul>
                                <li>From your home screen, go to <strong>Settings</strong> (the gear icon).</li>
                                <li>Select <strong>My Fire TV</strong> (or Device Preferences on Android TV).</li>
                            </ul>
                            <Image src="/images/installation/My-Fire-TV.webp" alt="My Fire TV Settings" className="step-image" style={{ height: "auto" }} width={1920} height={1080} sizes="(max-width: 600px) 100vw, 500px" />
                            <ul>
                                <li>Select <strong>Developer Options</strong>. <em>(Note: If you don&apos;t see Developer Options, click on “About”, highlight your device name, and press the OK button 7 times to reveal it).</em></li>
                            </ul>
                            <Image src="/images/installation/Developer-Options-Xtreme-HD.webp" alt="Developer Options" className="step-image" style={{ height: "auto" }} width={1920} height={1080} sizes="(max-width: 600px) 100vw, 500px" />
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h2>Get the Downloader App</h2>
                            <p>The “Downloader” app is a vital tool that lets you easily download IPTV apps onto your TV.</p>
                            <ul>
                                <li>Go back to your Home Screen and click on the <strong>Find / Search</strong> magnifying glass icon.</li>
                            </ul>
                            <Image src="/images/installation/XtremeHD-Search-Box.webp" alt="Search Icon" className="step-image" style={{ height: "auto" }} width={1920} height={1080} sizes="(max-width: 600px) 100vw, 500px" />
                            <ul>
                                <li>Type in <strong>Downloader</strong>.</li>
                            </ul>
                            <Image src="/images/installation/Type-Downloader-Setup-Xtreme.webp" alt="Type Downloader" className="step-image" style={{ height: "auto" }} width={1920} height={1080} sizes="(max-width: 600px) 100vw, 500px" />
                            <ul>
                                <li>Select the orange Downloader app from the search results and click <strong>Download / Install</strong>.</li>
                            </ul>
                            <Image src="/images/installation/Download-Orange-Icon-Xtreme.webp" alt="Downloader App" className="step-image" style={{ height: "auto" }} width={1920} height={1080} sizes="(max-width: 600px) 100vw, 500px" />
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h2>Download & Install IPTV Smarters</h2>
                            <p>Now we will use Downloader to install the world&apos;s best IPTV player: IPTV Smarters Pro.</p>
                            <ul>
                                <li>First, go back to Settings &gt; My Fire TV &gt; Developer Options &gt; Install Unknown Apps, and turn ON <strong>Downloader</strong>.</li>
                            </ul>
                            <Image src="/images/installation/Install-Unknown-Sources-Xtreme-Setup.webp" alt="Enable Downloader Unknown Sources" className="step-image" style={{ height: "auto" }} width={1920} height={1080} sizes="(max-width: 600px) 100vw, 500px" />
                            <ul>
                                <li>Open the <strong>Downloader</strong> app.</li>
                                <li>Click on the URL text box and type in the following URL exactly:</li>
                            </ul>
                            <div className="code-box">
                                <span>URL to enter:</span>
                                <strong>iptvsmarters.com/smarters.apk</strong>
                            </div>
                            <ul>
                                <li>Click <strong>Go</strong>. The app will automatically begin downloading.</li>
                                <li>Once the download finishes, click <strong>Install</strong> on the prompt that appears in the bottom right corner.</li>
                                <li>After it installs, click <strong>Open</strong> to launch IPTV Smarters.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h2>Log In and Start Watching!</h2>
                            <p>You&apos;re almost done! Now you just need to enter the subscription details we sent you on WhatsApp after your purchase.</p>
                            <ul>
                                <li>Open IPTV Smarters Pro and Accept the terms of service.</li>
                                <li>Click on <strong>Login with Xtream Codes API</strong> (this is very important!).</li>
                                <li>Fill in the login screen exactly as follows:
                                    <ul style={{ marginTop: 12, padding: 16, backgroundColor: "var(--bg-color)", borderRadius: 8, border: "1px solid var(--border)" }}>
                                        <li><strong>Any Name:</strong> <em>Watch-TV</em></li>
                                        <li><strong>Username:</strong> <em>(The Username we sent you)</em></li>
                                        <li><strong>Password:</strong> <em>(The Password we sent you)</em></li>
                                        <li><strong>URL:</strong> <em>(The Server URL we sent you)</em></li>
                                    </ul>
                                </li>
                                <li>Click <strong>Add User</strong>. The app will now download all live channels, movies, and TV series directly to your screen!</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: 48, padding: 40, backgroundColor: "var(--card-bg)", borderRadius: 16, border: "1px solid var(--border)" }}>
                        <h3 style={{ marginBottom: 16 }}>Ready to start watching?</h3>
                        <p style={{ color: "var(--text-light)", marginBottom: 24 }}>Get your subscription credentials instantly via WhatsApp.</p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/pricing" className="btn btn-primary">View Plans</Link>
                            <a href="https://wa.me/19296072130" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: "1px solid var(--primary)", color: "var(--primary)" }}>Contact Support</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <style>{`
                .step-card {
                    display: flex;
                    gap: 24px;
                    margin-bottom: 40px;
                    background: var(--card-bg);
                    padding: 32px;
                    border-radius: 16px;
                    border: 1px solid var(--border);
                    position: relative;
                }
                .step-number {
                    flex-shrink: 0;
                    width: 48px;
                    height: 48px;
                    background: var(--primary);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: 800;
                    border-radius: 50%;
                }
                .step-content {
                    width: 100%;
                }
                .step-content h2 {
                    margin-top: 6px;
                    margin-bottom: 16px;
                    font-size: 1.5rem;
                }
                .step-content p {
                    color: var(--text-light);
                    margin-bottom: 16px;
                }
                .step-content ul {
                    padding-left: 20px;
                    color: var(--text-light);
                    margin-bottom: 16px;
                }
                .step-content li {
                    margin-bottom: 8px;
                }
                .step-content strong {
                    color: var(--text-main);
                }
                .step-image {
                    width: 100%;
                    max-width: 500px;
                    border-radius: 8px;
                    margin: 16px 0 24px;
                    border: 1px solid var(--border);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    display: block;
                }
                .code-box {
                    background: var(--bg-color);
                    border: 1px dashed var(--primary);
                    padding: 16px 24px;
                    border-radius: 8px;
                    margin: 16px 0;
                    display: flex;
                    flex-direction: column;
                }
                .code-box span {
                    font-size: 12px;
                    text-transform: uppercase;
                    color: var(--text-light);
                    margin-bottom: 4px;
                }
                .code-box strong {
                    font-size: 18px;
                    color: var(--primary);
                    letter-spacing: 0.5px;
                }
                @media(max-width: 600px) {
                    .step-card {
                        flex-direction: column;
                        gap: 16px;
                        padding: 24px;
                    }
                    .step-image {
                        max-width: 100%;
                    }
                }
            `}</style>
        </main>
    );
}
