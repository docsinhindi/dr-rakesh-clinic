import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Neuro Psychiatry Clinic | Dr. Rakesh Kumar Singh — Psychiatrist in Noida",
  description:
    "Dr. Rakesh Kumar Singh — trusted Psychiatrist & Neuro-Psychiatry specialist in Sector 18, Noida. Treatment for depression, anxiety, bipolar disorder, sleep & stress issues. 5.0★ rated.",
  keywords:
    "psychiatrist in Noida, neuro psychiatry, depression treatment, anxiety doctor Noida, Dr Rakesh Kumar Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}