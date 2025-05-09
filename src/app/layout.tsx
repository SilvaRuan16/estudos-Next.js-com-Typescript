import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next Tutorial",
    template: "%s | Tutorial"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-green-500">Cabeçalho da aplicação</header>
        {children}
        <footer className="bg-green-500">Rodapé da aplicação</footer>
      </body>
    </html>
  );
}
