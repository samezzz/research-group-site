import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Research Lab",
  description: "Dr.Prince Adjei's Research Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-[#151819] dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="">
              {children}
            </main>
            <footer className="">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}

// import Link from 'next/link'
//
// <header className="bg-gray-800 text-white">
//   <nav className="container mx-auto flex items-center justify-between p-4">
//     <Link href="/" className="text-xl font-bold">Research Catalog</Link>
//     <ul className="flex space-x-4">
//       <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
//       <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
//       <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
//       {/*<li><Link href="/guidelines" className="hover:text-gray-300">Guidelines</Link></li>
//       // <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
//       // <li><Link href="/resources" className="hover:text-gray-300">Resources</Link></li>*/}
//     </ul>
//   </nav>
// </header>
//
// <div className="container mx-auto px-4 text-center">
//   © {new Date().getFullYear()} Research Project Catalog. All rights reserved.
// </div>
