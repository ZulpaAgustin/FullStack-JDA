import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 gap-4 flex-wrap">

            <div className="flex items-center gap-3">
              <img src="/images/logozul.png" alt="Logo" className="h-[70px] w-auto" />
              <h2 className="text-[30px] font-bold text-pink-400">ZAProjects</h2>
            </div>

            <div className="flex gap-4 text-sm font-medium items-center flex-wrap">
              <Link href="/" className="hover:text-pink-600">Beranda</Link>
              <Link href="/about" className="hover:text-pink-600">Tentang</Link>
              <Link href="/profile" className="hover:text-pink-600">Profil</Link>
              <Link
                href="/contact"
                className="hover:text-pink-600">
                Kontak Saya
              </Link>
              <Link
                href="/products"
                className="hover:text-pink-600">
                Products
              </Link>
              <Link
                href="/admin"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-md text-sm transition">
                + Barang
              </Link>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto p-6">{children}</main>

        <footer className="text-center text-xs text-gray-500 py-4">
          &copy; {new Date().getFullYear()} ZAProjects. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
