import React from "react";
import { type ImageType } from "@/types/image";
import Image from "next/image";

interface ImageCardProps {
  image: ImageType;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, className }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border-2 border-black bg-neutral-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.75)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.85)] ${className}`}
    >
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-8 transform bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-lg font-semibold">{image.title}</h3>
        {image.description && (
          <p className="mt-1 text-sm text-gray-200">{image.description}</p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;