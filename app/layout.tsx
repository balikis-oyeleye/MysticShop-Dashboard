import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Toast from "@/providers/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--inter-font",
});

export const metadata: Metadata = {
  title: "MysticShop dashboard",
  description: "A dashboard for MysticShop e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} ${inter.variable}`}>
          <Toast />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
