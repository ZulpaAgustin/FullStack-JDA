import { notFound } from 'next/navigation'
import Link from 'next/link'

type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    notFound()
  }

  const product: Product = await res.json()

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
      <p className="text-lg text-pink-500 font-semibold mb-4">Rp {product.price.toLocaleString('id-ID')}</p>
      <p className="text-gray-600 mb-6">{product.description}</p>

      <Link
        href="/tidak-ada"
        className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded transition">
        Beli Sekarang
      </Link>
    </div>
  )
}
