
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidgets from "../components/ChatWidgets";

export const metadata: Metadata = {
  title: "Watch-TV Online | Premium IPTV Service",
  description: "Reliable IPTV subscription with 20,000+ channels and 60,000+ movies/series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ChatWidgets />
      </body>
    </html>
  );
}

