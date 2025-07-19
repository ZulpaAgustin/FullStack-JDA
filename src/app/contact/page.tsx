export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">Hubungi Kami</h1>

      <p className="text-sm text-gray-600 mb-6 text-center">
        Jika kamu memiliki pertanyaan, atau ingin bekerja sama, silakan hubungi kami melalui formulir di bawah ini.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-pink-400 focus:border-pink-400"
            placeholder="Masukkan nama kamu"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-pink-400 focus:border-pink-400"
            placeholder="contoh@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-pink-400 focus:border-pink-400"
            placeholder="Tulis pesan kamu di sini..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}
