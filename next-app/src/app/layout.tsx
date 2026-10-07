import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sewa Jeep Banyuwangi | Wisata Baluran, Djawatan, Ijen & Kawah Wurung 4x4",
    template: "%s | Sewa Jeep Banyuwangi .ID",
  },
  description: "Pusat sewa jeep 4x4 profesional di Banyuwangi. Jelajahi Kawah Ijen, Baluran, Djawatan, dan Kawah Wurung dengan armada prima, driver lokal ramah, dan harga transparan.",
  keywords: ["sewa jeep banyuwangi", "rental jeep banyuwangi", "paket wisata baluran", "tour kawah ijen", "jeep de djawatan", "jeep kawah wurung"],
  openGraph: {
    title: "Sewa Jeep Banyuwangi - Jelajahi Banyuwangi dengan Cara yang Berbeda",
    description: "Sewa Jeep Banyuwangi untuk pengalaman wisata terbaik menjelajahi Baluran, Djawatan, Kawah Wurung, Ijen dan destinasi alam lainnya.",
    url: "https://sewajeepbanyuwangi.id/",
    siteName: "Sewa Jeep Banyuwangi",
    images: [
      {
        url: "/images/hero-jeep.jpg",
        width: 1200,
        height: 675,
        alt: "Sewa Jeep Banyuwangi 4x4",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="antialiased selection:bg-[#FA5A00] selection:text-white flex flex-col min-h-screen">
        <BookingProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
