
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Channels | Watch-TV Online",
    description: "Over 80,000 titles. From live sports to the latest cinema releases, get access to a massive library updated daily.",
};

export default function Channels() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: 0 }}>
                <div className="container text-center" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
                    <h1>Over <span>80,000</span> Titles.</h1>
                    <p style={{ margin: "0 auto 40px" }}>From live sports to the latest cinema releases, get access to a massive library updated daily.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 60, border: "1px solid var(--border)", boxShadow: "var(--shadow-glow)" }}>
                        <Image src="/images/vod-collage.jpg" alt="VOD Movies and Series" style={{ height: "auto", width: "100%", display: "block" }} width={1024} height={1024} sizes="(max-width: 900px) 100vw, 530px" />
                    </div>

                    <div className="grid-3" style={{ marginBottom: 60 }}>
                        <div className="card">
                            <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>🎬 Movies & Series</h3>
                            <p>Discover the latest cinema releases, all-time box office classics, and complete seasons of your favorite streaming TV series. Updated daily.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>⚽ Live Sports</h3>
                            <p>Follow every major football league, international tournaments, F1 racing, UFC pay-per-views, NBA, and NFL without missing a single second of the action.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>🌍 Worldwide Channels</h3>
                            <p>Beyond our massive US, UK, and Canadian package, get complete access to European, Arabic, Latino, and Asian regional networks.</p>
                        </div>
                    </div>

                    <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 60, border: "1px solid var(--border)", boxShadow: "var(--shadow-glow)" }}>
                        <Image src="/images/hero-banner.jpg" alt="Live Sports and Entertainment" style={{ height: "auto", width: "100%", display: "block", maxHeight: 400, objectFit: "cover" }} width={1024} height={1024} sizes="(max-width: 900px) 100vw, 530px" />
                    </div>
                    
                    <div style={{ textAlign: "center", marginTop: 48 }}>
                        <Link href="/pricing" className="btn btn-primary">View Subscriptions</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

