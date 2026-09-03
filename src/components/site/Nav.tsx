import { useEffect, useState } from "react";
import { PHONE, WHATSAPP } from "@/data/menu";

const links = [
  { href: "#plans", label: "Tiffin Plans" },
  { href: "#menu", label: "Menu" },
  { href: "#kitchen", label: "Our Kitchen" },
  { href: "#orders", label: "Party Orders" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-border bg-paper/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="flex min-w-0 items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-ink">Ija Ki Rasoi</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Cloud Kitchen
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-leaf-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-leaf-deep px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-leaf"
          >
            {PHONE}
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-paper px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-leaf-deep px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Order on WhatsApp · {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
