import Image from 'next/image';

const testimonials = [
  {
    name: 'Rizky Pratama',
    avatar: '/images/avatar-2.jpg',
    quote: 'Pengalaman jeep Baluran sangat seru! Driver ramah, armada nyaman, pemandangan luar biasa. Recommended!',
  },
  {
    name: 'Siti Anisa',
    avatar: '/images/avatar-1.jpg',
    quote: 'Trip Djawatan dan Baluran sangat berkesan. Pelayanan profesional dan harga sesuai. Pasti akan kembali lagi!',
  },
  {
    name: 'Kevin Wijaya',
    avatar: '/images/avatar-3.jpg',
    quote: 'Jeepnya keren, kondisi prima, guide-nya sangat berpengalaman. Trip ke Kawah Wurung benar-benar unforgettable!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-12 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A00] block mb-2">
              TESTIMONI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Apa Kata Mereka?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl">
              Pengalaman seru para wisatawan yang telah menjelajahi Banyuwangi bersama kami.
            </p>
          </div>
          <a href="#kontak" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FA5A00] hover:gap-2.5 transition-all">
            Lihat Semua Testimoni &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100 shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900 leading-tight">{t.name}</h4>
                  <div className="flex text-amber-400 text-sm tracking-tighter mt-0.5">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
