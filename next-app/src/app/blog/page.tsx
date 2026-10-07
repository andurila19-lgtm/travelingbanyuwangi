import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CtaBanner from '@/components/CtaBanner';

const blogPosts = [
  {
    title: '7 Alasan Kenapa Liburan di Banyuwangi Lebih Seru Naik Jeep',
    category: 'Inspirasi',
    readTime: '4 Menit Baca',
    image: '/images/hero-jeep.jpg',
    excerpt:
      'Dari akses ke jalur savana tersembunyi hingga sensasi angin sejuk perbukitan, ini alasan kenapa rental jeep 4x4 adalah pilihan transportasi wisata terbaik di Banyuwangi.',
  },
  {
    title: 'Panduan Lengkap Safari Jeep Baluran untuk Pemula',
    category: 'Panduan Trip',
    readTime: '6 Menit Baca',
    image: '/images/baluran.jpg',
    excerpt:
      'Semua hal yang wajib Anda ketahui sebelum mengunjungi Africa van Java: jam terbaik melihat satwa, tiket masuk, pakaian yang disarankan, dan rute ke Pantai Bama.',
  },
  {
    title: 'Open Trip vs Private Jeep Tour Banyuwangi, Mana yang Cocok?',
    category: 'Tips Liburan',
    readTime: '5 Menit Baca',
    image: '/images/djawatan.jpg',
    excerpt:
      'Bingung memilih antara open trip hemat biaya atau private trip fleksibel untuk keluarga? Simak perbandingan lengkap fasilitas, jadwal, dan estimasi biayanya di sini.',
  },
  {
    title: 'Destinasi Jeep Terbaik di Banyuwangi selain Baluran',
    category: 'Rekomendasi',
    readTime: '5 Menit Baca',
    image: '/images/kawah-wurung.jpg',
    excerpt:
      'Selain Savana Bekol, Banyuwangi menyimpan Kawah Wurung, De Djawatan, hingga rute ekstrem Pantai Sukamade yang siap memacu adrenalin pecinta alam.',
  },
  {
    title: 'Tips Naik Jeep ke Kawah Ijen Tengah Malam: Persiapan & Pakaian',
    category: 'Tips Liburan',
    readTime: '4 Menit Baca',
    image: '/images/kawah-ijen.jpg',
    excerpt:
      'Suhu di puncak Ijen bisa mencapai 5-10 derajat celcius. Berikut panduan pakaian tebal, masker respirator gas belerang, dan waktu penjemputan dari hotel.',
  },
  {
    title: 'Mengenal Toyota Hardtop FJ40: Jeep Legendaris Penakluk Wisata Jawa Timur',
    category: 'Armada & Otomotif',
    readTime: '5 Menit Baca',
    image: '/images/jeep-fleet.jpg',
    excerpt:
      'Sejarah dan keandalan mesin 2F 4x4 Toyota FJ40 yang menjadikannya armada favorit para petualang di Kawah Ijen, Bromo, hingga Baluran Banyuwangi.',
  },
];

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        tag="TIPS &amp; INSPIRASI"
        title="Artikel, Panduan &amp; Cerita Petualangan"
        subtitle="Temukan informasi terlengkap seputar wisata offroad, rekomendasi spot foto, dan panduan perjalanan di Banyuwangi."
        breadcrumb="Blog"
      />

      <section className="py-8 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-[#FA5A00] font-bold text-xs px-3 py-1 rounded-full border border-white/20">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2.5">
                    <span>{post.readTime}</span>
                    <span>&bull;</span>
                    <span>Wisata Banyuwangi</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#FA5A00] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#FA5A00] group-hover:gap-2 transition-all">
                    <span>Baca Selengkapnya</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
