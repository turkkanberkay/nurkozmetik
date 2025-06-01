import Image from "next/image";

interface VariantCardProps {
  name: string;
  image: string;
  description?: string;
  background?: string; // opsiyonel, arka plan rengi
  className?: string;
}

const VariantCard = ({
  name,
  image,
  description,
  background = "#f8faff",
  className = "",
}: VariantCardProps) => (
  <div
    className={`flex flex-row gap-6 items-center justify-center rounded-xl p-6 w-full ${className}`}
    style={{ background, width: "100%" }}
  >
    <Image
      src={image}
      alt={name}
      width={160}
      height={160}
      className="object-contain"
    />
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-lg text-[#22336c]">{name}</div>
      {description && (
        <div className="text-[#22336c] whitespace-pre-line mt-2">
          {description}
        </div>
      )}
    </div>
  </div>
);

export default VariantCard;
