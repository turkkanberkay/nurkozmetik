'use client';
import Brands from "@/components/Brands";
import "../../styles/wordings.css";
import CategoryShowcase from "../../components/CategoryShowcase";

const UrunlerPage = () => (
  <div className="w-full bg-[#f0f4ff] text-[#333]  min-h-screen">

    <CategoryShowcase/>
<Brands showTitle={false} />
  </div>
);

export default UrunlerPage;
