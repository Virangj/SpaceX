import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space X",
  description: "At SpaceX, we are revolutionizing space technology with the ultimate goal of enabling human life on Mars. Founded by Elon Musk in 2002, SpaceX is committed to reducing the cost of space travel and making it accessible to everyone. Our groundbreaking advancements in rocket technology have transformed the aerospace industry, allowing us to undertake ambitious missions that were once considered impossible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
