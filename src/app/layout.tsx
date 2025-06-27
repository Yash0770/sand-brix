'use client';
import React from "react";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

// export const metadata = {
//   title: "SandBrix",
//   description: "A great app!",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <Header/>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
