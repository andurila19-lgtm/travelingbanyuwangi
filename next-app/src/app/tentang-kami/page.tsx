import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Mengenal Sewa Jeep Banyuwangi .ID, penyedia layanan sewa jeep 4x4 wisata terpercaya di Baluran, Ijen, Djawatan, dan Kawah Wurung.',
};

export default function TentangKamiPage() {
  return (
    <div>
      <PageHeader
        tag="TENTANG KAMI"
        title="Mitra Petualangan Jeep 4x4 Terpercaya di Banyuwangi"
        subtitle="Menyediakan pengalaman offroad wisata terbaik dengan armada prima, driver lokal berpengalaman, dan komitmen keselamatan tinggi."
        breadcrumb="Tentang Kami"
      />

      {/* Cerita Kami */}
      <section className="py-8 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="relative h-56 sm:h-[440px] w-full">
                <Image
                  src="/images/hero-jeep.jpg"
                  alt="Tim Sewa Jeep Banyuwangi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
                CERITA &amp; DEDIKASI KAMI
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-5">
                Membuka Gerbang Keindahan Banyuwangi dengan Jeep 4x4
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Banyuwangi dikaruniai lanskap alam yang luar biasa menakjubkan—dari savana Afrika van Java di Taman Nasional Baluran, hutan purba De Djawatan, hingga magisnya Kawah Wurung dan api biru Kawah Ijen.
                </p>
                <p>
                  Namun, medan alami tersebut membutuhkan armada yang tangguh serta pemahaman medan yang mendalam. <strong>Sewa Jeep Banyuwangi .ID</strong> hadir untuk menjembatani wisatawan dengan alam liar Banyuwangi secara aman, nyaman, dan berkesan.
                </p>
                <p>
                  Seluruh driver kami adalah putra daerah asli Banyuwangi yang tidak hanya ahli mengemudi di medan ekstrem, namun juga berperan sebagai pemandu wisata yang ramah, komunikatif, dan siap membantu dokumentasi perjalanan Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilar Keunggulan */}
      <section className="py-10 sm:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              KEUNGGULAN UTAMA
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Kenapa Memilih Layanan Kami?
            </h2>
            <p className="text-xs sm:text-base text-gray-500 mt-2">
              Standar pelayanan profesional untuk kenyamanan Anda dan keluarga sepanjang liburan di Banyuwangi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FA5A00] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Armada Prima &amp; Terawat</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Pemeriksaan mekanik berkala, rem, suspensi, dan ban khusus offroad sebelum setiap trip berangkat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FA5A00] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21a8.5 8.5 0 0 1 13 0"></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Driver Lokal Berpengalaman</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Driver ramah, mengenal seluk-beluk jalur tikus, spot foto terbaik, dan waktu kunjungan paling ideal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FA5A00] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Harga Transparan</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Tanpa biaya tersembunyi. Rincian biaya sewa, BBM, dan driver dijelaskan secara jujur dan transparan di awal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FA5A00] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Keselamatan No. 1</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Dilengkapi kotak P3K standar, roll bar proteksi, seatbelt, dan panduan keselamatan sebelum memulai trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
