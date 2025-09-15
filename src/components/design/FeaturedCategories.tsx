import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function FeaturedCategories() {
 return (
  <>
    <div className="py-20 grid grid-cols-1 lg:grid-cols-2">
      {/* Shapewear Bodysuit */}
      <div className="relative bg-gray-100 overflow-hidden pl-6 pr-6 h-[550px] xs:pr-0 xs-sm:h-[610px] sm:h-[630px] lg:pl-8 pt-20">
        <div className="h-full z-4 relative flex flex-col justify-center lg:justify-start xl:justify-center gap-5 md:ml-auto md:max-w-[790px]">
          <h3 className="text-4xl xs:text-5xl tracking-tight font-bold text-gray-900 leading-tight max-w-52 sm:max-w-xs">
            Shapewear Bodysuit
          </h3>
          <p className="text-gray-900">Discover the perfect fit .</p>
          <Link href={"/store/products?category=173747500&offset=0"}>
            <span className="text-sm font-semibold">See more</span>
          </Link>
        </div>
        <Image
          src="/b5.jpg"
          alt="Shapewear Bodysuit"
          priority
          width={1000}
          height={1000}
          className="z-1 absolute -right-28 -bottom-12 w-full sm:right-0 xs:w-[90%] sm:w-[60%] object-cover h-full opacity-50 sm:opacity-100"
        />
      </div>
      {/* Shapewear Shorts */}
      <div className="relative bg-emerald-100 overflow-hidden pl-6 pr-6 h-[550px] xs:pr-0 xs-sm:h-[610px] sm:h-[630px] lg:pl-8 pt-20">
        <div className="relative z-4 flex flex-col gap-5 md:ml-auto md:max-w-[790px] h-full justify-center lg:justify-start xl:justify-center">
          <h3 className="text-4xl xs:text-5xl tracking-tight font-bold text-gray-900 leading-tight max-w-52 sm:max-w-xs">
            Shapewear 
          </h3>
          <p className="text-gray-900 max-w-44 sm:max-w-64 md:max-w-none">
            Comfortable and seamless
            
          </p>
          <Link href={"/store/products?category=173747500&offset=0"}>
            <span className="text-sm font-semibold">See more</span>
          </Link>
        </div>
        <Image
          src="/b7.jpg"
          alt="Shapewear Shorts"
          priority
          width={1000}
          height={1000}
          className="z-1 absolute -right-20 -bottom-12 w-[330px] sm:-right-3 md:right-10 lg:-right-30 xl:right-0 2xl:right-20 xs-sm:w-[400px] sm:w-[420px] object-cover h-full opacity-50 sm:opacity-100"
        />
      </div>
      {/* Shaping Accessories Men */}
      <div className="relative bg-pink-100 overflow-hidden pl-6 pr-6 h-[550px] xs:pr-0 xs-sm:h-[610px] sm:h-[630px] lg:pl-8 pt-20">
        <div className="relative z-4 flex flex-col gap-5 md:ml-auto md:max-w-[790px] h-full justify-center lg:justify-start xl:justify-center">
          <h3 className="text-4xl xs:text-5xl tracking-tight font-bold text-gray-900 leading-tight max-w-52 sm:max-w-xs">
            Shaping Accessories 
          </h3>
          <p className="text-gray-900">Find the perfect accessories.</p>
          <Link href={"/store/products?category=173747500&offset=0"}>
            <span className="text-sm font-semibold">See more</span>
          </Link>
        </div>
        <Image
          src="/b8.jpg"
          alt="Shaping Accessories Men"
          priority
          width={1000}
          height={1000}
          className="z-1 absolute -right-20 -bottom-2 w-full sm:right-0 xs:w-[80%] sm:w-[60%] md:w-[52%] object-cover  h-full opacity-50 sm:opacity-100"
        />
      </div>
      {/* Shaping Accessories Women */}
      <div className="relative bg-gray-100 overflow-hidden pl-6 pr-6 h-[550px] xs:pr-0 xs-sm:h-[610px] sm:h-[630px] lg:pl-8 pt-20">
        <div className="relative z-4 flex flex-col gap-5 md:ml-auto md:max-w-[790px] h-full justify-center lg:justify-start xl:justify-center">
          <h3 className="text-4xl xs:text-5xl tracking-tight font-bold text-gray-900 leading-tight max-w-52 sm:max-w-xs">
            Shaping Accessories 
          </h3>
          <p className="text-gray-900">Elevate your style.</p>
          <Link href={"/store/products?category=173747500&offset=0"}>
            <span className="text-sm font-semibold">See more</span>
          </Link>
        </div>
        <Image
          src="/b6.jpg"
          alt="Shaping Accessories Women"
          priority
          width={1000}
          height={1000}
          className="z-1 absolute -right-14 -bottom-2 w-full sm:right-0 xs:w-[70%] sm:w-[55%] md:w-[48%] object-cover h-full opacity-50 sm:opacity-100"
        />
      </div>
    </div>
  </>
);

};


