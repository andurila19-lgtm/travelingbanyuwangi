'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';

export const packageList = [
  {
    id: 1,
    title: 'Safari Jeep Baluran',
    duration: '4-5 Jam',
    pax: '2-5 Orang',
    priceLabel: 'Mulai dari',
    price: 'Rp 800.000',
    unit: '/ Jeep',
    image: '/images/baluran.jpg',
    itinerary: 'Savana Bekol &bull; Hutan Musim &bull; Pantai Bama &bull; Mangrove Trail',
  },
  {
    id: 2,
    title: 'Djawatan + Baluran',
    duration: '6-8 Jam',
    pax: '2-5 Orang',
    priceLabel: 'Mulai dari',
    price: 'Rp 1.200.000',
    unit: '/ Jeep',
    image: '/images/djawatan.jpg',
    itinerary: 'Hutan Trembesi Djawatan &bull; Savana Baluran &bull; Sunset Bama',
  },
  {
    id: 3,
    title: 'Kawah Wurung',
    duration: '4-5 Jam',
    pax: '2-5 Orang',
    priceLabel: 'Mulai dari',
    price: 'Rp 800.000',
    unit: '/ Jeep',
    image: '/images/kawah-wurung.jpg',
    itinerary: 'Bukit Teletubbies &bull; Kawah Wurung Offroad &bull; Kebun Kopi Jampit',
  },
  {
    id: 4,
    title: 'Jeep Experience',
    duration: 'Custom Trip',
    pax: '2-5 Orang',
    priceLabel: 'Mulai dari',
    price: 'Rp 800.000',
    unit: '/ Jeep',
    image: '/images/hero-jeep.jpg',
    itinerary: 'Eksplorasi Jalur Offroad &bull; Spot Sunrise/Sunset Pilihan',
  },
  {
    id: 5,
    title: 'Paket Custom',
    duration: 'Fleksibel',
    pax: '2-5 Orang',
    priceLabel: 'Konsultasi Rute',
    price: 'Hubungi Kami',
    unit: '',
    image: '/images/kawah-ijen.jpg',
    itinerary: 'Sesuaikan rute impian Anda bersama tim driver lokal kami',
  },
];

export default function Packages() {
  const { openBooking } = useBooking();

  return (
    <section id="paket" className="py-12 sm:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              PAKET JEEP BANYUWANGI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Pilihan Paket Wisata Jeep
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl">
              Paket lengkap dengan itinerary menarik, harga transparan dan pelayanan terbaik.
            </p>
          </div>
          <Link href="/paket-wisata" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FA5A00] hover:gap-2.5 transition-all">
            Lihat Semua Paket &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {packageList.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-extrabold text-gray-900 mb-2.5 leading-snug">
                  {pkg.title}
                </h3>

                <div className="space-y-1.5 mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FA5A00]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FA5A00]">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span>{pkg.pax}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-dashed border-gray-200 flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium">
                      {pkg.priceLabel}
                    </span>
                    <span className="text-sm font-black text-[#FA5A00]">
                      {pkg.price} <span className="text-[10px] font-normal text-gray-400">{pkg.unit}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => openBooking(`${pkg.title} (${pkg.price})`)}
                    title={`Pesan ${pkg.title}`}
                    className="w-8 h-8 rounded-full bg-[#FA5A00] hover:bg-[#E44F00] text-white flex items-center justify-center shrink-0 transition-colors shadow-md shadow-orange-500/20"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
