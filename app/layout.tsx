import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instagram Clone",
};

export default function RootLayout({
  children,
  story,
  authorization
}: Readonly<{
  children: React.ReactNode;
  story: React.ReactNode;
  authorization: React.ReactNode;
}>) {
  const isAuthenticated = false
  return (
    <html>
      <body>
        {isAuthenticated ? children : authorization}
      </body>
    </html>
  );
}
