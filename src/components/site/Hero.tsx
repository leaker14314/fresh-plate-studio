import heroThali from "@/assets/hero-thali.jpg";
import leaf from "@/assets/leaf-sprig.png";
import { WHATSAPP } from "@/data/menu";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-60" />
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
        className="pointer-events-none absolute -left-16 top-24 w-56 -rotate-12 opacity-25 md:w-72"
      />
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
        className="pointer-events-none absolute -right-20 bottom-0 w-64 rotate-[140deg] opacity-20 md:w-80"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Ghar jaisa swaad · Jaipur</p>
            <h1 className="mt-5 text-[2.6rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.2rem]">
              Home food,
              <br />
              cooked daily.
              <br />
              <span className="italic text-leaf-deep">Delivered warm.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              A small cloud kitchen running on real ingredients and a real timetable — fresh
              tiffins for students and working folks, plus à la carte thalis, biryani and party
              orders.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plans"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-leaf-deep"
              >
                See tiffin plans
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-leaf hover:text-leaf-deep"
              >
                Order on WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["30–45", "min prep & delivery"],
                ["5 km", "free delivery radius"],
                ["10–11", "am to pm, daily"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl text-leaf-deep">{k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <img
                src={heroThali}
                alt="Home-style tiffin meal with dal, roti, jeera rice, sabzi and salad in steel bowls"
                width={1408}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-full border border-border bg-paper px-5 py-2.5 text-xs font-semibold tracking-wide text-ink shadow-sm sm:left-8">
              No preservatives · Cooked to order
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
