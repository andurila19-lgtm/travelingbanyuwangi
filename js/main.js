/**
 * SEWA JEEP BANYUWANGI - CLIENT-SIDE LOGIC & WHATSAPP INTEGRATION
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '6285335305863'; // From reference image

  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  // 3. Modal Elements
  const modalOverlay = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const bookingForm = document.getElementById('bookingForm');
  const packageSelect = document.getElementById('packageSelect');

  // Open modal handlers
  const openModal = (defaultPackage = '') => {
    if (packageSelect && defaultPackage) {
      packageSelect.value = defaultPackage;
    }
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Bind all booking trigger buttons
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgName = btn.getAttribute('data-package') || '';
      openModal(pkgName);
    });
  });

  // 4. Form Submit -> Redirect to WhatsApp with formatted text
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custName').value.trim();
      const pkg = document.getElementById('packageSelect').value;
      const date = document.getElementById('tripDate').value;
      const pax = document.getElementById('paxCount').value;
      const pickup = document.getElementById('pickupLoc').value.trim();
      const notes = document.getElementById('custNotes').value.trim();

      const messageLines = [
        `Halo Admin Sewa Jeep Banyuwangi 🙏`,
        `Saya tertarik untuk sewa/booking Jeep dengan detail berikut:`,
        ``,
        `• *Nama Pemesan:* ${name}`,
        `• *Pilihan Paket:* ${pkg}`,
        `• *Tanggal Trip:* ${date || 'Menyesuaikan'}`,
        `• *Jumlah Orang:* ${pax} Orang`,
        `• *Lokasi Penjemputan:* ${pickup || 'Area Banyuwangi'}`,
        notes ? `• *Catatan Tambahan:* ${notes}` : '',
        ``,
        `Mohon informasi ketersediaan armada dan konfirmasi biayanya ya Kak. Terima kasih!`
      ].filter(line => line !== null);

      const encodedText = encodeURIComponent(messageLines.join('\n'));
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

      window.open(waUrl, '_blank');
      closeModal();
    });
  }

  // 5. Destination Detail Quick View
  const destDetails = {
    'baluran': {
      title: 'Taman Nasional Baluran (Africa van Java)',
      desc: 'Jelajahi Savana Bekol yang megah dengan latar Gunung Baluran. Saksikan satwa liar seperti banteng Jawa, rusa, burung merak, dan nikmati ketenangan Pantai Bama serta hutan mangrove.'
    },
    'djawatan': {
      title: 'Hutan De Djawatan Benculuk',
      desc: 'Menikmati suasana magis di tengah pohon trembesi raksasa berusia ratusan tahun yang tertutup lumut, layaknya hutan Fangorn di film The Lord of the Rings.'
    },
    'kawah-wurung': {
      title: 'Kawah Wurung (Bukit Teletubbies)',
      desc: 'Hamparan perbukitan hijau zamrud yang bergelombang dengan udara sejuk pegunungan. Rute jeep offroad yang menantang namun sangat memanjakan mata.'
    },
    'kawah-ijen': {
      title: 'Kawah Ijen (Blue Fire & Sunrise)',
      desc: 'Sensasi petualangan malam menuju fenomena Blue Fire langka di dunia, disusul keindahan danau kawah asam toska dan sunrise menakjubkan di puncak Ijen.'
    }
  };

  document.querySelectorAll('[data-dest-detail]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const destKey = btn.getAttribute('data-dest-detail');
      const data = destDetails[destKey];
      if (data) {
        alert(`${data.title}\n\n${data.desc}\n\nKlik 'Booking via WhatsApp' untuk konsultasi rute & paket ini!`);
      }
    });
  });

  // 6. Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
          }
        }
      }
    });
  });
});
