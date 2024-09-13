import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Research Group Site",
  description: "Site to display research topics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex items-center justify-between p-4">
              <Link href="/" className="text-xl font-bold">Research Catalog</Link>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                {/*<li><Link href="/guidelines" className="hover:text-gray-300">Guidelines</Link></li>
                // <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                // <li><Link href="/resources" className="hover:text-gray-300">Resources</Link></li>*/}
              </ul>
            </nav>
          </header>
          <main className="container mx-auto grow px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-800 py-4 text-white">
            <div className="container mx-auto px-4 text-center">
              © {new Date().getFullYear()} Research Project Catalog. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
