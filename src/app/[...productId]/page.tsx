'use client'

import React from "react";

export default function ProductPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
        {/* Left: Images */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src="/product-main.jpg"
            alt="Noise Buds N1 Pro"
            className="w-64 h-64 object-contain rounded-lg border"
          />
          <div className="flex gap-2 mt-4">
            {/* Thumbnails */}
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/product-thumb${i}.jpg`}
                alt={`Thumbnail ${i}`}
                className="w-12 h-12 object-cover rounded border cursor-pointer hover:ring-2 ring-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Center: Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">
            Noise Buds N1 Pro in-Ear Truly Wireless Earbuds with Metallic Finish, ANC(Upto 30dB), 60H of Playtime, Dual Pairing, Instacharge(10 min=200 min), BT v5.3(Chrome Beige)
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">3.9★</span>
            <span className="text-gray-600">(4,583 ratings)</span>
            <span className="text-blue-600 underline cursor-pointer">Visit the Noise Store</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-800">₹1,799</span>
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
              {/* Color options */}
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
            <span className="text-2xl font-bold text-gray-800">₹1,799</span>
            <span className="block text-green-600">FREE delivery Tuesday, 27 May.</span>
            <span className="block text-gray-600">Or fastest delivery Tomorrow, 26 May.</span>
          </div>
          <div className="text-green-700 font-semibold">In stock</div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Quantity:</label>
            <select className="border rounded px-2 py-1">
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q}>{q}</option>
              ))}
            </select>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded">Add to Cart</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded">Buy Now</button>
          <button className="border border-gray-300 py-2 rounded text-gray-700">Add to Wish List</button>
        </div>
      </div>
    </div>
  );
}