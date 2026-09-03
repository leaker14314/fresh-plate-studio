import { WHATSAPP } from "@/data/menu";

const services = [
  { title: "Daily tiffin", body: "Lunch and dinner on a fixed schedule, 25-day advance plans." },
  { title: "Brunch & singles", body: "One-off meals, thalis, biryani and paratha plates." },
  { title: "Party orders", body: "Family gatherings, office lunches and special occasions." },
  { title: "Bulk & pre-booking", body: "Festival menus and bulk orders planned days ahead." },
];

export function Orders() {
  return (
    <section id="orders" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-leaf-soft">
              We also take
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Party orders, done <span className="italic text-leaf-soft">home-style</span>.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-paper/65">
            Tell us the headcount and the date. We plan the menu with you, cook it the same morning
            and deliver it hot — no catering-tray shortcuts.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="bg-ink p-6">
              <h3 className="text-lg text-paper">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-paper/15 p-7 md:grid-cols-3 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Free delivery</p>
            <p className="mt-1.5 text-sm text-paper/85">
              Up to 5 km. Beyond that, ₹15 per additional 5 km.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Prep & delivery</p>
            <p className="mt-1.5 text-sm text-paper/85">30 to 45 minutes, cooked to order.</p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="justify-self-start rounded-full bg-leaf-soft px-7 py-3.5 text-sm font-semibold text-leaf-deep transition-colors hover:bg-paper md:justify-self-end"
          >
            Plan an order
          </a>
        </div>
      </div>
    </section>
  );
}
