'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        <button className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
} 