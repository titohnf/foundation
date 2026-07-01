import Seo from '../components/Seo'
import {
  PelatihanIcon,
  PendampinganIcon,
  PengalamanIcon,
  PembiayaanIcon,
  PemberdayaanIcon,
} from '../components/illustrations/StepIcons'
import { KolaboratifIcon, AdaptifIcon, InklusifIcon } from '../components/illustrations/PrincipleIcons'

const prinsip = [
  {
    icon: KolaboratifIcon,
    title: 'Kolaboratif',
    desc: 'Membangun kolaborasi erat antara rumah dan ruang belajar.',
  },
  {
    icon: AdaptifIcon,
    title: 'Adaptif',
    desc: 'Mendorong pendidik agar relevan dengan zaman.',
  },
  {
    icon: InklusifIcon,
    title: 'Inklusif',
    desc: 'Menerima dan mengembangkan setiap potensi anak yang unik.',
  },
]

const tahapan = [
  { icon: PelatihanIcon, title: 'Pelatihan', desc: 'Membekali anak dengan keterampilan dasar dan karakter.' },
  { icon: PendampinganIcon, title: 'Pendampingan', desc: 'Mentor mendampingi proses belajar anak secara berkelanjutan.' },
  { icon: PengalamanIcon, title: 'Pengalaman', desc: 'Anak diberi kesempatan belajar dari pengalaman langsung.' },
  { icon: PembiayaanIcon, title: 'Pembiayaan', desc: 'Dukungan biaya pendidikan dari para donatur.' },
  { icon: PemberdayaanIcon, title: 'Pemberdayaan', desc: 'Anak tumbuh mandiri dan siap memberdayakan lingkungannya.' },
]

const program = [
  { title: 'Sekolah Karakter', desc: '12 minggu dengan 8 tema pembentukan karakter anak.' },
  { title: 'Kakak Asuh', desc: '1 mentor mendampingi 5 anak secara personal.' },
  { title: 'Seminar Parenting BUNDA', desc: 'Ruang belajar bagi orang tua mendampingi anak.' },
  { title: 'Kelas Akademik dan UTBK', desc: 'Persiapan akademik dan ujian masuk perguruan tinggi.' },
  { title: 'Field Trip Edukatif', desc: 'Belajar langsung dari pengalaman di luar kelas.' },
]

export default function Tentang() {
  return (
    <>
      <Seo
        title="Tentang Kami"
        description="Kenali cerita, tahapan program, dan kegiatan Tera Foundation dalam mendampingi anak-anak sejahtera."
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-center">
        <h1 className="text-3xl font-extrabold text-ink mb-6">Cerita Tera</h1>
        <p className="text-ink/80 leading-relaxed">
          Nama Tera diambil dari akhir kata &ldquo;sejahtera&rdquo;, sebuah harapan sederhana
          agar setiap anak dapat tumbuh dengan pendidikan yang layak. Tera Foundation
          terdaftar resmi berdasarkan SK Menkumham RI No. AHU-0017375.AH.01.04.Tahun 2023,
          lahir dari kepedulian untuk menjembatani anak-anak yang membutuhkan dengan
          masyarakat yang ingin membantu.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-10">
          Prinsip Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prinsip.map((p) => (
            <div key={p.title} className="text-center p-6 rounded-2xl border border-gray-100">
              <div className="flex justify-center mb-4">
                <p.icon />
              </div>
              <h3 className="font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal/5 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-10">
            Tahapan Program
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {tahapan.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="flex justify-center mb-3">
                  <t.icon />
                </div>
                <h3 className="font-bold text-teal-dark mb-2">{t.title}</h3>
                <p className="text-sm text-ink/70">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-10">Program Kami</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {program.map((p) => (
            <div key={p.title} className="border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-10">
          Galeri Kegiatan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-medium text-sm"
            >
              Foto Kegiatan
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
