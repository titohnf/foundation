import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconArrowLeft,
  IconBrandWhatsapp,
  IconCircleCheck,
  IconQuote,
  IconChevronLeft,
  IconChevronRight,
  IconHeartHandshake,
  IconMoonStars,
  IconMountain,
  IconRocket,
  IconFlag,
  IconPlant,
  IconBuildingMosque,
  IconSpeakerphone,
  IconBuildingStore,
  IconTent,
} from '@tabler/icons-react'
import Reveal from '../Reveal'
import PhotoColumn from './PhotoColumn'
import { waLink } from '../../lib/whatsapp'

// Kelas ditulis utuh agar terbaca oleh Tailwind.
const warna = {
  teal: { soft: 'bg-teal/10', icon: 'bg-teal text-white', ring: 'hover:border-teal' },
  blue: { soft: 'bg-blue/10', icon: 'bg-blue text-white', ring: 'hover:border-blue' },
  amber: { soft: 'bg-amber-100', icon: 'bg-amber-400 text-white', ring: 'hover:border-amber-400' },
  rose: { soft: 'bg-rose-100', icon: 'bg-rose-400 text-white', ring: 'hover:border-rose-400' },
  violet: { soft: 'bg-violet-100', icon: 'bg-violet-500 text-white', ring: 'hover:border-violet-500' },
  emerald: { soft: 'bg-emerald-100', icon: 'bg-emerald-500 text-white', ring: 'hover:border-emerald-500' },
}

const nilai = [
  {
    icon: IconMoonStars,
    color: 'emerald',
    title: 'Takwa',
    desc: 'Menyadari bahwa setiap tindakan memiliki tanggung jawab kepada Tuhan, diri sendiri, dan orang lain.',
    perilaku: ['Melaksanakan sholat', 'Bersyukur', 'Jujur'],
  },
  {
    icon: IconHeartHandshake,
    color: 'rose',
    title: 'Empati',
    desc: 'Mampu memahami perasaan orang lain dan bertindak untuk membantu.',
    perilaku: ['Tidak memotong pembicaraan', 'Membantu tanpa diminta', 'Menghargai sesama'],
  },
  {
    icon: IconMountain,
    color: 'blue',
    title: 'Resiliensi',
    desc: 'Mampu bangkit ketika menghadapi kesulitan.',
    perilaku: ['Mengelola emosi', 'Tidak mudah menyerah', 'Berani meminta pertolongan'],
  },
  {
    icon: IconRocket,
    color: 'amber',
    title: 'Ambisi',
    desc: 'Memiliki cita-cita, keberanian berusaha, dan kemauan terus belajar.',
    perilaku: ['Memiliki cita-cita', 'Berani mencoba', 'Mampu memecahkan masalah'],
  },
]

const kegiatan = [
  {
    icon: IconFlag,
    color: 'blue',
    tag: 'Disiplin',
    title: 'Baris-berbaris',
    desc: 'Melatih kekompakan dan disiplin lewat aba-aba dan gerak bersama.',
  },
  {
    icon: IconPlant,
    color: 'emerald',
    tag: 'Peduli lingkungan',
    title: 'Berkebun',
    desc: 'Menanam dan merawat tanaman sambil belajar peduli pada lingkungan.',
  },
  {
    icon: IconBuildingMosque,
    color: 'violet',
    tag: 'Spiritual',
    title: 'Praktik Wudhu & Sholat',
    desc: 'Mempraktikkan tata cara ibadah bersama pendamping dengan sabar.',
  },
  {
    icon: IconSpeakerphone,
    color: 'rose',
    tag: 'Percaya diri',
    title: 'Content Creator & Pidato',
    desc: 'Berlatih bicara di depan teman, membuat konten, dan beradu pendapat dengan santun.',
  },
  {
    icon: IconBuildingStore,
    color: 'amber',
    tag: 'Kemandirian',
    title: 'Market Day',
    desc: 'Membuka lapak kecil, belajar menghitung, dan merasakan serunya berjualan sendiri.',
  },
  {
    icon: IconTent,
    color: 'teal',
    tag: 'Kepemimpinan',
    title: 'Berkemah',
    desc: 'Bermalam bersama, berbagi tugas, dan belajar memimpin kelompok kecil.',
  },
]

// Placeholder sementara — ganti tiap entri jadi { src: '/images/sekolah-karakter/xxx.jpg' }
// begitu foto aslinya tersedia.
const fotoKiri = [
  { label: 'Baris-berbaris', tone: 'bg-blue' },
  { label: 'Berkebun', tone: 'bg-emerald-500' },
  { label: 'Wudhu & Sholat', tone: 'bg-violet-500' },
]

const fotoKanan = [
  { label: 'Pidato', tone: 'bg-rose-400' },
  { label: 'Market Day', tone: 'bg-amber-400' },
  { label: 'Berkemah', tone: 'bg-teal' },
]

const tilt = ['md:-rotate-2', 'md:rotate-1', 'md:-rotate-1', 'md:rotate-2', 'md:-rotate-1', 'md:rotate-1']

// Testimoni masih dummy — ganti dengan kutipan asli begitu tersedia.
const angkatan = [
  {
    id: 'angkatan-1',
    label: 'Angkatan 1',
    periode: 'Mei — Agustus 2025',
    capaian: {
      sorotan: {
        angka: '69,1%',
        teks: 'indikator karakter anak berada pada kategori Sering Muncul atau Konsisten',
        tambahan: '37,5% di antaranya sudah Konsisten sepenuhnya',
      },
      tertinggi: [
        { angka: '84,4%', label: 'Ketaqwaan' },
        { angka: '78,1%', label: 'Mandiri' },
        { angka: '78,1%', label: 'Sopan Santun' },
      ],
    },
    narasi:
      'Pada angkatan pertama, 35 anak mengikuti program ini, dan 13 anak menyelesaikan seluruh rangkaian 12 sesi. Pengalaman ini menjadi bahan evaluasi penting bagi kami untuk merancang pendekatan yang lebih fleksibel dan sesuai dengan kondisi masing-masing anak.',
    timeline: [
      { tanggal: '4 Mei', sesi: 'Baris-berbaris' },
      { tanggal: '11 Mei', sesi: 'Berkebun' },
      { tanggal: '18 Mei', sesi: 'Tata Krama' },
      { tanggal: '25 Mei', sesi: 'Wudhu & Sholat' },
      { tanggal: '1 Jun', sesi: 'Tahsin' },
      { tanggal: '22 Jun', sesi: 'Kebersihan Diri' },
      { tanggal: '29 Jun', sesi: 'Content Creator' },
      { tanggal: '6 Jul', sesi: 'Pekerjaan Rumah' },
      { tanggal: '13 Jul', sesi: 'Pidato & Debat' },
      { tanggal: '20 Jul', sesi: 'DIY' },
      { tanggal: '27 Jul', sesi: 'Market Day' },
      { tanggal: '3 Agu', sesi: 'Berkemah' },
    ],
    testimoni: [
      {
        kutipan:
          'Sekarang anak saya bangun sendiri untuk sholat subuh, tidak perlu dibangunkan berkali-kali seperti dulu.',
        nama: 'Ibu Siti',
        peran: 'Orang tua peserta',
      },
      {
        kutipan:
          'Yang paling terasa, dia jadi lebih sabar kalau mengantre dan mau bergantian mainan dengan adiknya.',
        nama: 'Bapak Rahmat',
        peran: 'Orang tua peserta',
      },
    ],
  },
  {
    id: 'angkatan-2',
    label: 'Angkatan 2',
    periode: 'Oktober — Desember 2026',
    capaian: null,
    narasi: 'Pendaftaran Angkatan 2 segera dibuka.',
    timeline: [],
    testimoni: [],
  },
]

const WA_MESSAGE = [
  'Halo Tera Foundation,',
  'Saya ingin tahu lebih lanjut tentang program Sekolah Karakter.',
  '---',
  'Nama:',
  'Minat: (relawan pengajar / donatur / informasi program)',
].join('\n')

function BlockLabel({ children, className = 'mb-2' }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-wide text-ink/45 ${className}`}>
      {children}
    </p>
  )
}

function RangkaianSesi({ items }) {
  const railRef = useRef(null)
  const [bisa, setBisa] = useState({ kiri: false, kanan: false })

  const perbarui = () => {
    const el = railRef.current
    if (!el) return
    setBisa({
      kiri: el.scrollLeft > 4,
      kanan: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    })
  }

  useEffect(() => {
    perbarui()
    window.addEventListener('resize', perbarui)
    return () => window.removeEventListener('resize', perbarui)
  }, [items])

  const geser = (arah) => {
    railRef.current?.scrollBy({ left: arah * 240, behavior: 'smooth' })
  }

  const tombol = 'w-8 h-8 rounded-full border border-gray-200 bg-white text-ink/70 flex items-center justify-center transition hover:border-teal hover:text-teal-dark disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-ink/70'

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-2">
        <BlockLabel className="">Rangkaian sesi</BlockLabel>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => geser(-1)}
            disabled={!bisa.kiri}
            aria-label="Geser rangkaian sesi ke kiri"
            className={tombol}
          >
            <IconChevronLeft size={18} stroke={2} />
          </button>
          <button
            type="button"
            onClick={() => geser(1)}
            disabled={!bisa.kanan}
            aria-label="Geser rangkaian sesi ke kanan"
            className={tombol}
          >
            <IconChevronRight size={18} stroke={2} />
          </button>
        </div>
      </div>

      <div ref={railRef} onScroll={perbarui} className="overflow-x-auto pb-1">
        <ol className="flex min-w-max">
          {items.map((t, idx) => (
            <li key={t.tanggal} className="relative w-36 shrink-0 pt-6 pr-5">
              {idx < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[7px] left-2 right-0 h-0.5 bg-teal/20"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 w-2.5 h-2.5 rounded-full bg-teal"
              />
              <span className="block text-sm font-semibold text-ink/50">{t.tanggal}</span>
              <span className="block text-ink/80 leading-snug">{t.sesi}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default function SekolahKarakter() {
  const [aktif, setAktif] = useState(angkatan[0].id)
  const angkatanAktif = angkatan.find((a) => a.id === aktif)

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-16 md:pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:text-teal transition-colors mb-8"
          >
            <IconArrowLeft size={16} stroke={2} />
            Kembali
          </Link>

          <div className="text-center">
            <img
              src="/images/sekolah-karakter-icon.png"
              alt=""
              aria-hidden="true"
              className="w-10 md:w-12 h-auto mx-auto mb-4"
            />

            <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-5">
              Sekolah Karakter
            </h1>

            <p className="text-ink/75 leading-relaxed max-w-xl mx-auto">
              Program pembinaan karakter non-formal untuk anak usia Sekolah Dasar dari keluarga
              marginal binaan Tera Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Kenapa program ini ada */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <Reveal className="max-w-md">
            <p className="font-heading text-2xl md:text-3xl font-bold text-ink leading-snug mb-6">
              Bukan Sekadar Pintar, Tapi Juga{' '}
              <span className="text-teal-dark">Berkarakter</span>
            </p>
            <p className="text-ink/75 leading-relaxed">
              Kami percaya, anak yang tumbuh dengan karakter kuat akan jauh lebih siap menghadapi
              hidup. Karena pada akhirnya, kebaikan hati, kejujuran, dan tanggung jawab adalah
              bekal yang akan terus mereka bawa ke mana pun mereka melangkah.
            </p>
          </Reveal>

          <div
            className="h-80 md:h-[26rem] grid grid-cols-2 gap-4 overflow-hidden"
            aria-hidden="true"
          >
            <PhotoColumn photos={fotoKiri} direction="down" />
            <PhotoColumn photos={fotoKanan} direction="up" duration={36} />
          </div>
        </div>
      </section>

      {/* Nilai karakter */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
              Empat Pilar Karakter
            </h2>
            <p className="text-ink/70">
              Program tidak mencoba mengubah semua aspek kepribadian anak. Kami berfokus pada
              pembentukan empat karakter inti TERA.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nilai.map((n, i) => (
              <Reveal
                key={n.title}
                delay={i * 80}
                className={`group bg-white border-2 border-transparent rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-md ${warna[n.color].ring}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-6 ${warna[n.color].icon}`}
                >
                  <n.icon size={24} stroke={2} />
                </div>
                <h3 className="text-lg font-bold text-ink mb-1">{n.title}</h3>
                <p className="text-sm text-ink/65">{n.desc}</p>

                <p className="text-xs font-semibold uppercase tracking-wide text-ink/45 mt-5 mb-2">
                  Perilaku yang diukur
                </p>
                <ul className="space-y-1.5">
                  {n.perilaku.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink/70">
                      <IconCircleCheck
                        size={16}
                        stroke={2}
                        className="shrink-0 mt-0.5 text-teal"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rangkaian kegiatan */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Belajar sambil melakukan</h2>
          <p className="text-ink/70">
            Kegiatan mingguan disusun dengan pendekatan experiential learning, anak belajar dari
            pengalaman yang dirasakan langsung.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kegiatan.map((k, i) => (
            <Reveal key={k.title} delay={i * 80}>
              <div
                className={`bg-white border border-gray-200 rounded-2xl p-3 shadow-sm transition hover:rotate-0 hover:shadow-md ${tilt[i]}`}
              >
                <div
                  className={`relative h-36 rounded-xl flex items-center justify-center mb-4 ${warna[k.color].soft}`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${warna[k.color].icon}`}
                  >
                    <k.icon size={32} stroke={2} />
                  </div>
                  <span className="absolute top-3 left-3 bg-white/90 text-ink/70 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {k.tag}
                  </span>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-ink mb-1">{k.title}</h3>
                  <p className="text-sm text-ink/65">{k.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dampak program */}
      <section className="bg-teal/5 border-y border-teal/15 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              Catatan Perjalanan Sekolah Karakter
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-[13rem_1fr] gap-6 md:gap-8">
            <div
              className="flex md:flex-col gap-2"
              role="tablist"
              aria-label="Angkatan Sekolah Karakter"
            >
              {angkatan.map((a) => {
                const aktif = a.id === angkatanAktif.id
                return (
                  <button
                    key={a.id}
                    type="button"
                    role="tab"
                    id={`tab-${a.id}`}
                    aria-selected={aktif}
                    aria-controls={`panel-${a.id}`}
                    onClick={() => setAktif(a.id)}
                    className={`relative flex-1 md:flex-none text-left rounded-2xl px-5 py-4 border transition ${
                      aktif
                        ? 'bg-teal-dark text-white border-teal-dark shadow-sm'
                        : 'bg-white text-ink border-gray-200 hover:border-teal'
                    }`}
                  >
                    <span className="block font-bold">{a.label}</span>
                    <span className={`block text-sm ${aktif ? 'text-white/75' : 'text-ink/60'}`}>
                      {a.periode}
                    </span>
                    {aktif && (
                      <span
                        aria-hidden="true"
                        className="absolute w-3 h-3 rotate-45 bg-teal-dark left-1/2 -translate-x-1/2 -bottom-1 md:left-auto md:translate-x-0 md:-right-1 md:top-1/2 md:-translate-y-1/2"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div
              key={angkatanAktif.id}
              role="tabpanel"
              id={`panel-${angkatanAktif.id}`}
              aria-labelledby={`tab-${angkatanAktif.id}`}
              className="min-w-0 rounded-2xl border-2 border-teal-dark/15 bg-white/60 p-5 md:p-6"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5 pb-4 border-b border-teal-dark/10">
                <h3 className="text-xl font-bold text-teal-dark">{angkatanAktif.label}</h3>
                <p className="text-sm text-ink/60">{angkatanAktif.periode}</p>
              </div>

              {angkatanAktif.capaian && (
                <div className="mb-6">
                  <BlockLabel>Capaian</BlockLabel>

                  <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">
                    <p className="text-3xl md:text-4xl font-extrabold text-teal-dark leading-none mb-3">
                      {angkatanAktif.capaian.sorotan.angka}
                    </p>
                    <p className="text-ink/80 leading-relaxed">
                      {angkatanAktif.capaian.sorotan.teks}
                    </p>
                    <p className="text-sm text-ink/60 leading-relaxed mt-2">
                      {angkatanAktif.capaian.sorotan.tambahan}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {angkatanAktif.capaian.tertinggi.map((c) => (
                      <div
                        key={c.label}
                        className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm flex flex-col"
                      >
                        <p className="text-2xl md:text-3xl font-extrabold text-teal-dark">
                          {c.angka}
                        </p>
                        <p className="font-bold text-ink text-sm mt-1 mb-3">{c.label}</p>
                        <span className="mt-auto bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-md px-2 py-1">
                          Capaian tertinggi
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <BlockLabel>Ringkasan</BlockLabel>
                <p className="text-ink/80 leading-relaxed">{angkatanAktif.narasi}</p>
              </div>

              {angkatanAktif.timeline.length > 0 && (
                <RangkaianSesi items={angkatanAktif.timeline} />
              )}

              {angkatanAktif.testimoni.length > 0 && <BlockLabel>Testimoni</BlockLabel>}
              <div className="grid sm:grid-cols-2 gap-4">
                {angkatanAktif.testimoni.map((t) => (
                  <figure
                    key={t.nama}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                  >
                    <IconQuote size={24} stroke={2} className="text-teal/40 mb-3" />
                    <blockquote className="text-ink/80 leading-relaxed">{t.kutipan}</blockquote>
                    <figcaption className="mt-4">
                      <span className="block font-semibold text-ink text-sm">{t.nama}</span>
                      <span className="block text-sm text-ink/60">{t.peran}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cara terlibat */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <Reveal className="relative overflow-hidden rounded-2xl bg-teal-dark text-white p-8 md:p-12">
          <div
            className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div
            className="absolute right-24 -bottom-20 w-40 h-40 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Tumbuh bersama anak-anak Tera</h2>
            <p className="text-white/85 mb-6">
              Sekolah Karakter diperuntukkan bagi anak binaan Tera Foundation. Kamu bisa ikut
              mendukung sebagai relawan pengajar atau donatur, atau sekadar bertanya lebih lanjut
              tentang program ini.
            </p>
            <a
              href={waLink(WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-teal-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <IconBrandWhatsapp size={20} stroke={2} />
              Hubungi via WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
