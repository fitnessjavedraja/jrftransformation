export default function ReviewsSection({ reviews }) {
  return (
    <section id="reviews" className="section-block bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-kicker">Testimonials</p>
          <h2 className="section-title">What clients say after coaching</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article key={review.name} className="premium-card p-7">
              <div className="flex gap-1 mb-4 text-[#0f172a]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <i key={`${review.name}-${idx}`} data-lucide="star" style={{ width: 16, height: 16, fill: '#0f172a' }} />
                ))}
              </div>
              <p className="text-lg leading-8 text-[#334155] mb-4">"{review.quote}"</p>
              <p className="text-lg font-semibold text-[#0f172a]">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
