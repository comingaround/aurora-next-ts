import Header from "./components/Home/Header/Header";
import HeroOne from "./components/Home/HeroOne/HeroOne";
import BestSellers from "./components/Home/BestSellers/BestSellers";
import Collections from "./components/Home/Collections/Collections";

export default function Home() {
  return (
    <>
      <Header />
      <HeroOne />
      <BestSellers />
      <Collections />
    </>
  );
}
