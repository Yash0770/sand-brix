"use client";
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
        <div className="bg-[#180000]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
