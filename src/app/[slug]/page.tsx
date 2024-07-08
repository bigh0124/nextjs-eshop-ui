import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SingleProduct = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-8">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore quod sunt iure pariatur eos officiis
          suscipit quae porro harum dolor blanditiis consectetur quis, molestiae laboriosam consequatur, laborum, error
          aliquid.
        </p>
        <div className="bg-gray-100 h-[2px]" />
        <div className="flex items-center gap-4">
          <h3 className="text-gray-500 text-xl line-through">$59</h3>
          <h3 className="text-2xl font-medium">$49</h3>
        </div>
        <div className="bg-gray-100 h-[2px]" />
        <CustomizeProduct />
        <Add />
        <div className="bg-gray-100 h-[2px]" />
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, magni. Fugit itaque odit placeat harum
            porro exercitationem alias cumque minus, hic modi facere quasi voluptate dicta officia aliquid soluta
            dolores?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, magni. Fugit itaque odit placeat harum
            porro exercitationem alias cumque minus, hic modi facere quasi voluptate dicta officia aliquid soluta
            dolores?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium">Title</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, magni. Fugit itaque odit placeat harum
            porro exercitationem alias cumque minus, hic modi facere quasi voluptate dicta officia aliquid soluta
            dolores?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
