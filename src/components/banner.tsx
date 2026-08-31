import Image from "next/image";

export function Banner({
  src,
  alt,
  ratio = "16/9",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
    </div>
  );
}
