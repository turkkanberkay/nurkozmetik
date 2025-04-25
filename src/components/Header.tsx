'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { href: '/', label: 'ANA SAYFA' },
  { href: '/fason-uretim', label: 'FASON ÜRETİM' },
  { href: '/kurumsal', label: 'KURUMSAL' },
  { href: '/urunler', label: 'ÜRÜNLER' },
  { href: '/iletisim', label: 'İLETİŞİM' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#edf5ff] shadow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={240} height={60} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'text-sm font-medium text-[#333] hover:text-[#2e52ff] transition-colors',
                pathname === item.href && 'text-[#2e52ff] underline underline-offset-4'
              )}
            >
              {item.label}
            </Link>
          ))}
          <FiSearch className="text-xl text-[#2e52ff] cursor-pointer" />
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-2xl text-[#2e52ff]" />
            ) : (
              <FiMenu className="text-2xl text-[#2e52ff]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#edf5ff] px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-sm font-medium text-[#333] hover:text-[#2e52ff]',
                  pathname === item.href && 'text-[#2e52ff] underline'
                )}
                onClick={() => setMenuOpen(false)} // Menüden tıklanınca kapat
              >
                {item.label}
              </Link>
            ))}
            <FiSearch className="text-xl text-[#2e52ff] mt-2" />
          </nav>
        </div>
      )}
    </header>
  );
}
