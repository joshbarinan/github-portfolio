import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Bariñan | Backend Engineer",
  description:
    "Backend-focused Full-Stack Engineer with 7+ years experience in Django, Flask, AWS, and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* NAVBAR */}
        <nav className="border-b border-gray-800 px-10 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg tracking-wide">
            Joshua.dev
          </h1>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/projects" className="hover:text-white transition">Projects</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 px-10 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Joshua Bariñan</p>
          <p className="mt-1">Backend Engineer | Django/Flask | SQL | Backend Engineer | AWS/Azure</p>
        </footer>

      </body>
    </html>
  );
}