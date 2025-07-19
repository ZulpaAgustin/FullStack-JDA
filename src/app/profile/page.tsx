export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
    
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Profil Toko ZAProjects</h1>

    
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src="/images/logozul.png"
          alt="Pembuat"
          className="w-34 h-34"
        />
        <h2 className="text-xl font-semibold text-gray-800">Zulpa Agustin</h2>
        <p className="text-sm text-gray-500">Pembuat ZAProjects</p>
      </div>

      <section className="mb-6 text-gray-700 text-sm leading-relaxed">
        <h3 className="text-lg font-semibold text-pink-500 mb-2">Tentang Toko</h3>
        <p>
          ZAProjects adalah toko pakaian wanita. Kami menyediakan berbagai koleksi pakaian wanita dengan gaya kekinian dan bahan yang nyaman.
        </p>
      </section>

      {/* Kategori Produk */}
      <section className="mb-6 text-gray-700 text-sm">
        <h3 className="text-lg font-semibold text-pink-500 mb-2">Kategori Produk</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Kaos Oversize</li>
          <li>Hoodie dan Outerwear</li>
          <li>Setelan Santai</li>
          <li>Aksesoris</li>
        </ul>
      </section>

  
      <section className="text-gray-700 text-sm text-center mt-6">
        <p>Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui halaman kontak.</p>
      </section>
    </div>
  );
}
