import { notFound } from 'next/navigation';
import Link from 'next/link';

const products = [
  {
    id: '1',
    title: 'T-Shirt Smile Love',
    price: 'Rp120.000',
    description: 'Kaos dengan bahan katun, adem dan nyaman dipakai sehari-hari.',
    image: '/images/tshirt.jpeg',
  },
  {
    id: '2',
    title: 'Baju Lengan Flowers',
    price: 'Rp80.000',
    description: 'Baju bunga cocok untuk musim semi. Tersedia warna hitam, putih, dan hijau.',
    image: '/images/bj1.jpg',
  },
  {
    id: '3',
    title: 'Kemeja Casual',
    price: 'Rp125.000',
    description: 'Kemeja dengan bahan kualitas tinggi, adem dan nyaman dipakai sehari-hari.',
    image: '/images/kemeja.jpg',
  },
  {
    id: '4',
    title: 'Kemeja Panjang Jeans',
    price: 'Rp200.000',
    description: 'Kemeja dengan bahan jeans. Bikin outfit bajumu menjadi lebih kekinian.',
    image: '/images/kemejaJeans.jpg',
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
      <p className="text-lg text-pink-500 font-semibold mb-4">{product.price}</p>
      <p className="text-gray-600 mb-6">{product.description}</p>

     
      <Link
        href="/tidak-ada"
        className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded transition">
        Beli Sekarang
      </Link>
      
    </div>
  );
}
