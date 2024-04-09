import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="main-body">
        <section className="container-main">
          {children}
        </section>
      </body>
    </html>
  );
}
