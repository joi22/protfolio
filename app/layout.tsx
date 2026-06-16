import { Poppins } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import CursorFollower from "@/components/CursorFollower";
import PageLoader from "@/components/PageLoader";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="https://cdn.shopify.com/s/files/1/0985/6470/2513/files/transprant_logo.jpg" />
                <link rel="preload" href="/assets/background-splash.svg" as="image" />
            </head>
            <body>
                <LenisScroll />
                <CursorFollower />
                <PageLoader />
                {children}
            </body>
        </html>
    );
}