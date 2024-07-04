import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex justify-between gap-x-8 gap-y-16 flex-wrap mt-4">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="/product.jpg"
            fill
            objectPosition="center"
            alt=""
            className="absolute object-cover z-20 hover:opacity-0 transition-all duration-500 ease-in"
          />
          <Image src="/product.png" fill objectPosition="center" alt="" className="absolute object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Product name</h3>
          <span className="font-semibold">$25</span>
        </div>
        <p className="text-sm text-gray-500">description of product</p>
        <button
          type="button"
          className="rounded-2xl ring-1 ring-lama text-lama self-start py-2 px-4 text-xs hover:bg-rd hover:text-white"
        >
          Add to cart
        </button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="/product.jpg"
            fill
            objectPosition="center"
            alt=""
            className="absolute object-cover z-20 hover:opacity-0 transition-all duration-500 ease-in"
          />
          <Image src="/product.png" fill objectPosition="center" alt="" className="absolute object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Product name</h3>
          <span className="font-semibold">$25</span>
        </div>
        <p className="text-sm text-gray-500">description of product</p>
        <button
          type="button"
          className="rounded-2xl ring-1 ring-lama text-lama self-start py-2 px-4 text-xs hover:bg-rd hover:text-white"
        >
          Add to cart
        </button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="/product.jpg"
            fill
            objectPosition="center"
            alt=""
            className="absolute object-cover z-20 hover:opacity-0 transition-all duration-500 ease-in"
          />
          <Image src="/product.png" fill objectPosition="center" alt="" className="absolute object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Product name</h3>
          <span className="font-semibold">$25</span>
        </div>
        <p className="text-sm text-gray-500">description of product</p>
        <button
          type="button"
          className="rounded-2xl ring-1 ring-lama text-lama self-start py-2 px-4 text-xs hover:bg-rd hover:text-white"
        >
          Add to cart
        </button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="/product.jpg"
            fill
            objectPosition="center"
            alt=""
            className="absolute object-cover z-20 hover:opacity-0 transition-all duration-500 ease-in"
          />
          <Image src="/product.png" fill objectPosition="center" alt="" className="absolute object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Product name</h3>
          <span className="font-semibold">$25</span>
        </div>
        <p className="text-sm text-gray-500">description of product</p>
        <button
          type="button"
          className="rounded-2xl ring-1 ring-lama text-lama self-start py-2 px-4 text-xs hover:bg-rd hover:text-white"
        >
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
