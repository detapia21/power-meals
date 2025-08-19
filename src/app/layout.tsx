import type { Metadata } from "next";
import "./globals.css";
import  Navigation  from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Power Meals",
  description: "Come bien, vive mejor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
