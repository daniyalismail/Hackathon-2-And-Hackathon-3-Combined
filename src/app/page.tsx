import Image from "next/image";
import Hero1 from "@/components/hero-1";
import Blackline from "@/components/blackline";
import Bigbox from "@/components/bigbox";
import Reviewsec from "@/components/reviewsec";
import Sanity_productpg from "@/components/SanityPages/sanity_productpg";
import TailwindGrid1 from "@/components/tailwindgrid1";
import TailwindGrid2 from "@/components/tailwindgrid2";
// import Productsdata from "@/components/productsdata";
export default function Home() {
  return (
    <main>
      <Hero1/>
      <Blackline/>
      <TailwindGrid1/>
      <TailwindGrid2/>
      <Bigbox/>
      <Reviewsec/>
    </main>
  );
}
