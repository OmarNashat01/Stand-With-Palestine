import Navbar from "./components/navbar/navbar";

import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crimes Website",
  description:
    "This website is for documenting high-precision information about the Israeli aggression against the Palestinian people since the beginning of the occupation in 1948.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
