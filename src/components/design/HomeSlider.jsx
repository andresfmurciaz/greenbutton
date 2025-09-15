"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "../ui/carousel";

const items = [
  {
    id: 1,
      type: "image",
    image: "/b1.jpg",
    component: (
      <Container
        classNameParent="absolute top-0 left-0 size-full flex items-center justify-center"
        className="w-full flex flex-col gap-6 items-center text-center"
      >
        <div className="flex flex-col gap-6 items-center max-w-4xl px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest uppercase">
           You’re Beautiful — and You Deserve to Feel That Way. 
          </h1>
          <p className="text-white/90 text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed tracking-wide uppercase text-center">
           G’smile shapewear is designed to support your silhouette and your journey toward aesthetic wellness.
          </p>
          <Link
            href="/video-page"
            className="mt-6 bg-white text-black font-medium py-2 px-8 md:px-12 uppercase tracking-widest text-xs md:text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 border-2 border-white rounded-md"
          >
            BUY NOW
          </Link>
        </div>
      </Container>
    ),
  },
  {
    id: 2,
      type: "image",
    image: "/b2.jpg",
    component: (
      <Container
        classNameParent="absolute top-0 left-0 size-full flex items-center justify-center"
        className="w-full flex flex-col gap-6 items-center text-center"
      >
        <div className="flex flex-col gap-6 items-center max-w-4xl px-4">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest uppercase">
           You’re Beautiful — and You Deserve to Feel That Way. 
          </h1>
          <p className="text-black text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed tracking-wide uppercase text-center">
           G’smile shapewear is designed to support your silhouette and your journey toward aesthetic wellness.
          </p>
          <Link
            href="/video-page"
            className="mt-6 bg-white text-black font-medium py-2 px-8 md:px-12 uppercase tracking-widest text-xs md:text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 border-2 border-white rounded-md"
          >
            BUY NOW
          </Link>
        </div>
      </Container>
    ),
  },
 {
    id: 3,
      type: "image",
    image: "/b3.jpg",
    component: (
       <Container
        classNameParent="absolute top-0 left-0 size-full flex items-center justify-center"
        className="w-full flex flex-col gap-6 items-center text-center"
      >
        <div className="flex flex-col gap-6 items-center max-w-4xl px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest uppercase">
           You’re Beautiful — and You Deserve to Feel That Way. 
          </h1>
          <p className="text-white/90 text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed tracking-wide uppercase text-center">
           G’smile shapewear is designed to support your silhouette and your journey toward aesthetic wellness.
          </p>
          <Link
            href="/video-page"
            className="mt-6 bg-white text-black font-medium py-2 px-8 md:px-12 uppercase tracking-widest text-xs md:text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 border-2 border-white rounded-md"
          >
            BUY NOW
          </Link>
        </div>
      </Container>
    ),
  },
  
];

const HomeSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (current === count - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, current, count]);

  const goToSlide = (index) => {
    api?.scrollTo(index);
  };

  return (
    <div >
      <Carousel setApi={setApi}>
        <CarouselContent className="h-[400px] md:h-[650px] !w-full !-ml-0">
          {items.map((item) => (
            <CarouselItem key={item.id} className="relative !p-0">
              {item.type === "image" ? (
                <Image
                  src={item.image}
                  alt="Slider"
                  width={2000}
                  height={1000}
                  priority
                  className="w-full h-min object-cover bg-black"
                />
              ) : (
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ pointerEvents: "none" }}
                >
                  Tu navegador no soporta el elemento video.
                </video>
              )}
              {item.component}
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>

      {/* Controles esquina  */}
      <div className="absolute bottom-6 right-6 flex items-center space-x-4">
        {/* Botón anterior */}
        <button
          onClick={() => api?.scrollPrev()}
          className="w-8 h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

        
        <div className="flex items-center space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={() => api?.scrollNext()}
          className="w-8 h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18L15 12L9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;