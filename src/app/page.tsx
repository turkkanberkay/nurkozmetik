import Image from "next/image";
import Carousel from "../components/Carousel";
import Brands from "@/components/Brands";
import ClickableGrid from "@/components/ClickableGrid";

export default function Home() {
  return (
    <div >
      <main >
        <Carousel />
        <Brands/>
        <ClickableGrid/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
        
      </footer>
    </div>
  );
}
