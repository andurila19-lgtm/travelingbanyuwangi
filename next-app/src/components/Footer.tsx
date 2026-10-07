import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D1013] text-white/70 pt-10 sm:pt-14 pb-24 sm:pb-10 border-t border-white/5 text-sm">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-8 sm:mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-3 group inline-block">
              <div className="text-white group-hover:text-[#FA5A00] transition-colors shrink-0">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 18h14"/><path d="M19 18l-1.5-6H4.5L3 18"/><path d="M4.5 12L7 5h10l2.5 7"/><circle cx="7.5" cy="18" r="2"/><circle cx="16.5" cy="18" r="2"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white uppercase leading-none">
                  SEWA JEEP <span className="text-[#FA5A00]">BANYUWANGI.ID</span>
                </span>
                <span className="text-[9px] tracking-widest text-white/60 font-bold uppercase mt-0.5">
                  OFFROAD &amp; TOUR ADVENTURE
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm mb-4">
              Pusat jasa sewa jeep 4x4 profesional di Banyuwangi untuk trip Kawah Ijen, Baluran, De Djawatan, dan Kawah Wurung.
            </p>
          </div>

          {/* Links: Side-by-Side 2 columns on Mobile */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-3 text-xs sm:text-sm uppercase tracking-wider">Navigasi</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><Link href="/" className="hover:text-[#FA5A00] transition-colors">Beranda</Link></li>
                <li><Link href="/tentang-kami" className="hover:text-[#FA5A00] transition-colors">Tentang Kami</Link></li>
                <li><Link href="/paket-wisata" className="hover:text-[#FA5A00] transition-colors">Paket Wisata</Link></li>
                <li><Link href="/destinasi" className="hover:text-[#FA5A00] transition-colors">Destinasi</Link></li>
                <li><Link href="/armada" className="hover:text-[#FA5A00] transition-colors">Armada 4x4</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-xs sm:text-sm uppercase tracking-wider">Info Trip</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li><Link href="/testimoni" className="hover:text-[#FA5A00] transition-colors">Testimoni</Link></li>
                <li><Link href="/blog" className="hover:text-[#FA5A00] transition-colors">Tips &amp; Blog</Link></li>
                <li><Link href="/kontak" className="hover:text-[#FA5A00] transition-colors">Kontak</Link></li>
                <li><Link href="/paket-wisata" className="hover:text-[#FA5A00] transition-colors">Rute Sewa</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-3 text-xs sm:text-sm uppercase tracking-wider">Kontak Cepat</h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FA5A00] shrink-0 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Jl. Raya Banyuwangi - Situbondo, Ketapang, Banyuwangi</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FA5A00] shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="font-bold text-white">0853 3530 5863</span>
              </div>
              <div className="flex items-center gap-2 text-[#25D366]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Layanan Online Siaga 24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Compact & Friendly on Mobile */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-white/50 text-center sm:text-left">
          <p>&copy; 2026 SEWA JEEP BANYUWANGI .ID &bull; All Rights Reserved.</p>
          <p className="hidden sm:block">Wisata Petualangan 4x4 Berkualitas di Banyuwangi.</p>
        </div>
      </div>
    </footer>
  );
}
