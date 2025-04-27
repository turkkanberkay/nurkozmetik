import { brands } from "@/constants/data";
import Image from "next/image";


export default function Brands() {
  return (
    <section className="text-center py-16 bg-[#f8fcff]">
      <h5 className="text-2xl font-bold text-[#39404a] mb-12">Markalarımız</h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white p-6 rounded-xl shadow-sm transition-transform transform hover:scale-105 hover:shadow-md cursor-pointer group"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={200}
              height={60}
              className="grayscale group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
