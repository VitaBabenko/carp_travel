import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Carp Travel",
  description:
    "Unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
  openGraph: {
    title: "Carp Travel",
    description: "Uncover Carpathian’s Secrets",
    url: "https://carp-travel-beige.vercel.app",
    siteName: "CarpTravel",
    type: "website",
    images: [{ url: "/ogp/carptravel.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
