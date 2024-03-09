import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Rightbar from "./components/Rightbar/Rightbar";
import Home from "./components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cathoven",
  description: "Al tool to generate Text.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Home /> */}
        <Sidebar />
        <main className="  bg-primary">
          {/* <Sidebar /> */}
          {children}
          {/* <Rightbar /> */}
        </main>
      </body>
    </html>
  );
}
