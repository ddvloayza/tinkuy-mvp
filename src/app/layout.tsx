import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TINKUY · Educación para todos",
  description: "Un espacio para aprender, acompañar y construir una educación más inclusiva.",
  icons: { icon: "/images/tinkuy-logo.png", apple: "/images/tinkuy-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
