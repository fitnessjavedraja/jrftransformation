export default function ContactSection({ onOpenPrivacy }) {
  return (
    <section id="contact" className="section-block bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="premium-card p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="section-kicker">Let's Get Started</p>
            <h2 className="section-title">Ready to transform your body?</h2>
            <p className="text-lg text-[#334155] mt-4">Fill in the form and get a response within 24 hours.</p>
          </div>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success.html" className="space-y-5 mb-8">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Do not fill this out if you are human: <input name="bot-field" /></label></p>
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" id="name" name="name" required className="form-input" placeholder="Full name" />
              <input type="email" id="email" name="email" required className="form-input" placeholder="Email" />
            </div>
            <textarea id="message" name="message" rows="5" className="form-input" placeholder="Tell me about your goal" />
            <button type="submit" className="btn-gold w-full py-4 text-base font-bold tracking-[0.12em] uppercase">Send Message</button>
          </form>
          <div className="text-center text-[#334155] mb-6 flex flex-row items-center justify-center gap-6 flex-wrap">
            <p className="text-lg">
              Email:{' '}
              <a href="mailto:fitness.javedraja@gmail.com" className="underline hover:text-[#0f172a]">
                fitness.javedraja@gmail.com
              </a>
            </p>
            <p className="text-lg">
              WhatsApp:{' '}
              <a href="https://wa.me/923351712300" className="underline hover:text-[#0f172a]" target="_blank" rel="noreferrer">
                +92 335 1712300
              </a>
            </p>
          </div>
          <p className="text-center text-[#0f172a] cursor-pointer text-base" onClick={onOpenPrivacy}>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}
