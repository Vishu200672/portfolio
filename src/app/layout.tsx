import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishvam Trivedi | AI/ML & Computer Vision Engineer",
  description:
    "Production portfolio of Vishvam Trivedi. Computer Science student specializing in Computer Vision, Applied NLP, PyTorch, Transformers, and FastAPI model deployment.",
  keywords: [
    "Vishvam Trivedi",
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
    "PyTorch",
    "Transformers",
    "FastAPI",
    "ConvNeXt",
    "SmartHire AI",
    "Model Deployment"
  ],
  authors: [{ name: "Vishvam Trivedi", url: "https://github.com/Vishu200672" }],
  creator: "Vishvam Trivedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishvamtrivedi.dev",
    title: "Vishvam Trivedi | AI/ML & Computer Vision Engineer",
    description:
      "Building intelligent systems across Computer Vision, NLP, and Machine Learning APIs. Real models, verified benchmarks, and production deployments.",
    siteName: "Vishvam Trivedi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishvam Trivedi | AI/ML & Computer Vision Engineer",
    description:
      "Building intelligent systems across Computer Vision, NLP, and Machine Learning APIs.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070b] text-[#f1f5f9] selection:bg-[#00f0ff]/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
