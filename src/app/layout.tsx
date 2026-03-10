import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siddhantchoudhary.vercel.app"),
  title: "Siddhant Choudhary \u2014 Software Engineer",
  description:
    "Computer Science & Mathematics at UW-Madison. Building systems across quantitative finance, machine learning, and low-level engineering.",
  openGraph: {
    title: "Siddhant Choudhary \u2014 Software Engineer",
    description:
      "Computer Science & Mathematics at UW-Madison. Building systems across quantitative finance, machine learning, and low-level engineering.",
    url: "https://siddhantchoudhary.vercel.app",
    siteName: "Siddhant Choudhary",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddhant Choudhary \u2014 Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Choudhary \u2014 Software Engineer",
    description:
      "Computer Science & Mathematics at UW-Madison. Building systems across quantitative finance, machine learning, and low-level engineering.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
