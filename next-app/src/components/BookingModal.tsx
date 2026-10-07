'use client';

import { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [pkg, setPkg] = useState(selectedPackage || 'Safari Jeep Baluran (Rp 800.000)');
  const [date, setDate] = useState('');
  const [pax, setPax] = useState('3-4');
  const [pickup, setPickup] = useState('');
  const [notes, setNotes] = useState('');

  // Lock background body scroll when modal is open, unlock when closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Update selected package when prop changes
  useEffect(() => {
    if (selectedPackage) {
      setPkg(selectedPackage);
    }
  }, [selectedPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const WHATSAPP_NUMBER = '6285335305863';

    const messageLines = [
      `Halo Admin Sewa Jeep Banyuwangi 🙏`,
      `Saya tertarik untuk sewa/booking Jeep dengan detail berikut:`,
      ``,
      `• *Nama Pemesan:* ${name || 'Calon Wisatawan'}`,
      `• *Pilihan Paket:* ${pkg || selectedPackage}`,
      `• *Tanggal Trip:* ${date || 'Menyesuaikan'}`,
      `• *Jumlah Orang:* ${pax} Orang`,
      `• *Lokasi Penjemputan:* ${pickup || 'Area Banyuwangi'}`,
      notes ? `• *Catatan Tambahan:* ${notes}` : '',
      ``,
      `Mohon informasi ketersediaan armada dan konfirmasi biayanya ya Kak. Terima kasih!`
    ].filter(Boolean);

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[2000] overflow-y-auto bg-black/75 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center transition-all"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative my-auto max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Sticky at top of modal) */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight">
              Booking Jeep Banyuwangi
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">Isi detail perjalanan Anda di bawah ini</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Tutup modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
              Nama Lengkap
            </label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
              Pilihan Paket Wisata
            </label>
            <select 
              value={pkg}
              onChange={(e) => setPkg(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none transition-all text-sm"
            >
              <option value="Safari Jeep Baluran (Rp 800.000)">Safari Jeep Baluran (Rp 800.000 / Jeep)</option>
              <option value="Djawatan + Baluran (Rp 1.200.000)">Djawatan + Baluran (Rp 1.200.000 / Jeep)</option>
              <option value="Kawah Wurung (Rp 800.000)">Kawah Wurung (Rp 800.000 / Jeep)</option>
              <option value="Jeep Experience (Rp 800.000)">Jeep Experience Custom (Rp 800.000)</option>
              <option value="Kawah Ijen Sunrise & Blue Fire">Kawah Ijen Sunrise & Blue Fire</option>
              <option value="Paket Custom Fleksibel">Paket Custom Fleksibel (Konsultasi Rute)</option>
              <option value="Request Jeep: Toyota Hardtop FJ40">Armada: Toyota Hardtop FJ40</option>
              <option value="Request Jeep: Toyota Land Cruiser">Armada: Toyota Land Cruiser</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                Tanggal Trip
              </label>
              <input 
                type="date" 
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                Jumlah Orang
              </label>
              <select 
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none transition-all text-sm"
              >
                <option value="1-2">1 - 2 Orang</option>
                <option value="3-4">3 - 4 Orang</option>
                <option value="5-6">5 - 6 Orang (1 Jeep Full)</option>
                <option value="Lebih dari 6">Rombongan (&gt; 6 Orang)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
              Lokasi Penjemputan
            </label>
            <input 
              type="text" 
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Contoh: Hotel Dialoog / Stasiun Ketapang / Bandara"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
              Catatan Tambahan (Opsional)
            </label>
            <textarea 
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Butuh dokumentasi kamera, jemput subuh, dll."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#FA5A00] focus:ring-2 focus:ring-[#FA5A00]/20 outline-none transition-all text-sm"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Lanjut Kirim ke WhatsApp Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
