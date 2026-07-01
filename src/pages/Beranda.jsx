import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import HeroIllustration from '../components/illustrations/HeroIllustration'
import AnimatedCounter from '../components/AnimatedCounter'
import KenapaTera from '../components/KenapaTera'
import KriteriaAnak from '../components/KriteriaAnak'
import AlurSeleksi from '../components/AlurSeleksi'
import CaraTerlibat from '../components/CaraTerlibat'
import Faq from '../components/Faq'
import PerkembanganAnakCard from '../components/PerkembanganAnakCard'
import Testimoni from '../components/Testimoni'
import { waLink } from '../lib/whatsapp'
import perkembanganAnakData from '../data/perkembanganAnak.json'
import { IconUsersGroup, IconMapPin, IconHeartHandshake, IconUserHeart } from '@tabler/icons-react'

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
          <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight mb-4">
            Bebaskan mereka untuk <span className="text-teal">bermimpi</span>
          </h1>
          <p className="text-ink/70 mb-8">
            Karena biaya adalah masalah orang dewasa. Donasikan untuk mendukung anak-anak yang
            sedang dibina, atau daftarkan anak di sekitarmu yang berhak mendapatkan pendidikan
            terbaik.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            <a
              href={waLink('Halo Tera Foundation, saya ingin berdonasi untuk Tera Foundation.')}
              target="_blank"
              rel="noreferrer"
              className="bg-teal hover:bg-teal-dark text-[#04342C] font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Donasi
            </a>
            <Link
              to="/lapor"
              className="border-2 border-[#5DCAA5] text-teal-dark font-semibold px-6 py-3 rounded-lg hover:bg-teal/10 transition-colors"
            >
              Daftarkan Anak
            </Link>
          </div>
        </div>
        <HeroIllustration />
      </section>

      <KenapaTera />

      <section className="bg-teal/5 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <IconUserHeart size={22} className="text-[#085041] mx-auto mb-1.5" stroke={1.75} />
            <AnimatedCounter target={50} suffix="+" />
            <p className="text-sm text-ink/70 mt-1">Anak dibina</p>
          </div>
          <div>
            <IconMapPin size={22} className="text-[#085041] mx-auto mb-1.5" stroke={1.75} />
            <AnimatedCounter target={5} />
            <p className="text-sm text-ink/70 mt-1">Kelurahan terjangkau</p>
          </div>
          <div>
            <IconHeartHandshake size={22} className="text-[#085041] mx-auto mb-1.5" stroke={1.75} />
            <AnimatedCounter target={6} />
            <p className="text-sm text-ink/70 mt-1">Program aktif berjalan</p>
          </div>
          <div>
            <IconUsersGroup size={22} className="text-[#085041] mx-auto mb-1.5" stroke={1.75} />
            <AnimatedCounter target={3} suffix="+" />
            <p className="text-sm text-ink/70 mt-1">Tahun mendampingi anak</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Perkembangan Anak</h2>
          <Link to="/anak" className="text-teal-dark font-semibold hover:text-teal">
            Lihat Semua &rarr;
          </Link>
        </div>
        <p className="text-ink/60 mb-10">
          Sebagian kisah anak yang tumbuh berkat dukungan donatur seperti kamu.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((anak) => (
            <PerkembanganAnakCard key={anak.id} anak={anak} />
          ))}
        </div>
        <p className="text-center text-ink/70 mt-10">
          Masih banyak anak lain yang menunggu kesempatan yang sama.{' '}
          <a
            href={waLink('Halo Tera Foundation, saya ingin berdonasi untuk Tera Foundation.')}
            target="_blank"
            rel="noreferrer"
            className="text-teal-dark font-semibold hover:text-teal"
          >
            Bantu lewat donasi &rarr;
          </a>
        </p>
      </section>

      <KriteriaAnak />

      <AlurSeleksi />

      <Testimoni />

      <Faq />

      <CaraTerlibat />
    </>
  )
}
