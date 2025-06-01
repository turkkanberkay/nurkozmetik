import { products } from "@/constants/products";
import VariantCard from "@/components/VariantCard";
import Image from "next/image";

interface Props {
  params: { category: string; product: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find(
    (item) =>
      item.category === params.category && item.slug === params.product
  );

  if (!product) {
    return <div className="text-center py-16 text-xl">Ürün bulunamadı.</div>;
  }

  // Ürün objesinde backgroundColor ve backgroundImage varsa kullan
  const backgroundColor = product.backgroundColor || "#f0f4ff";
  const backgroundImage = product.backgroundImage; // opsiyonel

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
        {/* Varyantlar varsa alt alta göster */}
        {product.variants && product.variants.length > 0 ? (
          <div className="flex flex-col w-full items-center">
            {product.variants.map((variant, idx) => (
              <VariantCard
                key={variant.name}
                name={variant.name}
                image={variant.image}
                description={variant.description}
                background={variant.background || (idx % 2 === 0 ? "#f8faff" : "#f0f4ff")}
                className="w-full"
                // ...diğer props...
              />
            ))}
          </div>
        ) : (
          <VariantCard
            name={product.name}
            image={product.image}
            background={product.backgroundColor || "#fddaff"}
            className="w-full"
            // ...diğer props...
          />
        )}
      </div>
    </div>
  );
}

