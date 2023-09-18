import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Navbar from "./component/navbar/Navbar";
import ReduxProvider from "@/store/Provider";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${karla.className} gap-2 h-[100dvh] flex flex-col max-w-[1330px] m-auto`}>
                <ReduxProvider>
                    <Navbar />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
