'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

export default function KontakPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkg, setPkg] = useState('Safari Jeep Baluran');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const WHATSAPP_NUMBER = '6285335305863';

    const lines = [
      `Halo Admin Sewa Jeep Banyuwangi 🙏`,
      `Saya ingin konsultasi/tanya trip melalui form website:`,
      ``,
      `• *Nama:* ${name}`,
      `• *No. WhatsApp:* ${phone || '-'}`,
      `• *Paket Minat:* ${pkg}`,
      `• *Rencana Tanggal:* ${date || 'Menyesuaikan'}`,
      message ? `• *Pesan:* ${message}` : '',
      ``,
      `Mohon informasinya ya Kak. Terima kasih!`
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div>
      <PageHeader
        tag="HUBUNGI KAMI"
        title="Konsultasi &amp; Reservasi Jeep 24/7"
        subtitle="Siap melayani pertanyaan jadwal, ketersediaan armada, dan konsultasi rute khusus di Banyuwangi secara ramah dan responsif."
        breadcrumb="Kontak"
      />

      <section className="py-8 sm:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            {/* Info Kolom Kiri */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#FA5A00] uppercase tracking-wider block mb-2">
                  INFORMASI KANTOR
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                  Siap Membantu Rencana Liburan Anda
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tim kami siaga melayani chat WhatsApp dan telepon setiap hari. Jangan ragu untuk bertanya rute terbaik sesuai waktu luang dan anggaran Anda.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FA5A00] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Alamat Pool &amp; Garasi</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Jl. Raya Banyuwangi - Situbondo, Ketapang, Kalipuro, Kabupaten Banyuwangi, Jawa Timur 68451
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">WhatsApp &amp; Telepon</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      <a href="https://wa.me/6285335305863" target="_blank" rel="noopener noreferrer" className="text-[#FA5A00] font-bold hover:underline">
                        0853 3530 5863
                      </a> (Fast Response 24 Jam)
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FA5A00] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Jam Operasional</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Senin - Minggu: 24 Jam (Siaga Midnight Trip Ijen &amp; Penjemputan Stasiun/Bandara)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kolom Kanan */}
            <div className="lg:col-span-7">
              <div className="bg-white p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-md">
                <span className="text-xs font-bold text-[#FA5A00] uppercase tracking-wider block mb-2">
                  KIRIM PESAN LANGSUNG
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Formulir Konsultasi Rute &amp; Harga
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Andi Wijaya"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 0812xxxxxxxx"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Pilihan Paket / Rute
                      </label>
                      <select
                        value={pkg}
                        onChange={(e) => setPkg(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none text-sm transition-all"
                      >
                        <option value="Safari Jeep Baluran">Safari Jeep Baluran</option>
                        <option value="Combo Djawatan + Baluran">Combo Djawatan + Baluran</option>
                        <option value="Kawah Wurung Offroad">Kawah Wurung Offroad</option>
                        <option value="Sunrise Kawah Ijen 4x4">Sunrise Kawah Ijen 4x4</option>
                        <option value="Jeep Experience Custom">Jeep Experience Custom</option>
                        <option value="Paket Custom Fleksibel">Paket Custom Fleksibel</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Rencana Tanggal
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Pesan atau Pertanyaan Khusus
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Contoh: Kami rombongan 8 orang, ingin jemput di Stasiun Ketapang jam 05.00 pagi..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/25 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    Kirim Pertanyaan via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
