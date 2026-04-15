const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    pharmacy: "Independent Pharmacy, Toronto",
    product: "Custom Thermal Labels",
    quote:
      "The custom branding looks so professional — our patients notice. And the 24-hour shipping is a lifesaver when we run low.",
  },
  {
    initials: "DK",
    name: "David K.",
    pharmacy: "Guardian Pharmacy, Mississauga",
    product: "Plain Thermal Receipts",
    quote:
      "Best pricing we've ever had on thermal rolls, and the quality is way better than what we used to buy through our old supplier.",
  },
  {
    initials: "JT",
    name: "Jennifer T.",
    pharmacy: "I.D.A. Pharmacy, Ottawa",
    product: "Thermal Printers",
    quote:
      "The free printer with our first order was a huge win. It's been rock solid for months running hundreds of labels a day.",
  },
  {
    initials: "RP",
    name: "Raj P.",
    pharmacy: "Pharmasave, Hamilton",
    product: "Custom Thermal Receipts",
    quote:
      "Love that our pharmacy logo shows up on every receipt. Small branding touch, but it makes a real difference.",
  },
  {
    initials: "LC",
    name: "Linda C.",
    pharmacy: "Multi-location chain, GTA",
    product: "Plain Thermal Labels",
    quote:
      "Switched all 6 of our locations to Pharmabest Supplies. The consistency and volume pricing saved us thousands last year.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[#FFB400] mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label mb-3">2,000+ Reviews</p>
          <h2>Pharmacies love Pharmabest Supplies.</h2>
          <div className="flex items-center justify-center gap-0.5 text-[#FFB400] mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto scroll-hide -mx-6 lg:mx-0">
          <div className="flex gap-5 px-6 lg:px-0 snap-x snap-mandatory">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-white border border-gray-100 rounded-[20px] p-7 shrink-0 w-[320px] snap-start shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]"
              >
                <Stars />
                <p className="text-[15px] text-[#202324] leading-relaxed font-normal mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-extrabold text-white bg-gradient-to-br from-blue-600 to-indigo-700">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#202324]">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#545C5F]">
                      {t.pharmacy}
                    </div>
                    <div className="text-[11px] text-[#2563eb] font-semibold mt-0.5">
                      {t.product}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
