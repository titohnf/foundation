import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import HeroIllustration from '../components/illustrations/HeroIllustration'
import AnimatedCounter from '../components/AnimatedCounter'
import KenapaTera from '../components/KenapaTera'
import KriteriaAnak from '../components/KriteriaAnak'
import CaraTerlibat from '../components/CaraTerlibat'
import Faq from '../components/Faq'
import PerkembanganAnakCard from '../components/PerkembanganAnakCard'
import Testimoni from '../components/Testimoni'
import { waLink } from '../lib/whatsapp'
import perkembanganAnakData from '../data/perkembanganAnak.json'

export default function Beranda() {
  const preview = perkembanganAnakData.slice(0, 3)

  return (
    <>
      <Seo
        title="Beranda"
        description="Tera Foundation menjembatani donatur dan anak-anak yang membutuhkan pendidikan yang setara."
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-12 pb-16 grid md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-ink leading-tight mb-4">
            Bebaskan anak untuk berani{' '}
            <span className="brush-highlight">
              <svg viewBox="0 0 220 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2,42 C40,24 90,10 150,5 C185,2.5 208,5 216,11 C221,16 221,20 216,25 C208,31 185,33.5 150,31 C90,26 40,35 2,44 Z" />
              </svg>
              <span className="relative">bermimpi</span>
            </span>{' '}
            <span className="inline-block animate-pop-in text-4xl align-middle">✨</span>
          </h1>
          <p className="text-ink/70 mb-8">
            Melalui pendidikan yang menyeluruh dan berkelanjutan, kita bantu anak kurang mampu
            meraih masa depannya.
          </p>
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/kontribusi"
              className="inline-block bg-blue hover:bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Pelajari Cara Membantu
            </Link>
            <p className="mt-3 text-sm text-ink/60">
              Ingin mendaftarkan anak?{' '}
              <a href="#kriteria" className="text-blue underline">
                Cek kriteria &rarr;
              </a>
            </p>
          </div>
        </div>
        <HeroIllustration />
      </section>

      <KenapaTera />

      <KriteriaAnak />

      <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em] mb-2">
            Bukti Nyata
          </p>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              Perkembangan Anak Binaan
            </h2>
            <Link to="/anak" className="text-blue font-semibold hover:text-blue-dark">
              Lihat Semua &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {preview.map((anak) => (
              <PerkembanganAnakCard key={anak.id} anak={anak} />
            ))}
          </div>
          <div className="bg-[#E1F5EE] rounded-xl px-6 py-8 mt-10 flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-ink mb-2">
                Masih banyak anak lain yang menunggu kesempatan yang sama
              </h3>
              <p className="text-sm text-ink leading-[1.6]">
                Bantuan Anda bisa membuka jalan pendidikan bagi anak-anak binaan berikutnya.
              </p>
            </div>
            <a
              href={waLink('Halo Tera Foundation, saya ingin berdonasi untuk Tera Foundation.')}
              target="_blank"
              rel="noreferrer"
              className="inline-block shrink-0 bg-blue hover:bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Bantu lewat donasi
            </a>
          </div>
        </div>
      </section>

      <Testimoni />

      <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em] mb-2">
            Tera dalam Angka
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-8">
            Ini yang sudah terjadi, dan insyaallah akan terus bertambah
          </h2>
          <div className="bg-white border border-gray-300 rounded-xl px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="md:border-l md:border-gray-200 md:first:border-l-0">
                <AnimatedCounter target={50} suffix="+" />
                <p className="text-sm text-ink/70 mt-1">Anak dibina</p>
              </div>
              <div className="md:border-l md:border-gray-200">
                <AnimatedCounter target={5} />
                <p className="text-sm text-ink/70 mt-1">Kelurahan terjangkau</p>
              </div>
              <div className="md:border-l md:border-gray-200">
                <AnimatedCounter target={6} />
                <p className="text-sm text-ink/70 mt-1">Program aktif berjalan</p>
              </div>
              <div className="md:border-l md:border-gray-200">
                <AnimatedCounter target={3} suffix="+" />
                <p className="text-sm text-ink/70 mt-1">Tahun mendampingi anak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <CaraTerlibat />
    </>
  )
}
