import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Packages from '@/components/Packages';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Articles from '@/components/Articles';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Destinasi Populer */}
      <Destinations />

      {/* Pilihan Paket Wisata Jeep */}
      <Packages />

      {/* Armada Kami */}
      <Fleet />

      {/* Testimoni Wisatawan */}
      <Testimonials />

      {/* Tips & Inspirasi Liburan / Blog */}
      <Articles />

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </>
  );
}
