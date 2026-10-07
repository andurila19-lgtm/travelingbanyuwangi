import Link from 'next/link';

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHeader({ tag, title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative pt-[72px] pb-3.5 sm:pt-32 sm:pb-12 bg-[#12161A] text-white border-b border-white/10 overflow-hidden">
      {/* Subtle ambient glow (desktop only) */}
      <div className="hidden sm:block absolute top-0 right-1/4 w-96 h-96 bg-[#FA5A00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb - Sleek & Compact */}
        <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/50 mb-1 sm:mb-3">
          <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
          <span className="text-white/30">/</span>
          <span className="text-[#FA5A00] font-semibold">{breadcrumb}</span>
        </nav>

        {/* Eyebrow tag: Desktop only to keep mobile header minimal */}
        <span className="hidden sm:inline-block text-xs font-extrabold uppercase tracking-widest text-[#FA5A00] mb-2.5">
          {tag}
        </span>

        {/* Title - Sleek & Compact on mobile */}
        <h1 className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight max-w-3xl">
          {title}
        </h1>

        {/* Subtitle - Desktop only to keep mobile clean and avoid taking over the viewport */}
        <p className="hidden sm:block text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed mt-2.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
