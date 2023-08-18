"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gallery({ images }: { images: { src: string }[] }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            src={images[imageIndex].src as string}
            alt=""
          />
        )}

        <div className="absolute bottom-0 w-full flex justify-center">
          {images.length > 1 ? (
            <ul className="flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
              {images.map((image, index) => {
                const isActive = index === imageIndex;
                const classname =
                  "cursor-pointer backdrop-blur border rounded-lg hover:border-blue-500 bg-slate-100 bg-opacity-30";

                return (
                  <li key={index} className="h-20 w-20">
                    <Image
                      src={image.src}
                      alt=""
                      className={
                        isActive
                          ? `${classname} border-2 border-blue-500`
                          : `${classname} border-slate-200`
                      }
                      width={80}
                      height={80}
                      onClick={() => setImageIndex(index)}
                    />
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}
