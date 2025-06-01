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
  {
    href: '/kurumsal',
    label: 'KURUMSAL',
    subItems: [
      { href: '/kurumsal/hakkimizda', label: 'Hakkımızda' },
      { href: '/kurumsal/ar-ge', label: 'Ar-Ge' },
      { href: '/kurumsal/insan-kaynaklari', label: 'İnsan Kaynakları' },
      { href: '/kurumsal/sertifikalar', label: 'Sertifikalar' },
    ],
  },
  { href: '/urunler', 
    label: 'ÜRÜNLER',
    subItems: [
        { href: '/urunler/cilt-bakim', label: 'Cilt Bakım' },
        { href: '/urunler/vucut-bakim', label: 'Vücut Bakım' },
        { href: '/urunler/sac-bakim', label: 'Saç Bakım' },
        { href: '/urunler/kisisel-bakim', label: 'Kişisel Bakım' },
        { href: '/urunler/tibbi-cihaz', label: 'Tıbbi Cihaz' },

      ], },
  { href: '/iletisim', label: 'İLETİŞİM' },
];



export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#eaf4fc] shadow-md sticky top-0 z-5000">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={240} height={60}  />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
  {navItems.map((item) => (
    <div key={item.href} className="relative group">
      <Link
      href={item.href}
      className={clsx(
        'text-sm font-medium text-[#333] hover:text-[#2e52ff] transition-colors',
        pathname === item.href && 'text-[#2e52ff] underline underline-offset-4'
      )}
    >
      {item.label}
    </Link>

    {/* Dropdown */}
    {item.subItems && (
      <div className="absolute  left-1/2 -translate-x-1/2 top-full mt-2 w-[200px] bg-white shadow-xl rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex">
        {/* Links */}
        <div className="w-1/1 p-4">
          {item.subItems.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block text-sm text-gray-700 py-2 hover:text-[#2e52ff] hover:bg-[#edf5ff] rounded px-2"
            >
              {subItem.label}
            </Link>
          ))}
        </div>

      </div>
    )}
  </div>
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
        <div key={item.href}>
          <Link
            href={item.href}
            className={clsx(
              'text-sm font-medium text-[#333] hover:text-[#2e52ff]',
              pathname === item.href && 'text-[#2e52ff] underline'
            )}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>

          {/* Alt menü varsa mobilde göster */}
          {item.subItems && (
            <div className="ml-4 mt-1 flex flex-col gap-1">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="text-sm text-gray-700 hover:text-[#2e52ff]"
                  onClick={() => setMenuOpen(false)}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <FiSearch className="text-xl text-[#2e52ff] mt-2" />
    </nav>
  </div>
)}

    </header>
  );
}
