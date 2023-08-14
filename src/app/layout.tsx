import { Footer, Header } from "./components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBN",
  description: "SBN-jiu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-base">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
