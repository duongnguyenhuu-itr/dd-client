import { ApolloWrapper } from "@/lib/apolloWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Double D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <ApolloWrapper>
            <div className="min-h-screen flex flex-col">
              <Header className="sticky top-0 w-full bg-white z-50" />
              <div className="flex-1 w-full h-full mx-auto">
                {children}
              </div>
              <Footer />
            </div>
          </ApolloWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
