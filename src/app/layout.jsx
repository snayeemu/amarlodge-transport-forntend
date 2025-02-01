import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileNavbar from "@/components/shared/ProfileNavbar/ProfileNavbar";
import Navbar from "@/components/shared/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Transport App",
  description: "Using this App an user can book different transports and companies can post their services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProfileNavbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
