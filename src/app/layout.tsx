import type { Metadata } from "next";
import "./globals.css"
import Header from "@/app/components/Header"

export const metadata: Metadata = {
  title: "autoGATA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
