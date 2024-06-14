"use client"
import "./globals.css";
import Header from "/components/header";
import { usePathname } from "next/navigation";

export default function RootLayout({children}) {

  const pathname = usePathname();

  console.log("LAYOUT TETİKLENDİ")

  return (
    <html>
      <body>
        <Header currentPath={pathname}/>
        {children}
      </body>
    </html>
  );
}
