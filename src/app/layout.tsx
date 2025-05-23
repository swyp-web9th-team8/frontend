import { ToastProvider } from "@/components/molecules/toast/ToastContext";
import { ReConfirmModalProvider } from "@/components/organisms/modal/ReConfirmModalContext";
import { META } from "@/constants/metadata";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReactQueryProvider from "./providers/ReactQueryProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://ploggo.co.kr",
  ),
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.title,
    description: META.description,
    siteName: META.siteName,
    images: [META.ogImage],
  },
  keywords: META.keywords,
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative mx-auto flex min-h-screen max-w-[500px] flex-col antialiased`}
      >
        <div className="relative flex min-h-screen flex-col bg-[#f6f6f6] px-5">
          <ReactQueryProvider>
            <ToastProvider>
              <ReConfirmModalProvider>{children}</ReConfirmModalProvider>
            </ToastProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
