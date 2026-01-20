import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const fontBangla = localFont({
  src: "../../src/fonts/mayaboti-normal.ttf",
});

export const metadata = {
  title: {
    default: "Hero Kidz Toys",
    template: "%s | Hero Kidz Toys",
  },
  description:
    "Discover fun & safe toys for kids at Hero Kidz Toys. Quality products, exciting collections & fast delivery.",
  applicationName: "Hero Kidz Toys",
  generator: "Next.js 16",
  referrer: "origin-when-cross-origin",
  keywords: [
    "kids toys",
    "children toys",
    "hero kidz",
    "educational toys",
    "gift toys",
    "playtime fun",
  ],
  authors: [{ name: "Hero Kidz", url: "https://hero-kidz-toys.vercel.app" }],
  publisher: "Hero Kidz Toys",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔗 Open Graph
  openGraph: {
    title: "Hero Kidz Toys – Fun & Safe Toys for Kids",
    description:
      "Explore the best collection of toys at Hero Kidz Toys — quality picks for every kid’s playtime.",
    url: "https://hero-kidz-toys.vercel.app",
    siteName: "Hero Kidz Toys",
    images: [
      {
        url: "https://i.ibb.co/WW4tvF6F/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Toys - Home Page Preview",
      },
      {
        url: "https://i.ibb.co/k6KZsNmL/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Toys - Products Page Preview",
      },
    ],
    type: "website",
  },

  // 🐦 Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz Toys – Fun & Safe Toys for Kids",
    description:
      "Explore the best collection of toys at Hero Kidz Toys — quality picks for every kid’s playtime.",
    creator: "@HeroKidzToys", // optional
    images: [
      "https://i.ibb.co/WW4tvF6F/image.png",
      "https://i.ibb.co/k6KZsNmL/image.png",
    ],
  },

  // 🧠 Icons & Favicons
  icons: {
    icon: [
      {
        url: "https://i.ibb.co/Gv6pRZZT/logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://i.ibb.co/Gv6pRZZT/logo.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://i.ibb.co/Gv6pRZZT/logo.png",
      },
    ],
  },

  // 💼 Manifest (optional progressive-web app)
  manifest: "https://hero-kidz-toys.vercel.app/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-300px)]">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
