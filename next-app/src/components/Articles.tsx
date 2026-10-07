import Image from 'next/image';

const articles = [
  {
    title: '7 Alasan Kenapa Liburan di Banyuwangi Lebih Seru Naik Jeep',
    image: '/images/hero-jeep.jpg',
  },
  {
    title: 'Panduan Lengkap Safari Jeep Baluran untuk Pemula',
    image: '/images/baluran.jpg',
  },
  {
    title: 'Open Trip vs Private Jeep Tour Banyuwangi, Mana yang Cocok?',
    image: '/images/djawatan.jpg',
  },
  {
    title: 'Destinasi Jeep Terbaik di Banyuwangi selain Baluran',
    image: '/images/kawah-wurung.jpg',
  },
];

export default function Articles() {
  return (
    <section id="blog" className="py-12 sm:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              ARTIKEL TERBARU
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Tips &amp; Inspirasi Liburan<br />di Banyuwangi
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl">
              Temukan berbagai informasi menarik seputar wisata jeep, tips perjalanan, dan rekomendasi destinasi di Banyuwangi.
            </p>
          </div>
          <a href="#blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FA5A00] hover:gap-2.5 transition-all">
            Lihat Semua Artikel &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <article
              key={art.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#FA5A00] transition-colors leading-snug line-clamp-2">
                  {art.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
