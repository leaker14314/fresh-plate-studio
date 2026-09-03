import { PHONE, WHATSAPP } from "@/data/menu";
import leaf from "@/assets/leaf-sprig.png";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden py-20 md:py-28">
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={900}
        height={900}
        className="pointer-events-none absolute -left-20 bottom-0 w-64 rotate-[200deg] opacity-15"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
          Hungry? Message us and eat within the hour.
        </h2>

        <div className="mt-10 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Call or WhatsApp</p>
            <a
              href={`tel:+91${PHONE}`}
              className="mt-3 block font-display text-2xl text-ink transition-colors hover:text-leaf-deep"
            >
              +91 {PHONE}
            </a>
          </div>
          <div>
            <p className="eyebrow">Timings</p>
            <p className="mt-3 text-sm text-muted-foreground">10:00 AM — 11:00 PM, every day</p>
          </div>
          <div>
            <p className="eyebrow">Also on</p>
            <p className="mt-3 text-sm text-muted-foreground">Zomato &amp; Swiggy</p>
          </div>
          <div>
            <p className="eyebrow">Order</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-full bg-leaf-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-leaf"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ija Ki Rasoi · Cloud Kitchen</p>
          <p className="italic">Eat well, live life.</p>
        </div>
      </div>
    </footer>
  );
}
