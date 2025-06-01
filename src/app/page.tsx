'use client'

import { Heart } from 'lucide-react';
import Image from 'next/image'  
import { useRouter } from 'next/navigation';
import productData from '../ProductArray.json';

export default function Home() { 
  const router=useRouter()

  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">Discover amazing products at great prices</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      {Object.entries(productData).map(([category, products]) => (
        <section key={category} className="py-16 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-8">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100"
                onClick={()=>router.push(`product?category=${category}&productId=${product.id}`)}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition"
                  />
                  {/* <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button> */}
                </div>
                {/* <div className="mt-4">
                  <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                  <p className="text-gray-600 mt-1">$ {product.price.toFixed(2)}</p>
                  <button className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
