import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChatBot } from "../components/chat-bot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BinaHub | Human Transformation & Future Capability Partner",
  description:
    "Mendorong transformasi manusia dan organisasi untuk memanusiawikan masa depan. BinaHub hadir sebagai mitra transformasi bagi individu, pemimpin, dan organisasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable} ${inter.variable}`}>
      <body className={`min-h-screen flex flex-col selection:bg-[#0B2C6B] selection:text-white ${poppins.className}`}>
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
