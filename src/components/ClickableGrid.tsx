import { items } from "@/constants/data";
import Image from "next/image";


export default function ClickableGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap">
        {/* First row: 3 items */}
        {items.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group w-full md:w-1/3 p-2 relative overflow-hidden"
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 group-hover:bottom-1/2 group-hover:left-1/2 transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 text-white text-lg font-bold transition-all duration-500">
                {item.title}
              </div>
            </div>
          </a>
        ))}

        {/* Second row: 2 items */}
        {items.slice(3, 5).map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group w-full md:w-1/2 p-2 relative overflow-hidden"
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative">
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={350}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 group-hover:bottom-1/2 group-hover:left-1/2 transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 text-white text-lg font-bold transition-all duration-500">
                {item.title}
              </div>
            </div>
          </a>
        ))}

        {/* Third row: 1 item */}
        <a
          href={items[5].link}
          className="group w-full p-2 relative overflow-hidden"
        >
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative">
            <Image
              src={items[5].src}
              alt={items[5].title}
              width={600}
              height={400}
              className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 group-hover:bottom-1/2 group-hover:left-1/2 transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 text-white text-lg font-bold transition-all duration-500">
              {items[5].title}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
