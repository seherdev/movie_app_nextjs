//genel layout. app>layout.tsx

import "./global.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Movie Explorer",
  description: "Explore and search for movies",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900"     >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}