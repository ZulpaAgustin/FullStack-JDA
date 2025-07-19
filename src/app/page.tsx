import Carousel from './components/Carousel';
import Link from 'next/link';

const products = [
  { id: 1, name: 'T-Shirt Smile Love', price: 'Rp 120.000', image: '/images/tshirt.jpeg' },
  { id: 2, name: 'Baju Lengan Flowers', price: 'Rp 80.000', image: '/images/bj1.jpg' },
  { id: 3, name: 'Kemeja Casual', price: 'Rp 125.000', image: '/images/kemeja.jpg' },
  { id: 4, name: 'Kemeja Panjang Jeans', price: 'Rp 200.000', image: '/images/kemejaJeans.jpg' },
];

export default function Home() {
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
                <p className="text-blue-600 font-bold">{p.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

