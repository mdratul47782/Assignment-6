import Footer from "@/components/Footer";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "./globals.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata = {
  title: "LWS Kitchen",
  description: "Best Food's For You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        <Header />
        <main
          style={{
            fontFamily: "'Playfair Display', serif, 'Inter', sans-serif", // Apply custom fonts only to the main content
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
