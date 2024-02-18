import Hero from "./components/Home/Hero/Hero";
import HeroOne from "./components/Home/HeroOne/HeroOne";
import BestSellers from "./components/Home/BestSellers/BestSellers";
import Collections from "./components/Home/Collections/Collections";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroOne />
      <BestSellers />
      <Collections />
    </>
  );
}
