import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./style.scss"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
   "Generated by create next app",
};
export const viewport: Viewport = {
  // width: 500,
  maximumScale: 1,
  minimumScale: 1,
  initialScale: 1,
  userScalable: false,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
      </head>
      <body className={inter.className} id="main-body">
        <section className="pageContent">
          <div className="leftContent">
              {children}
          </div>
          <div className="rightContent">
            <div className="contentBody">
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
