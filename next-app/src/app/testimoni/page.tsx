import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';

const reviews = [
  {
    name: 'Rizky Pratama',
    city: 'Jakarta Selatan',
    trip: 'Safari Jeep Baluran (Savana Bekol + Pantai Bama)',
    avatar: '/images/avatar-2.jpg',
    quote:
      'Pengalaman jeep Baluran sangat seru! Driver ramah, armada nyaman, dan tahu banget spot foto yang instagramable. Banteng Jawa kelihatan banyak banget pas sore. Recommended!',
    date: 'September 2026',
  },
  {
    name: 'Siti Anisa',
    city: 'Surabaya',
    trip: 'Combo De Djawatan + Baluran',
    avatar: '/images/avatar-1.jpg',
    quote:
      'Trip Djawatan dan Baluran sangat berkesan. Pelayanan profesional dan harga sesuai tanpa ada biaya tersembunyi. Driver sabar banget nungguin kita foto-foto. Pasti akan kembali lagi!',
    date: 'Agustus 2026',
  },
  {
    name: 'Kevin Wijaya',
    city: 'Bandung',
    trip: 'Kawah Wurung Offroad Adventure',
    avatar: '/images/avatar-3.jpg',
    quote:
      'Jeep Toyota Hardtop-nya gagah dan kondisi mesinnya sangat prima, tanjakan Kawah Wurung dilibas enteng. Guide-nya sangat berpengalaman dan seru diajak ngobrol!',
    date: 'September 2026',
  },
  {
    name: 'Dimas Setiawan & Keluarga',
    city: 'Semarang',
    trip: 'Sunrise Kawah Ijen 4x4 Tour',
    avatar: '/images/avatar-2.jpg',
    quote:
      'Bawa keluarga dan orang tua ke Ijen awalnya ragu, tapi pakai Jeep Land Cruiser sangat nyaman. Penjemputan di hotel tepat waktu jam 12 malam. Pelayanan bintang 5!',
    date: 'Juli 2026',
  },
  {
    name: 'Nadia Rahmawati',
    city: 'Yogyakarta',
    trip: 'Private Trip Baluran Sunset',
    avatar: '/images/avatar-1.jpg',
    quote:
      'Bener-bener berasa lagi safari di Afrika! Suasana savananya magis banget pas senja. Mas driver jago banget motretin pake kamera HP hasilnya cakep-cakep.',
    date: 'Agustus 2026',
  },
  {
    name: 'Bambang Haryanto',
    city: 'Tangerang',
    trip: 'Jeep Experience Custom (Rombongan Kantor)',
    avatar: '/images/avatar-3.jpg',
    quote:
      'Pesan 4 jeep sekaligus untuk rombongan kantor. Semuanya on-time, konvoi rapi dan aman. Koordinasi via WhatsApp sangat responsif dan jelas. Top markotop!',
    date: 'Juni 2026',
  },
];

export default function TestimoniPage() {
  return (
    <div>
      <PageHeader
        tag="ULASAN WISATAWAN"
        title="Apa Kata Mereka Tentang Kami?"
        subtitle="Kepuasan dan senyum bahagia wisatawan adalah bukti dedikasi kami dalam menghadirkan trip offroad terbaik di Banyuwangi."
        breadcrumb="Testimoni"
      />

      {/* Stats Bar */}
      <section className="py-6 sm:py-12 bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200/60 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-[#FA5A00] block">4.9 / 5.0</span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-semibold">Rating Google Review</span>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200/60 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 block">350+</span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-semibold">Trip Jeep Sukses</span>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200/60 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 block">100%</span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-semibold">Driver Lokal Berlisensi</span>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200/60 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 block">15+</span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-semibold">Unit Jeep Siaga</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Reviews */}
      <section className="py-8 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200 shrink-0">
                      <Image src={r.avatar} alt={r.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900 leading-tight">{r.name}</h3>
                      <span className="text-xs text-gray-400 block">{r.city}</span>
                      <div className="flex text-amber-400 text-xs tracking-tighter mt-1">
                        ★★★★★
                      </div>
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-semibold text-[#FA5A00] bg-orange-100/60 px-2.5 py-1 rounded-md mb-3">
                    {r.trip}
                  </span>

                  <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="text-[11px] text-gray-400 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <span>Terverifikasi</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
