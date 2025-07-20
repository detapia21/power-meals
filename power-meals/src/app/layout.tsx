import type { Metadata } from "next";
import "./globals.css";
import  Navigation  from "./components/Navigation";

export const metadata: Metadata = {
  title: "Power Meals",
  description: "Come Bien, Vive Mejor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
