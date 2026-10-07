'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when drawer is open & handle ESC key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Paket Wisata', href: '/paket-wisata' },
    { label: 'Destinasi', href: '/destinasi' },
    { label: 'Armada', href: '/armada' },
    { label: 'Testimoni', href: '/testimoni' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/kontak' },
  ];

  const isHome = pathname === '/';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-[#12161A]/95 backdrop-blur-md py-3 shadow-xl' 
            : 'bg-gradient-to-b from-[#12161A]/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="text-white group-hover:text-[#FA5A00] transition-colors shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 18h14"/>
                <path d="M19 18l-1.5-6H4.5L3 18"/>
                <path d="M4.5 12L7 5h10l2.5 7"/>
                <circle cx="7.5" cy="18" r="2"/>
                <circle cx="16.5" cy="18" r="2"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase leading-none whitespace-nowrap">
                SEWA JEEP <span className="text-[#FA5A00]">BANYUWANGI.ID</span>
              </span>
              <span className="text-[9px] tracking-widest text-white/70 font-bold uppercase mt-0.5 whitespace-nowrap">
                OFFROAD &amp; TOUR ADVENTURE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Visible on xl screens 1280px+) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold whitespace-nowrap transition-colors py-1 relative group ${
                    isActive ? 'text-[#FA5A00]' : 'text-white/90 hover:text-[#FA5A00]'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#FA5A00] transition-all rounded-full ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBooking('Konsultasi Umum')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#FA5A00] hover:bg-[#E44F00] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-orange-600/30 transition-colors whitespace-nowrap shrink-0"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Booking via WhatsApp
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Buka menu navigasi"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Premium Slide-over Drawer dari Samping Kanan (Right Off-canvas) */}
      <div 
        className={`fixed inset-0 z-50 xl:hidden transition-visibility duration-300 ${
          mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay Gelap dengan Blur */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Panel Drawer dari Kanan */}
        <aside 
          className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] h-full bg-[#12161A] border-l border-white/10 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header Drawer */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0E1215]">
            <div className="flex items-center gap-2">
              <div className="text-[#FA5A00]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 18h14"/>
                  <path d="M19 18l-1.5-6H4.5L3 18"/>
                  <path d="M4.5 12L7 5h10l2.5 7"/>
                  <circle cx="7.5" cy="18" r="2"/>
                  <circle cx="16.5" cy="18" r="2"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight text-white uppercase leading-none">
                  SEWA JEEP <span className="text-[#FA5A00]">.ID</span>
                </span>
                <span className="text-[9px] tracking-widest text-white/50 font-bold uppercase mt-0.5">
                  NAVIGASI UTAMA
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FA5A00] flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Tutup menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* List Menu Link - Card Pill Style dengan Arrow */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FA5A00]/15 text-[#FA5A00] border border-[#FA5A00]/30 font-bold shadow-sm'
                      : 'text-white/85 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FA5A00]" />
                    )}
                    {item.label}
                  </span>
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    className={isActive ? 'text-[#FA5A00]' : 'text-white/30'}
                  >
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          {/* Footer Drawer dengan Informasi & Tombol WhatsApp */}
          <div className="p-4 border-t border-white/10 bg-[#0E1215]">
            <div className="flex items-center justify-between text-[11px] text-white/60 mb-3 px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Siaga 24 Jam
              </span>
              <span className="text-white/40">Banyuwangi, Jawa Timur</span>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); openBooking('Konsultasi via WhatsApp'); }}
              className="w-full bg-[#FA5A00] hover:bg-[#E44F00] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-lg shadow-orange-500/20 active:opacity-90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Booking via WhatsApp
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
