"use client"
import "./globals.css";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer"
export default function RootLayout({children}) {

  const pathname = usePathname();

  console.log("LAYOUT TETİKLENDİ")

  return (
    <html>
      <body>
        <Header currentPath={pathname}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
