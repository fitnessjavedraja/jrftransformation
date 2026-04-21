export default function ProgramsSection({ plans }) {
  return (
    <section id="programs" className="section-block bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-kicker">Subscription Plans</p>
          <h2 className="section-title">Choose your coaching package</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <article key={plan.name} className={`premium-card p-7 flex flex-col ${plan.featured ? 'featured-card' : ''}`}>
              <p className="text-sm tracking-[0.16em] uppercase text-[#334155] mb-3">{plan.name}</p>
              <p className="text-5xl font-extrabold text-[#0f172a] mb-2">{plan.price}</p>
              <p className="text-lg text-[#334155] mb-6">{plan.note}</p>
              <ul className="space-y-2 text-base text-[#334155] flex-1">
                <li>Weekly 1:1 coaching calls</li>
                <li>Customized workout plan</li>
                <li>Personalized nutrition strategy</li>
                <li>Direct support and accountability</li>
              </ul>
              <a href="#contact" className={`mt-8 text-center py-3 text-base font-bold tracking-[0.12em] uppercase ${plan.featured ? 'btn-gold' : 'btn-outline'}`}>
                Join Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
