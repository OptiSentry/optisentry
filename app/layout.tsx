import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.optisentry.com"),
  title: { default: "OptiSentry — Trust-First EvalOps & AI Audits", template: "%s · OptiSentry" },
  description: "OptiSentry liefert verifizierbare AI-Audits und EvalOps-Frameworks für Enterprise.",
  alternates: { canonical: "https://www.optisentry.com/" },
  openGraph: {
    title: "OptiSentry — Trust-First EvalOps & AI Audits",
    description: "Verifizierbare AI-Audits. EvalOps-Frameworks. Sicherheit & Performance.",
    url: "https://www.optisentry.com/",
    siteName: "OptiSentry",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "OptiSentry" }]
  },
  twitter: { card: "summary_large_image", title: "OptiSentry", description: "AI Audits & EvalOps", images: ["/og.png"] },
  icons: [{ rel: "icon", url: "/favicon.svg" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="border-b border-white/10">
          <nav className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-brand-500" />
              <span className="text-lg font-semibold tracking-tight">OptiSentry</span>
            </div>
            <div className="hidden gap-6 md:flex">
              <a href="#benefits">Vorteile</a>
              <a href="#how">Wie es funktioniert</a>
              <a href="#contact">Kontakt</a>
            </div>
            <a className="btn btn-ghost" href="#contact">Get Audit</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-white/10">
          <div className="container py-10 text-sm text-white/70">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} OptiSentry. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy">Datenschutz</a>
                <a href="/imprint">Impressum</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
