"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  let stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-between gap-6 px-4 py-2 rounded-3xl bg-gray-200 w-36 text-md">
            <button
              className="font-semibold text-2xl disabled:cursor-not-allowed"
              disabled={quantity === 1 ? true : false}
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            <span>{quantity}</span>
            <button className="font-semibold text-2xl" onClick={() => handleQuantity("i")}>
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-yellow-600 font-semibold">{stock} items</span> left!!
            <br /> Don't miss it
          </div>
        </div>
        <button className="w-36 text-sm ring-1 ring-rd text-rd rounded-3xl px-4 py-3 hover:text-white hover:bg-rd">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
