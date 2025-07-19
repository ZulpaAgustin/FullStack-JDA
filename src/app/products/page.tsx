'use client';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    await fetch('/api/products', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editId ? { ...form, id: editId } : form),
    });
    setForm({ name: '', price: '', image: '' });
    setEditId(null);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  const handleEdit = (product: any) => {
    setForm({
      name: product.name,
      price: product.price,
      image: product.image || '',
    });
    setEditId(product.id);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-500">Daftar Produk Toko</h2>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Nama Produk"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="px-4 py-2 border rounded w-full sm:w-auto"
          required
        />
        <input
          type="number"
          placeholder="Harga"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="px-4 py-2 border rounded w-full sm:w-auto"
          required
        />
        <input
          type="text"
          placeholder="URL Gambar"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="px-4 py-2 border rounded w-full sm:w-auto"
        />
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Tambah'} Produk
        </button>
      </form>

      <ul className="space-y-3">
        {products.map((product: any) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              {product.image && (
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
              )}
              <div>
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm text-gray-500">Rp {Number(product.price).toLocaleString('id-ID')}</p>
              </div>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(product)} className="text-blue-600 hover:underline cursor-pointer">
                Edit
              </button>
              <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:underline cursor-pointer">
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
