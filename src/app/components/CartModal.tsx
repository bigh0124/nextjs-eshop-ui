import Image from "next/image";

const CartModal = () => {
  //TEST
  let cartItems = true;

  return (
    <div className="w-max flex flex-col absolute top-12 right-0 p-4 rounded-md shadow-md z-20">
      {!cartItems ? (
        <div className="text-center">Cart is Empty!</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4 bg-green-200 self-start px-1">Shopping Cart</h2>
          <div className="flex items-center mb-4 gap-4">
            <div className="w-[72px] h-[96px] relative">
              <Image
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Product Image"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Product Name</h3>
                <span className="text-lg font-semibold">$40.5</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">available</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Qty 1</p>
                <span className="text-blue-500 cursor-pointer">Remove</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-semibold">$40.5</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
            <div className="flex gap-16 justify-between">
              <button className="py-2 px-3 border border-gray-300 rounded-lg text-black hover:bg-gray-100">
                View cart
              </button>
              <button className="py-2 px-3 bg-black text-white rounded-lg hover:bg-gray-900">Check out</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
