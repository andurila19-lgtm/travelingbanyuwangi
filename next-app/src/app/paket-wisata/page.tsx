'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';
import { useBooking } from '@/context/BookingContext';
import { packageList } from '@/components/Packages';

export default function PaketWisataPage() {
  const { openBooking } = useBooking();

  const detailedPackages = [
    ...packageList,
    {
      id: 6,
      title: 'Sunrise Kawah Ijen 4x4 Tour',
      duration: '7-8 Jam (Midnight)',
      pax: '2-5 Orang',
      priceLabel: 'Mulai dari',
      price: 'Rp 950.000',
      unit: '/ Jeep',
      image: '/images/kawah-ijen.jpg',
      itinerary: 'Drop Off Pos Paltuding &bull; Guide Lokal &bull; Masker Gas &bull; Spot Sunrise Ijen',
    },
  ];

  const faqs = [
    {
      q: 'Apakah harga sudah termasuk tiket masuk wisata?',
      a: 'Harga paket dasar mencakup unit Jeep 4x4, driver profesional berpengalaman, dan bahan bakar (BBM). Tiket masuk kawasan taman nasional dapat dibeli mandiri atau dikoordinasikan langsung bersama admin kami.',
    },
    {
      q: 'Berapa kapasitas maksimal satu Jeep?',
      a: 'Satu unit Jeep Toyota Hardtop / Land Cruiser berkapasitas ideal 4 hingga 5 orang penumpang dewasa untuk kenyamanan maksimal selama perjalanan.',
    },
    {
      q: 'Di mana lokasi penjemputan peserta?',
      a: 'Kami melayani penjemputan langsung di hotel area kota Banyuwangi, Stasiun Ketapang, Stasiun Banyuwangi Kota, maupun Bandara Blimbingsari.',
    },
    {
      q: 'Bagaimana cara booking dan pembayaran DP?',
      a: 'Cukup klik tombol Booking via WhatsApp, pilih paket dan tanggal. Anda akan diarahkan langsung ke admin untuk konfirmasi armada dan pembayaran DP aman.',
    },
  ];

  return (
    <div>
      <PageHeader
        tag="KATALOG LENGKAP"
        title="Paket Sewa Jeep &amp; Rute Wisata Banyuwangi"
        subtitle="Pilihan paket sewa jeep 4x4 terlengkap dengan rute destinasi terpopuler, harga transparan, dan pelayanan istimewa."
        breadcrumb="Paket Wisata"
      />

      {/* Grid Paket Lengkap */}
      <section className="py-8 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    {pkg.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FA5A00]">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      Kapasitas {pkg.pax}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FA5A00]">
                        <rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      Jeep 4x4 Prima
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Highlight Rute:
                    </span>
                    <p 
                      className="text-xs text-gray-600 leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: pkg.itinerary }} 
                    />
                  </div>

                  {/* Pricing & CTA */}
                  <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-gray-400 font-medium">{pkg.priceLabel}</span>
                      <span className="text-xl font-black text-[#FA5A00]">
                        {pkg.price} <span className="text-xs font-normal text-gray-400">{pkg.unit}</span>
                      </span>
                    </div>

                    <button
                      onClick={() => openBooking(`${pkg.title} (${pkg.price})`)}
                      className="inline-flex items-center gap-2 bg-[#FA5A00] hover:bg-[#E44F00] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md shadow-orange-500/20 transition-colors"
                    >
                      Pesan Sekarang &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
