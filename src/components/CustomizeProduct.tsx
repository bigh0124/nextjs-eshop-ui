const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Color</h4>
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-full ring-1 ring-gray-300 bg-red-500 cursor-pointer">
          <div className="w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"></div>
        </div>
        <div className="relative w-8 h-8 rounded-full ring-1 ring-gray-300 bg-green-500 cursor-pointer"></div>
        <div className="relative w-8 h-8 rounded-full ring-1 ring-gray-300 bg-white cursor-not-allowed">
          <div className="w-10 h-[2px] rotate-45 bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"></div>
        </div>
      </div>
      <h4 className="font-medium">Choose a Size</h4>
      <div className="flex items-center gap-3">
        <div className="ring-1 ring-gray-500 text-gray-500 rounded-md py-1 px-4 text-sm cursor-not-allowed">Small</div>
        <div className="ring-1 ring-white text-white rounded-md py-1 px-4 text-sm cursor-pointer bg-rd">Medium</div>
        <div className="ring-1 ring-rd text-rd rounded-md py-1 px-4 text-sm cursor-pointer">Large</div>
      </div>
    </div>
  );
};

export default CustomizeProduct;
