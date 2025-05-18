'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

// Mock data - In a real app, this would come from an API
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999",
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
    category: 'Clothing'
  },
  {
    id: '4',
    name: 'Coffee Maker',
    price: 79.99,
    image: "https://images.unsplash.com/photo-1570486916328-1b2ae2d7d398?q=80&w=2070",
    category: 'Home & Living'
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' ? true : product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">All Products</h1>
        <div className="flex space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="all">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Living">Home & Living</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
} 