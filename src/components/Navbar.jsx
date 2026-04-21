import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';

export default function Navbar({ navLinks, mobileOpen, onOpenMobile, onCloseMobile, scrolled }) {
  return (
    <>
      <nav
        id="main-nav"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15,23,42,0.14)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" aria-label="Javed Raja Fitness" className="flex items-center">
            <img
              src={scrolled ? logoBlack : logoWhite}
              alt="Javed Raja Fitness logo"
              className="h-20 md:h-24 w-auto max-w-none"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-base tracking-[0.14em] uppercase ${scrolled ? 'text-[#0f172a]' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 text-base font-bold tracking-[0.14em] uppercase rounded-[10px] transition-all duration-200 ${
                scrolled
                  ? 'btn-gold'
                  : 'bg-white text-[#0f172a] hover:bg-[#f1f5f9] hover:-translate-y-[2px]'
              }`}
            >
              Get Started
            </a>
            <a
              href="/admin"
              className={`px-4 py-2 text-sm font-bold tracking-[0.12em] uppercase rounded-[10px] transition-all duration-200 ${
                scrolled
                  ? 'btn-outline'
                  : 'bg-transparent text-white border border-white hover:bg-white hover:text-[#0f172a]'
              }`}
            >
              Admin
            </a>
          </div>
          <button className={`md:hidden ${scrolled ? 'text-[#0f172a]' : 'text-white'}`} onClick={onOpenMobile} aria-label="Open menu">
            <i data-lucide="menu" style={{ width: 24, height: 24 }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-white ${mobileOpen ? 'open' : ''}`}>
        <button className="absolute top-6 right-6 text-[#0f172a]" onClick={onCloseMobile} aria-label="Close menu">
          <i data-lucide="x" style={{ width: 24, height: 24 }} />
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={onCloseMobile} className="text-3xl font-medium tracking-[0.12em] uppercase text-[#0f172a]">
            {link.label}
          </a>
        ))}
        <a href="/admin" onClick={onCloseMobile} className="text-3xl font-medium tracking-[0.12em] uppercase text-[#0f172a]">
          Admin
        </a>
      </div>
    </>
  );
}
