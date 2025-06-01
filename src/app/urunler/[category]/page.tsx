import { products } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { category: string };
}

export default function CategoryPage({ params }: Props) {
  const filtered = products.filter(
    (item) => item.category === params.category
  );

  return (
    <div className="w-full min-h-screen bg-[#f0f4ff] py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`/urunler/${params.category}/${item.slug}`}
            className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={180}
              height={180}
              className="object-contain mb-4"
            />
            <div className="text-center text-lg font-medium text-[#22336c]">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
