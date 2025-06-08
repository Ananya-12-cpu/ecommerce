"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import productDataArray from "@/ProductArray.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../lib/CartCountSlice";
import { RootState } from "../lib/Store";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.items);
  const totalQuantity = useSelector((state: RootState) => state.totalQuantity);
  const totalAmount = useSelector((state: RootState) => state.totalAmount);

  const [quantity, setQuantity] = React.useState(1);

  type CategoryKey = keyof typeof productDataArray;
  const categorySlug = searchParams.get("category") as CategoryKey | null;
  const productSlug = searchParams.get("productId");

  const categoryProducts = categorySlug
    ? productDataArray[categorySlug]
    : undefined;
  const product =
    categoryProducts?.find((item: any) => item.id === productSlug) || null;
  const isDisabledButton = cartItems.some(
    (item: any) => item.id === productSlug
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const addToCartHandler = () => {
    const formattedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity: quantity,
    };

    // Add items based on quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(formattedProduct));
    }

    console.log("Added to cart:", formattedProduct);
    console.log("Cart state:", {
      items: cartItems,
      totalQuantity,
      totalAmount,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
        {/* Left: Images */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={`${product.imageUrl}`}
            alt={product.name}
            className="w-64 h-100 object-contain rounded-lg border"
          />
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`${product.imageUrl}`}
                alt={`Thumbnail ${i}`}
                className="w-12 h-12 object-cover rounded border cursor-pointer hover:ring-2 ring-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Center: Product Info */}
        <div className="flex-1 flex flex-col gap-4 text-gray-900">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">3.9★</span>
            <span className="text-gray-600">(4,583 ratings)</span>
            <span className="text-blue-600 underline cursor-pointer">
              Visit the Store
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-800">
              ₹{product.price}
            </span>
            <span className="text-gray-400 line-through">₹4,999</span>
            <span className="text-green-600 font-semibold">-64%</span>
          </div>
          <div className="text-gray-600">Inclusive of all taxes</div>
          <div className="bg-gray-100 p-3 rounded-lg flex flex-col gap-2">
            <div className="flex gap-4">
              <span className="font-semibold">Bank Offer</span>
              <span>Upto ₹2,000.00 discount on select Credit Cards</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold">Cashback</span>
              <span>Upto ₹35.00 cashback as Amazon Pay Balance</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold">No Cost EMI</span>
              <span>Upto ₹1,013 EMI interest savings</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Colour:</span>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full border-2 border-yellow-400 bg-yellow-200 cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full border bg-gray-400 cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full border bg-purple-200 cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full border bg-green-200 cursor-pointer"></span>
            </div>
          </div>
        </div>

        {/* Right: Purchase Section */}
        <div className="md:w-1/4 bg-gray-100 p-4 rounded-lg flex flex-col gap-4">
          <div>
            <span className="text-2xl font-bold text-gray-800">
              ₹{product.price}
            </span>
            <span className="block text-green-600">
              FREE delivery Tuesday, 27 May.
            </span>
            <span className="block text-gray-600">
              Or fastest delivery Tomorrow, 26 May.
            </span>
          </div>
          <div className="text-green-700 font-semibold">In stock</div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800">
              Quantity:{" "}
              {isDisabledButton && (
                <span className="text-gray-800">{quantity}</span>
              )}
            </label>

            {!isDisabledButton && (
              <select
                className="border rounded px-2 py-1 text-gray-800"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5,6,7,8,9,10].map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button
            className={`${
              isDisabledButton
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
            } text-white font-bold py-2 rounded`}
            disabled={isDisabledButton}
            onClick={addToCartHandler}
          >
            {isDisabledButton ? "Added to Cart" : "Add to Cart"}
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded">
            Buy Now
          </button>
          <button className="border border-gray-300 py-2 rounded text-gray-700">
            Add to Wish List
          </button>
        </div>
      </div>
    </div>
  );
}
