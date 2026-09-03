import { useState } from "react";
import { menu, type Group } from "@/data/menu";

function GroupBlock({ group }: { group: Group }) {
  return (
    <div className="break-inside-avoid">
      <div className="flex items-center gap-3">
        <h3 className="text-lg text-ink">{group.title}</h3>
        <span className="h-px flex-1 bg-border" />
        {group.columns && (
          <span className="flex gap-6 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="w-12 text-right">{group.columns[0]}</span>
            <span className="w-12 text-right">{group.columns[1]}</span>
          </span>
        )}
      </div>
      <ul className="mt-4 space-y-3">
        {group.items.map((item) => (
          <li key={item.name} className="flex items-baseline text-sm">
            <span className="text-ink">
              {item.name}
              {item.note && (
                <span className="ml-2 text-xs text-muted-foreground">{item.note}</span>
              )}
            </span>
            <span className="rule-dotted" />
            <span className="flex shrink-0 gap-6 font-semibold text-leaf-deep">
              <span className="w-12 text-right">{item.price}</span>
              {item.price2 && <span className="w-12 text-right">{item.price2}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState(menu[0]!.id);
  const section = menu.find((s) => s.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="border-y border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="eyebrow">The full menu</p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
          Everything from a ₹15 tawa roti to a mutton thali.
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {menu.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                s.id === active
                  ? "border-leaf-deep bg-leaf-deep text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-leaf hover:text-leaf-deep"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-2">
          {section.groups.map((g) => (
            <GroupBlock key={g.title} group={g} />
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Prices are inclusive and may change with seasonal produce. Half / full portions apply to
          curries only.
        </p>
      </div>
    </section>
  );
}
