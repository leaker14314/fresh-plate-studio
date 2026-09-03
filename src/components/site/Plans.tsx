import { advancePlans, occasionalPlans, WHATSAPP } from "@/data/menu";
import tiffin from "@/assets/tiffin-box.png";

function PlanCard({
  n,
  name,
  price,
  includes,
  featured,
}: {
  n: string;
  name: string;
  price: string;
  includes: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-leaf-deep bg-leaf-deep text-primary-foreground"
          : "border-border bg-card hover:border-leaf"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span
            className={`text-[0.65rem] font-bold tracking-[0.2em] ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}
          >
            {n}
          </span>
          {featured && (
            <span className="rounded-full bg-paper/15 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest">
              Most picked
            </span>
          )}
        </div>
        <h3
          className={`mt-4 text-2xl ${featured ? "text-primary-foreground" : "text-ink"}`}
        >
          {name}
        </h3>
        <p
          className={`mt-1.5 text-sm leading-relaxed ${featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          {includes}
        </p>
      </div>
      <p
        className={`mt-8 font-display text-4xl ${featured ? "text-primary-foreground" : "text-leaf-deep"}`}
      >
        {price}
        <span
          className={`ml-1.5 font-sans text-xs font-medium tracking-wide ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          per meal
        </span>
      </p>
    </div>
  );
}

export function Plans() {
  return (
    <section id="plans" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">25 days advance tiffin plan</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              Pay once. Eat well for a month.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Miss a meal and your advance carries forward. Opt out anytime and use the balance
              later — no questions asked.
            </p>
          </div>
          <img
            src={tiffin}
            alt="Three-tier steel tiffin carrier"
            loading="lazy"
            width={900}
            height={1100}
            className="hidden w-28 justify-self-end opacity-90 md:block"
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advancePlans.map((p, i) => (
            <PlanCard key={p.name} {...p} featured={i === 1} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary p-6">
            <h3 className="text-lg text-ink">Flexible plan</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Missed meals roll over to your remaining balance.</li>
              <li>Opt out anytime — the balance stays yours.</li>
              <li>Without advance payment, occasional order rates apply.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-secondary p-6">
            <h3 className="text-lg text-ink">Cancellation timings</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Lunch — message us by 09:00 AM.</li>
              <li>Dinner — message us by 04:00 PM.</li>
              <li>One-hour requests: tell us in time so we can plan the kitchen.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <p className="eyebrow">Occasional orders</p>
          <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
            No plan? Order a meal when you need one.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {occasionalPlans.map((p) => (
              <PlanCard key={p.name} {...p} />
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Please order in advance from the menu so we can prepare and deliver on time. Anything
            added on top of a meal is charged as per the menu.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-leaf-deep"
          >
            Start a plan on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
