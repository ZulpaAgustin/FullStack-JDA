'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: string
  image: string
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => alert('Gagal mengambil data produk'))
  }, [])

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Yakin ingin menghapus produk ini?')
    if (!confirm) return

    await fetch(`/api/products/${id}`, { method: 'DELETE' })
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Produk</h1>
        <Link
          href="/admin/create"
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded shadow"
        >
          + Tambah Produk
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-500">Belum ada produk.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={p.image}
                alt={p.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{p.name}</h2>
                <p className="text-pink-600 font-bold mb-2">Rp {p.price}</p>
                <div className="flex space-x-3">
                  <Link
                    href={`/admin/edit/${p.id}`}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
