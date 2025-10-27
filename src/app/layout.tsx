import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task App",
  description: "A challenge app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <Link href="/" className="text-2xl font-bold text-blue-600">
                    Task Manager
                  </Link>
                  <div className="flex gap-6">
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      Home
                    </Link>
                    <Link
                      href="/tasks"
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      Tasks
                    </Link>
                    <Link
                      href="/create"
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      Create
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
