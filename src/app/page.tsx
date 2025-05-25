'use client'

import Image from 'next/image'  
import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter()

const getProductByCategory=(category:string)=>{
  try {
    // Convert category to lowercase and replace spaces with hyphens
    const formattedCategory = category.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${category}`);
  } catch (error) {
    console.error('Error navigating to category:', error);
  }
}
  // const getProductByCategory = (category: string) => {
  //   const formattedCategory = category.toLowerCase().replace(/\s+/g, '-');
  //   router.push(`/${formattedCategory}`);
  // }

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

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {[
            {
              name: "Premium Headphones",
              price: 199.99,
              image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070"
            },
            {
              name: "Smart Watch",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999"
            },
            {
              name: "Running Shoes",
              price: 89.99,
              image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070"
            },
            {
              name: "Coffee Maker",
              price: 79.99,
              image: "https://images.unsplash.com/photo-1570486916328-1b2ae2d7d398?q=80&w=2070"
            }
          ].map((product, index) => (
            <div key={index} className="group"
            
            
            >
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="mt-4">
                <button onClick={() => getProductByCategory(product.name)}> </button>
                <h3 className="text-lg font-semibold"   >{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-600">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Electronics',
                image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070',
                category:"Electronics"
              },
              {
                name: 'Clothing',
                image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071',
                category:"Clothing"
              },
              {
                name: 'Home & Living',
                image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074',
                category:"Home & Living"
              }
            ].map((category) => (
              <div key={category.name} className="relative h-64 rounded-lg overflow-hidden group"
              
              onClick={()=>getProductByCategory(category.category)}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition "
                  
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
