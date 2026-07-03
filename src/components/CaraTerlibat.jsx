import { Link } from 'react-router-dom'

export default function CaraTerlibat() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
      <div
        className="relative overflow-visible rounded-xl bg-teal-dark"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12">
          <div className="text-center md:text-left flex flex-col justify-center gap-3 py-8 md:py-12 md:max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Banyak cara untuk terlibat
            </h2>
            <p className="text-sm text-white/90 leading-[1.6]">
              Dukung operasional bimbel lewat donasi, jadi pengajar, atau jadi pembicara
              <br className="hidden md:block" /> untuk anak-anak kami.
            </p>
            <Link
              to="/kontribusi"
              className="inline-block bg-white hover:bg-gray-100 text-teal-dark font-semibold px-6 py-3 rounded-lg transition-colors self-center md:self-start mt-3"
            >
              Lihat semua cara berkontribusi
            </Link>
          </div>
          <img
            src="/images/cta-person.png"
            alt=""
            className="w-40 md:w-56 shrink-0 object-contain object-bottom md:absolute md:right-12 md:bottom-0"
          />
        </div>
      </div>
    </section>
  )
}
