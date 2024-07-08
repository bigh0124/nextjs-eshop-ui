import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="bg-pink-50 px-4 flex justify-between h-64">
        <div className="grow flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold text-gray-700 leading-10">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button type="button" className="bg-rd rounded-3xl text-white px-5 py-3 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-[40%] hidden md:flex">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      <h1 className="text-center text-xl font-semibold mt-12">Shoes For You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
