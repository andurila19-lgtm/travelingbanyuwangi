'use client';

import React, { createContext, useContext, useState } from 'react';
import BookingModal from '@/components/BookingModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface BookingContextType {
  openBooking: (pkg?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Safari Jeep Baluran (Rp 800.000)');

  const openBooking = (pkg?: string) => {
    if (pkg) {
      setSelectedPackage(pkg);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        selectedPackage={selectedPackage}
      />
      <FloatingWhatsApp onOpenBooking={() => openBooking('Konsultasi Cepat via WhatsApp')} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
