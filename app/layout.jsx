import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Annisa Aulia Zahra | Policy & Business Development",
  description:
    "The portfolio of Annisa Aulia Zahra — policy analyst, human resources professional, and business and organization development enthusiast.",
  openGraph: {
    title: "Annisa Aulia Zahra | Portfolio",
    description:
      "Policy analysis, human resources, and business development — explore Annisa's experience, education, and projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
