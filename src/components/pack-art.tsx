import Image from "next/image";
import { cn } from "@/lib/utils";

export const PackArt = ({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[#dce4ef] bg-[linear-gradient(160deg,#ffffff_0%,#f6f9ff_58%,#fff7ef_100%)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,224,232,0.30),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(190,218,255,0.30),transparent_42%)]" />
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("z-10 object-contain p-2 drop-shadow-[0_18px_20px_rgba(22,32,51,0.16)]", imageClassName)}
        priority={priority}
        sizes={sizes}
      />
      <span className="absolute bottom-2 right-2 z-20 rounded-full border border-[#d6deec] bg-white/92 px-2 py-0.5 text-[10px] font-semibold text-[#2f4268]">
        Ages 6+
      </span>
    </div>
  );
};
