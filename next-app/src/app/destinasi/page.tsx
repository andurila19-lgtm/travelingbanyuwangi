'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';
import { useBooking } from '@/context/BookingContext';

const destinationList = [
  {
    id: 'baluran',
    title: 'Taman Nasional Baluran',
    tagline: 'Africa van Java',
    image: '/images/baluran.jpg',
    description:
      'Taman Nasional Baluran menyajikan hamparan savana Bekol seluas ratusan hektar dengan latar megah Gunung Baluran. Anda berkesempatan menyaksikan kawanan banteng Jawa, rusa, merak, dan monyet ekor panjang yang hidup bebas. Di ujung savana, pantai Bama dan hutan mangrove menawarkan ketenangan serta spot sunset spektakuler.',
    bestTime: '06.00 - 09.00 WIB atau 15.00 - 17.30 WIB (Musim Kemarau untuk nuansa Afrika)',
    highlights: ['Savana Bekol', 'Pantai Bama', 'Mangrove Trail', 'Menara Pandang'],
  },
  {
    id: 'djawatan',
    title: 'Hutan De Djawatan Benculuk',
    tagline: 'Hutan Trembesi Ikonik',
    image: '/images/djawatan.jpg',
    description:
      'Hutan lindung dengan deretan pohon trembesi (Samanea saman) raksasa berusia lebih dari 100 tahun yang tertutup tanaman paku dan lumut menggantung. Suasananya seolah membawa Anda ke hutan magis Fangorn dalam film The Lord of the Rings dengan cahaya matahari pagi yang menembus kanopi dedaunan.',
    bestTime: '07.30 - 10.00 WIB (Saat sinar matahari menembus rimbunnya pepohonan)',
    highlights: ['Spot Foto Trembesi Raksasa', 'Jalur Kuda & Jeep', 'Area Santai Keluarga'],
  },
  {
    id: 'kawah-wurung',
    title: 'Kawah Wurung',
    tagline: 'Bukit Eksotis Zamrud',
    image: '/images/kawah-wurung.jpg',
    description:
      'Kawah Wurung (berarti kawah yang tidak jadi) menghadirkan bentang perbukitan meliuk-liuk berlapis rumput hijau bak bukit Teletubbies. Jalur menuju ke lokasi menyuguhkan sensasi offroad ringan hingga menengah yang sangat seru dijelajahi bersama armada jeep 4x4.',
    bestTime: '05.30 - 09.00 WIB (Pagi hari saat kabut tipis dan udara masih sejuk)',
    highlights: ['Bukit Teletubbies', 'Track Offroad Melingkar', 'Spot Panorama 360 Derajat'],
  },
  {
    id: 'kawah-ijen',
    title: 'Kawah Ijen (Blue Fire & Kawah Asam)',
    tagline: 'Blue Fire & Sunrise Spektakuler',
    image: '/images/kawah-ijen.jpg',
    description:
      'Ikon wisata dunia di Banyuwangi. Saksikan fenomena kobaran api biru (Blue Fire) yang hanya ada dua di dunia, dilanjutkan danau kawah asam berwarna toska dengan pemandangan aktivitas penambang belerang tradisional di bibir kaldera.',
    bestTime: '00.00 - 07.00 WIB (Midnight trip dari kota)',
    highlights: ['Fenomena Blue Fire', 'Sunrise Kaldera Ijen', 'Danau Kawah Asam Toska'],
  },
];

export default function DestinasiPage() {
  const { openBooking } = useBooking();

  return (
    <div>
      <PageHeader
        tag="EKSPLORASI ALAM"
        title="Destinasi Wisata Jeep Terbaik di Banyuwangi"
        subtitle="Jelajahi lanskap alam paling spektakuler di ujung timur pulau Jawa dengan kenyamanan dan ketangguhan armada 4x4 kami."
        breadcrumb="Destinasi"
      />

      <section className="py-8 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-8 sm:space-y-16">
            {destinationList.map((dest, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={dest.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gray-50 border border-gray-100 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo */}
                  <div className={`lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative h-56 sm:h-96 w-full">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-[#FA5A00] font-bold text-xs px-3.5 py-1.5 rounded-full border border-orange-500/30">
                      {dest.tagline}
                    </span>
                  </div>

                  {/* Info */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-bold text-[#FA5A00] uppercase tracking-wider block mb-1.5">
                      Rute Pilihan #{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                      {dest.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                      {dest.description}
                    </p>

                    <div className="mb-5 p-4 rounded-xl bg-white border border-gray-200/80">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Waktu Kunjungan Terbaik:
                      </span>
                      <p className="text-xs text-gray-700 font-medium">
                        {dest.bestTime}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {dest.highlights.map((h, i) => (
                        <span key={i} className="text-xs bg-orange-100/60 text-orange-900 font-semibold px-3 py-1 rounded-full">
                          &bull; {h}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openBooking(`Trip Rute ${dest.title}`)}
                      className="inline-flex items-center gap-2 bg-[#FA5A00] hover:bg-[#E44F00] text-white text-sm font-bold px-6 py-3 rounded-full shadow-md shadow-orange-500/20 transition-colors"
                    >
                      Pesan Jeep Rute Ini &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
