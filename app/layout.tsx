import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zach Bai - Personal Website",
  description: "Personal portfolio website of Zach Bai, CS Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col" style={{ paddingBottom: "28px" }}>
        {children}
      </body>
    </html>
  );
}
