import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instagram Clone",
};

export default function RootLayout({
  children,
  story
}: Readonly<{
  children: React.ReactNode;
  story: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
        {story}
      </body>
    </html>
  );
}
