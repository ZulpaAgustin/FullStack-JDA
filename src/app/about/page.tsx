export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Tentang Kami</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/bg2.jpeg"
          alt="Tentang Toko"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Pakaian Kekinian & Terpercaya</h2>
          <p className="text-gray-600 mb-4">
            Kami adalah toko pakaian online yang menyediakan berbagai pilihan pakaian berkualitas wanita. 
            Kami berkomitmen menghadirkan fashion yang stylish, nyaman, dan terjangkau.
          </p>
          <p className="text-gray-600">
            Dengan sistem pemesanan yang mudah dan pengiriman ke seluruh Indonesia, kami berharap bisa menjadi
            pilihan utama kamu dalam berbelanja pakaian sehari-hari hingga acara spesial.
          </p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-pink-600 mb-2">Bahan Berkualitas</h3>
          <p className="text-sm text-gray-600">Kami memilih bahan terbaik agar nyaman saat digunakan.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-pink-600 mb-2">Pengiriman Cepat</h3>
          <p className="text-sm text-gray-600">Pesanan kamu akan dikirim secepat mungkin.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-pink-600 mb-2">Pelayanan Ramah</h3>
          <p className="text-sm text-gray-600">Kami siap membantu kamu melalui chat setiap hari.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">Terima kasih sudah mempercayai kami. ❤️</p>
      </div>
    </div>
  );
}
