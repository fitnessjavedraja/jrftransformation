import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProgramsSection from './components/ProgramsSection';
import TransformationsSection from './components/TransformationsSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import PrivacyModal from './components/PrivacyModal';
import { benefits, navLinks, plans, reviews } from './components/data';
import whatsappIcon from './assets/whatsappicon.jpg';

export default function App({ transformationsData }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.lucide?.createIcons();
  }, [mobileOpen, privacyOpen]);

  return (
    <div id="app" className="w-full h-full overflow-auto" onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 80)}>
      <Navbar
        navLinks={navLinks}
        mobileOpen={mobileOpen}
        scrolled={scrolled}
        onOpenMobile={() => setMobileOpen(true)}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <HeroSection />
      <div className="section-divider" />

      <BenefitsSection benefits={benefits} />
      <div className="section-divider" />

      <ProgramsSection plans={plans} />
      <div className="section-divider" />

      <TransformationsSection transformations={transformationsData} />
      <div className="section-divider" />

      <ReviewsSection reviews={reviews} />
      <div className="section-divider" />

      <ContactSection onOpenPrivacy={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <a
        href="https://wa.me/923351712300"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="" aria-hidden="true" className="whatsapp-icon" />
      </a>
    </div>
  );
}
