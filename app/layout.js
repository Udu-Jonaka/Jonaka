import { Geist, Geist_Mono } from "next/font/google"; // Keep these or remove if not used. User wants "consistent typography", original used default or specific? Original didn't import fonts, relied on system or Bootstrap?
// Original had: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
// I'll keep Geist for now but I should prioritize original look.
import "./globals.css";
// We will clear globals.css content later to avoid Next.js default styles interfering.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jonaka Udu(JhayCodes)",
  description: "I'm Jonaka Udu (Jhay Codes), a Full-Stack Developer...",
  keywords:
    "Jonaka Udu, Jhay Codes, Full-Stack Developer, Software Engineer, Web Developer Nigeria",
  openGraph: {
    title: "Jonaka Udu (Jhay Codes) | Full-Stack Developer Portfolio",
    description:
      "Building fast, clean, and visually appealing digital experiences.",
    url: "https://jonaka-seven.vercel.app/",
    type: "website",
    images: [{ url: "/images/og-graph.png" }],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/CSS/style.css" />
        <link rel="stylesheet" href="/media-query/media-style.css" />
        <link rel="stylesheet" href="/CSS/nav.css" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
