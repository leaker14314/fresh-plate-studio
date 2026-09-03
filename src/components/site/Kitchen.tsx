import kitchen from "@/assets/kitchen-hands.jpg";
import roti from "@/assets/roti-plate.jpg";
import leaf from "@/assets/leaf-sprig.png";

const values = [
  {
    title: "Fresh ingredients",
    body: "Vegetables bought the same morning. Nothing frozen, nothing reheated from yesterday.",
  },
  {
    title: "Hygienically prepared",
    body: "A closed kitchen, covered hair, clean steel. Packed sealed and delivered warm.",
  },
  {
    title: "Made with love",
    body: "Home recipes, mild masala, and the option to tune spice and portions to your taste.",
  },
];

export function Kitchen() {
  return (
    <section id="kitchen" className="relative overflow-hidden py-24 md:py-32">
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={900}
        height={900}
        className="pointer-events-none absolute -right-24 top-10 w-72 rotate-[25deg] opacity-15"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={kitchen}
              alt="Hands rolling fresh dough on a floured wooden board"
              loading="lazy"
              width={1200}
              height={1500}
              className="col-span-1 h-full w-full rounded-2xl border border-border object-cover"
            />
            <img
              src={roti}
              alt="Stack of fresh homemade rotis with a bowl of dal"
              loading="lazy"
              width={1200}
              height={900}
              className="col-span-1 mt-10 h-full w-full rounded-2xl border border-border object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Our kitchen</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              One kitchen, one family, every meal cooked to order.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Ija Ki Rasoi started as a household kitchen cooking for a handful of students. We
              still cook the same way — small batches, fixed timings, and food we would serve at our
              own table.
            </p>

            <div className="mt-10 divide-y divide-border border-y border-border">
              {values.map((v) => (
                <div key={v.title} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <h3 className="text-base text-leaf-deep">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
