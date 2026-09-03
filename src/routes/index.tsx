import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Plans } from "@/components/site/Plans";
import { Menu } from "@/components/site/Menu";
import { Kitchen } from "@/components/site/Kitchen";
import { Orders } from "@/components/site/Orders";
import { Footer } from "@/components/site/Footer";

const title = "Ija Ki Rasoi — Home-style Tiffin & Cloud Kitchen";
const description =
  "Fresh home-cooked tiffins, thalis, biryani and party orders. 25-day advance plans from ₹80 a meal, free delivery up to 5 km, prepared in 30–45 minutes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Plans />
      <Menu />
      <Kitchen />
      <Orders />
      <Footer />
    </main>
  );
}
