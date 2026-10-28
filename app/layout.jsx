import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Annisa Aulia Zahra | Organization Development",
  description:
    "The portfolio of Annisa Aulia Zahra — Organization Development professional with a Master of Management, experienced in organizational structure, performance management, and bureaucratic reform.",
  openGraph: {
    title: "Annisa Aulia Zahra | Portfolio",
    description:
      "Organization development, performance management, and bureaucratic reform — explore Annisa's experience, education, and projects.",
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
