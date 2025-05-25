'use client'

import Link from 'next/link'
import { ShoppingCart, User, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
           MY STORE
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/categories" className="text-gray-600 hover:text-black">
              Products
            </Link>
            <Link href="/deals" className="text-gray-600 hover:text-black">
              Deals
            </Link>
            {/* <Link href="/new-arrivals" className="text-gray-600 hover:text-black">
              New Arrivals
            </Link> */}
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center border rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 bg-transparent outline-none w-40"
              />
            </div>
            <Link href="/account" className="text-gray-600 hover:text-black">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-black relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 