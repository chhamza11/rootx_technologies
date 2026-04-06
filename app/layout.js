import { Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";
import LoadingProvider from "@/Components/LoadingProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "RootX Technologies",
  description: "Professional web and mobile development services with cutting-edge technologies",
  icons: {
    icon: '/Favicon.svg',
    shortcut: '/Favicon.svg',
    apple: '/Favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        <LoadingProvider>
          <Navbar/>
          {children}
          <Footer/>
          <WhatsAppButton/>
        </LoadingProvider>
      </body>
    </html>
  );
}
