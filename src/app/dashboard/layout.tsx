"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
