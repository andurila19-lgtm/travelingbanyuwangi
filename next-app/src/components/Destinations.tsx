'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';

export const destinations = [
  {
    id: 'baluran',
    name: 'Baluran',
    subtitle: 'Africa van Java',
    image: '/images/baluran.jpg',
    desc: 'Savana luas terbentang dengan latar Gunung Baluran, satwa liar eksotis, dan pantai Bama.',
  },
  {
    id: 'djawatan',
    name: 'Djawatan',
    subtitle: 'Hutan Trembesi Ikonik',
    image: '/images/djawatan.jpg',
    desc: 'Hutan pohon trembesi raksasa berusia ratusan tahun dengan suasana magis Lord of the Rings.',
  },
  {
    id: 'kawah-wurung',
    name: 'Kawah Wurung',
    subtitle: 'Bukit Eksotis',
    image: '/images/kawah-wurung.jpg',
    desc: 'Hamparan perbukitan hijau zamrud memukau dengan jalur offroad seru dan udara sejuk pegunungan.',
  },
  {
    id: 'kawah-ijen',
    name: 'Kawah Ijen',
    subtitle: 'Blue Fire & Sunrise',
    image: '/images/kawah-ijen.jpg',
    desc: 'Fenomena api biru langka di dunia dan danau kawah asam toska dengan pemandangan sunrise memukau.',
  },
];

export default function Destinations() {
  const { openBooking } = useBooking();

  return (
    <section id="destinasi" className="py-12 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              DESTINASI POPULER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Destinasi Jeep Terfavorit<br />di Banyuwangi
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl">
              Nikmati keindahan alam Banyuwangi dengan sensasi berbeda menggunakan jeep 4x4. Pilih destinasi favoritmu!
            </p>
          </div>
          <Link href="/destinasi" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FA5A00] hover:gap-2.5 transition-all">
            Lihat Semua Destinasi &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => openBooking(`Trip ${dest.name} (${dest.subtitle})`)}
              className="group relative h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1216]/95 via-[#0E1216]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                <h3 className="text-xl font-extrabold mb-1">{dest.name}</h3>
                <p className="text-xs text-white/75 mb-3.5">{dest.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FA5A00] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 group-hover:bg-[#FA5A00] group-hover:text-white transition-all">
                  Lihat Detail &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
