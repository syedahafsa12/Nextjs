import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export const metadata: Metadata = {
  title: "Syeda Hafsa",
  description: "Syeda Hafsa portfolio",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts..com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
  
      </head>
      <body>{children}</body>
    </html>
  );
}
