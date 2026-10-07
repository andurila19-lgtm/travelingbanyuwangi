'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';
import { useBooking } from '@/context/BookingContext';
import { vehicles } from '@/components/Fleet';

export default function ArmadaPage() {
  const { openBooking } = useBooking();

  const fullFleet = [
    {
      ...vehicles[0],
      tag: 'Ikonik & Paling Populer',
      features: ['Kapasitas 5-6 Penumpang', '4WD High & Low Aktif', 'Kabin Terbuka / Kanvas', 'Rollbar Pengaman Baja'],
      bestFor: 'Wisata Baluran, Savana Bekol, dan Hunting Foto Vintage',
    },
    {
      ...vehicles[1],
      tag: 'Kenyamanan Maksimal',
      features: ['Kapasitas 6-7 Penumpang', 'AC Dingin & Kabin Kedap', 'Suspensi Per Daun Halus', 'Ruang Bagasi Luas'],
      bestFor: 'Wisata Keluarga, Trip Jarak Jauh Ijen & Djawatan',
    },
    {
      ...vehicles[2],
      tag: 'Offroad Tangguh',
      features: ['Kapasitas 4-5 Penumpang', 'Ground Clearance Tinggi', 'Ban Mud Terrain (MT)', 'Torsi Kuat di Tanjakan'],
      bestFor: 'Medan Terjal Kawah Wurung & Sukamade',
    },
    {
      ...vehicles[3],
      tag: 'Lincah & Estetik',
      features: ['Kapasitas 2-3 Penumpang', 'Bodi Ringkas & Lincah', 'Estetik Retro Klasik', 'Mudah Masuk Jalur Sempit'],
      bestFor: 'Couple Trip, Solo Traveler & Content Creator',
    },
  ];

  return (
    <div>
      <PageHeader
        tag="SHOWROOM ARMADA"
        title="Pilihan Jeep 4x4 Terbaik &amp; Terawat"
        subtitle="Armada offroad prima dengan standar pemeliharaan ketat untuk menjamin keamanan dan kenyamanan petualangan Anda di Banyuwangi."
        breadcrumb="Armada"
      />

      {/* Hero Showcase */}
      <section className="py-8 sm:py-20 bg-[#12161A] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-10 sm:mb-16">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative h-56 sm:h-[420px] w-full">
                <Image
                  src="/images/jeep-fleet.jpg"
                  alt="Lineup Armada Jeep Banyuwangi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
                STANDAR PERAWATAN TERBAIK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
                Pemeriksaan Rutin Sebelum Setiap Rute Berangkat
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
                <p>
                  Keamanan wisatawan adalah komitmen tertinggi kami. Setiap unit jeep melewati 18 poin inspeksi mekanis setiap hari, mulai dari sistem pengereman, transmisi 4x4, gardan ganda, hingga tekanan ban.
                </p>
                <p>
                  Kami hanya menggunakan ban spesifikasi All-Terrain (AT) dan Mud-Terrain (MT) berdaya cengkeram tinggi untuk menjamin traksi stabil di pasir savana, tanah licin, maupun tanjakan bebatuan.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Armada */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fullFleet.map((v) => (
              <div
                key={v.name}
                className="bg-[#1A2127] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FA5A00]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-bold text-[#FA5A00] bg-[#FA5A00]/15 px-3 py-1 rounded-full border border-[#FA5A00]/30">
                      {v.tag}
                    </span>
                    <span className="text-xs text-white/50">4x4 Aktif</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">{v.name}</h3>
                  <p className="text-sm text-white/70 mb-5">{v.desc}</p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider block">
                      Spesifikasi &amp; Fitur:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                      {v.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-[#FA5A00]">&#10003;</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-white/70 mb-6">
                    <strong className="text-white block mb-0.5">Sangat Cocok Untuk:</strong>
                    {v.bestFor}
                  </div>
                </div>

                <button
                  onClick={() => openBooking(`Pilihan Armada: ${v.name}`)}
                  className="w-full bg-[#FA5A00] hover:bg-[#E44F00] text-white py-3 rounded-full font-bold text-sm transition-colors text-center shadow-lg shadow-orange-500/20"
                >
                  Pilih Armada {v.name} &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
