'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductArray from '@/ProductArray.json'

function Page() {
  const params = usePathname();
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Extract category from pathname (remove leading slash)
    const categoryFromPath = params.slice(1);
    setCategory(categoryFromPath);

    // Get products for the category
    const categoryProducts = ProductArray[categoryFromPath as keyof typeof ProductArray] || [];
    setProducts(categoryProducts);
  }, [params]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}

export default Page