import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
    title: "Uzair DR- Portfolio",
    description: "Uzair is a Shopify Developer & Full Stack Engineer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}