'use client'
import Carousel from './components/Carousel'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Gagal memuat produk:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <Carousel />
      <h2 className="text-2xl font-bold mt-6 mb-4">Produk Kekinian</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-blue-600 font-bold">Rp {p.price.toLocaleString('id-ID')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
