import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "RetailCare — Agent Console", description: "End-to-end AI customer support agent powered by Gemini" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
