// src/app/urunler/[category]/[product]/page.tsx

import { products } from "@/constants/products";
import VariantCard from "@/components/VariantCard";

interface PageProps {
  params: Promise<{ category: string; product: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, product } = await params;

  const selectedProduct = products.find(
    (item) => item.category === category && item.slug === product
  );

  if (!selectedProduct) {
    return <div className="text-center py-16 text-xl">Ürün bulunamadı.</div>;
  }

  const backgroundColor = selectedProduct.backgroundColor || "#f0f4ff";
  const backgroundImage = selectedProduct.backgroundImage;

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-12"
      style={{
        background: backgroundImage
          ? `${backgroundColor} url(${backgroundImage}) center/cover no-repeat`
          : backgroundColor,
        transition: "background 0.3s",
      }}
    >
      <div className="flex flex-col gap-8 w-full">
        {selectedProduct.variants && selectedProduct.variants.length > 0 ? (
          <div className="flex flex-col w-full items-center">
            {selectedProduct.variants.map((variant, idx) => (
              <VariantCard
                key={variant.name}
                name={variant.name}
                image={variant.image}
                description={variant.description}
                background={
                  variant.background || (idx % 2 === 0 ? "#f8faff" : "#f0f4ff")
                }
                className="w-full"
              />
            ))}
          </div>
        ) : (
          <VariantCard
            name={selectedProduct.name}
            image={selectedProduct.image}
            background={selectedProduct.backgroundColor || "#fddaff"}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
}
