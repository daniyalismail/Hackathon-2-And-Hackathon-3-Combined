import Image from "next/image";
import Hero1 from "@/components/hero-1";
import Blackline from "@/components/blackline";
import Grid1 from "@/components/grid1";
import Grid2 from "@/components/grid2";
import Bigbox from "@/components/bigbox";
import Reviewsec from "@/components/reviewsec";
export default function Home() {
  return (
    <main>
      <Hero1/>
      <Blackline/>
      <Grid1/>
      <Grid2/>
      <Bigbox/>
      <Reviewsec/>
    </main>
  );
}
