import { Footer } from "@/components/custom/footer";
import { Header } from "@/components/custom/header";
import { ApolloWrapper } from "@/lib/apolloWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import React from "react";
import "./globals.css";

const raleway = Raleway({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
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
        <body className={raleway.className}>
          <ApolloWrapper>
            <div className="h-screen flex flex-col">
              <Header className="sticky top-0 w-full bg-white z-50" />
              <div className="flex-1 w-full mx-auto overflow-auto">
                {children}
                <Footer />
              </div>
            </div>
          </ApolloWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
