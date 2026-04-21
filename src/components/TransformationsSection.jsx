import { useEffect, useState } from 'react';

export default function TransformationsSection({ transformations }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!transformations?.length) return null;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % transformations.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [transformations.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  return (
    <section id="transformations" className="section-block bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-kicker">Client Transformations</p>
          <h2 className="section-title">Real people. Real body changes.</h2>
        </div>

        <div className="transformations-carousel-wrap">
          <button type="button" className="carousel-btn carousel-btn-left" onClick={goPrev} aria-label="Previous transformations">←</button>
          <button type="button" className="carousel-btn carousel-btn-right" onClick={goNext} aria-label="Next transformations">→</button>

          <div
            className="transformations-carousel"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {transformations.map((item, index) => (
              <article key={`${item.name}-${index}`} className="transformation-slide premium-card">
                <div className="slide-media-row">
                  <div className="slide-slot">
                    <span className="slide-label">Before</span>
                    <div className="slide-frame">
                      <img className="slide-photo" src={item.before} alt={`${item.name} before`} loading="lazy" />
                    </div>
                  </div>

                  <div className="slide-arrow" aria-hidden="true">→</div>

                  <div className="slide-slot">
                    <span className="slide-label">After</span>
                    <div className="slide-frame">
                      <img className="slide-photo" src={item.after} alt={`${item.name} after`} loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="slide-meta">
                  <p className="slide-name">{item.name}</p>
                  <p className="slide-duration">{item.duration}</p>
                  <p className="slide-result">{item.result}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="carousel-hint">Auto-playing results. Use arrows to browse manually.</p>
        </div>
      </div>
    </section>
  );
}
