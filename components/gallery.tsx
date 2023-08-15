import Image from "next/image";

export default function Gallery({ images }: { images: { src: string }[] }) {
  return (
    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
      {images[0] && (
        <Image
          className="h-full w-full object-contain"
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          src={images[0].src as string}
          alt=""
        />
      )}
    </div>
  );
}
