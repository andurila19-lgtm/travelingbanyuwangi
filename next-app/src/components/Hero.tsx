'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="beranda" className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-jeep.jpg"
          alt="Sewa Jeep Banyuwangi Adventure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-center"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1216]/95 via-[#0E1216]/80 sm:via-[#0E1216]/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161A] via-transparent to-transparent z-10" />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-2xl">
          <span className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FA5A00] mb-2.5">
            JEEP ADVENTURE BANYUWANGI
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3 sm:mb-5">
            Jelajahi Banyuwangi{' '}
            <span className="block font-accent text-4xl sm:text-6xl lg:text-7xl text-[#FFA451] font-bold leading-tight -mt-1 drop-shadow-md">
              dengan Cara yang Berbeda
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Sewa Jeep Banyuwangi untuk pengalaman wisata terbaik menjelajahi Baluran, Djawatan, Kawah Wurung, Ijen dan destinasi alam lainnya.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-14">
            <button
              onClick={() => openBooking('Semua Paket')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FA5A00] hover:bg-[#E44F00] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-orange-600/35 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Booking Sekarang
            </button>

            <Link
              href="/paket-wisata"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors text-center"
            >
              Lihat Paket Wisata
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* 4 Feature Badges - Mobile Optimized */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/15">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FA5A00]/15 border border-[#FA5A00]/30 flex items-center justify-center text-[#FA5A00] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                Armada Terawat &amp; Aman
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FA5A00]/15 border border-[#FA5A00]/30 flex items-center justify-center text-[#FA5A00] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21a8.5 8.5 0 0 1 13 0"></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                Driver Lokal Berpengalaman
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FA5A00]/15 border border-[#FA5A00]/30 flex items-center justify-center text-[#FA5A00] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                Pilihan Open &amp; Private
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FA5A00]/15 border border-[#FA5A00]/30 flex items-center justify-center text-[#FA5A00] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                Harga Transparan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
