"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ImageType } from "@/types/image";

interface ImageCarouselProps {
  images: ImageType[];
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = (index: number) => {
    setCurrent((index + images.length) % images.length);
  };

  const handlePrev = () => goTo(current - 1);
  const handleNext = () => goTo(current + 1);

  // Auto-slide, paused while the user is interacting
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, images.length, autoPlayInterval]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0]!.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0]!.clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    // resume autoplay a moment after the user lets go
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleManualNav = (action: () => void) => {
    action();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="relative w-full">
      <div
        className="relative h-64 w-full overflow-hidden rounded-xl sm:h-80"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                {image.description && (
                  <p className="mt-1 text-sm text-gray-200">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleManualNav(() => goTo(index))}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-6 bg-red-600"
                : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;