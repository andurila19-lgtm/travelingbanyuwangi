'use client';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export default function FloatingWhatsApp({ onOpenBooking }: FloatingWhatsAppProps) {
  return (
    <button
      onClick={onOpenBooking}
      aria-label="Chat WhatsApp Admin"
      className="fixed bottom-5 right-5 z-[999] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/35 hover:bg-[#20BD5A] transition-colors group"
    >
      <span className="hidden sm:inline-block absolute right-[68px] bg-gray-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        Chat Langsung WhatsApp
      </span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="sm:w-7 sm:h-7">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
    </button>
  );
}
