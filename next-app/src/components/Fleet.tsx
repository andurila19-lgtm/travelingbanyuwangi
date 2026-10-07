'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';

export const vehicles = [
  {
    name: 'Toyota Hardtop',
    desc: 'Ikonik offroad vintage FJ40 tangguh',
    specs: 'Mesin 4.2L 2F &bull; 4WD Aktif &bull; Kapasitas 5-6 Orang &bull; Terbuka/Tertutup',
  },
  {
    name: 'Toyota Land Cruiser',
    desc: 'Kenyamanan ekstra & suspensi prima',
    specs: 'Mesin Diesel Tangguh &bull; AC Dingin &bull; Kabin Luas &bull; Cocok Keluarga',
  },
  {
    name: 'Jeep Trooper',
    desc: 'Tangguh di segala medan tanjakan',
    specs: '4x4 High/Low &bull; Ground Clearance Tinggi &bull; Siap Segala Cuaca',
  },
  {
    name: 'Jeep Jimny',
    desc: 'Agile & estetik untuk foto',
    specs: 'Ringan & Lincah &bull; Estetik Klasik &bull; Favorit Konten Kreator',
  },
];

export default function Fleet() {
  const { openBooking } = useBooking();

  return (
    <section id="armada" className="py-12 sm:py-20 bg-[#12161A] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Gallery Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <div className="relative h-[380px] sm:h-[420px] w-full">
              <Image
                src="/images/jeep-fleet.jpg"
                alt="Armada Jeep 4x4 Banyuwangi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="absolute top-4 left-4 bg-[#12161A]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FA5A00] border border-[#FA5A00]/30">
              Armada Siaga &amp; Terawat
            </span>
          </div>

          {/* Right: Content & Cards */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              ARMADA KAMI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Jeep 4x4 Terbaik<br />dan Terawat
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-lg leading-relaxed">
              Kami menyediakan berbagai pilihan jeep dengan kondisi prima, aman dan nyaman untuk perjalanan wisata Anda di Banyuwangi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {vehicles.map((v) => (
                <div
                  key={v.name}
                  onClick={() => openBooking(`Pilihan Armada: ${v.name}`)}
                  className="bg-[#1A2127] hover:bg-[#222B32] border border-white/10 hover:border-[#FA5A00]/60 p-4 rounded-xl flex items-center gap-3.5 cursor-pointer transition-all hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FA5A00]/15 text-[#FA5A00] flex items-center justify-center shrink-0 group-hover:bg-[#FA5A00] group-hover:text-white transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 18h14"/><path d="M19 18l-1.5-6H4.5L3 18"/><path d="M4.5 12L7 5h10l2.5 7"/><circle cx="7.5" cy="18" r="2"/><circle cx="16.5" cy="18" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FA5A00] transition-colors">{v.name}</h4>
                    <p className="text-xs text-white/60">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking('Konsultasi Pilihan Armada Jeep')}
                className="inline-flex items-center gap-2 bg-[#FA5A00] hover:bg-[#E44F00] text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-orange-600/30 transition-colors"
              >
                Pilih Armada Sekarang &rarr;
              </button>
              <Link
                href="/armada"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-full border border-white/20 transition-colors"
              >
                Lihat Spesifikasi Lengkap &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
