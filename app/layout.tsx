
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidgets from "../components/ChatWidgets";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.watch-tv.online"),
  title: {
    default: "Watch-TV Online | Premium IPTV Service",
    template: "%s | Watch-TV Online",
  },
  description: "Reliable IPTV subscription with 20,000+ live TV channels and 60,000+ movies & series. Instant activation, anti-freeze technology, 24/7 support.",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Watch-TV Online | Premium IPTV Service",
    description: "Reliable IPTV subscription with 20,000+ channels and 60,000+ movies/series.",
    url: "https://www.watch-tv.online",
    siteName: "Watch-TV Online",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ChatWidgets />
      </body>
    </html>
  );
}

