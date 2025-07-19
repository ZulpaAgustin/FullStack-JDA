import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export default async function ProductList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <p>Gagal memuat produk.</p>;
  }

  const products: Product[] = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-pink-500 font-semibold mb-2">Rp {product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <Link
            href={`/products/${product.id}`}
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded">
            Lihat Detail
          </Link>
        </div>
      ))}
    </div>
  );
}
