export default function BenefitsSection({ benefits }) {
  return (
    <section id="about" className="section-block bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-kicker">Why This Works</p>
          <h2 className="section-title">A clean system for real, sustainable progress</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-10 mb-12 max-w-2xl mx-auto">
          <div className="stat-box text-center"><p className="stat-number">500+</p><p className="stat-label">Clients</p></div>
          <div className="stat-box text-center"><p className="stat-number">8+</p><p className="stat-label">Years</p></div>
          <div className="stat-box text-center"><p className="stat-number">15</p><p className="stat-label">Countries</p></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <article key={item.title} className="premium-card p-7">
              <div className="icon-chip"><i data-lucide={item.icon} style={{ width: 20, height: 20 }} /></div>
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-3">{item.title}</h3>
              <p className="text-lg leading-8 text-[#334155]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
