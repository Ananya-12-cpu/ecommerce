'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/lib/CartCountSlice'

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl: string
  category?: string
}

export default function ProductCard({ id, name, price, imageUrl, category }: ProductCardProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      price,
      image: imageUrl,
      quantity: 1
    }))
  }

  return (
    <div className="group">
      <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
        <img         
          src={imageUrl}
          alt={name}
          className="object-cover group-hover:scale-105 transition"        
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="mt-4">
        {category && <p className="text-sm text-gray-500">{category}</p>}
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
} 