'use client';

import Image from 'next/image';
import { useBooking } from '@/context/BookingContext';

export default function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section id="kontak-banner" className="relative py-12 sm:py-20 bg-[#12161A] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/sunset-banner.jpg"
          alt="Sunset Jeep Banyuwangi"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12161A] via-[#12161A]/85 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-2 sm:mb-3">
              Siap untuk Petualangan Seru<br className="hidden sm:block" /> di Banyuwangi?
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-xl">
              Hubungi kami sekarang dan dapatkan penawaran terbaik, untuk paket jeep pilihan Anda.
            </p>
          </div>

          <div className="flex flex-col sm:items-start lg:items-end gap-3 shrink-0">
            <button
              onClick={() => openBooking('Konsultasi Petualangan')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FA5A00] hover:bg-[#E44F00] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-orange-600/35 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Booking via WhatsApp
            </button>

            <a
              href="tel:085335305863"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#FA5A00] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              atau hubungi langsung <strong className="text-white">0853 3530 5863</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
