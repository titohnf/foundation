import { Link } from 'react-router-dom'

export default function CaraTerlibat() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="bg-[#E1F5EE] rounded-xl text-center px-6 py-8">
        <h2 className="text-[17px] font-medium text-ink mb-2">
          Banyak cara untuk terlibat
        </h2>
        <p className="text-sm text-ink leading-[1.6] mb-6">
          Dukung operasional bimbel lewat donasi, jadi pengajar, atau jadi pembicara untuk
          anak-anak kami.
        </p>
        <Link
          to="/kontribusi"
          className="inline-block bg-blue hover:bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Lihat semua cara berkontribusi
        </Link>
      </div>
    </section>
  )
}
