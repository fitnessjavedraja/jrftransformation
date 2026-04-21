import heroCoachImage from '../assets/hero-coach.png';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-gradient relative flex items-center justify-center min-h-screen px-6">
      <div className="hero-image-wrap">
        <img src={heroCoachImage} alt="Javed Raja training in gym" className="hero-image" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-glow" />
      <div className="relative w-full text-center fade-in pt-[30px]">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-white">Premium Online Fitness Coaching</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-5" style={{ fontFamily: 'Merriweather, serif' }}>
          Transform Your Body.
          <br />
          Upgrade Your Life.
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10">
          Build muscle, lose fat, and stay consistent with a coaching system tailored to your schedule, preferences, and goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold px-10 py-4 text-base font-bold tracking-[0.15em] uppercase">Start Now</a>
          <a href="#transformations" className="btn-outline px-10 py-4 text-base font-bold tracking-[0.15em] uppercase">See Results</a>
        </div>
      </div>
    </section>
  );
}
