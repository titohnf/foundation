import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'
import { program } from '../data/program'

const alasan = [
  {
    image: '/icons/profesional.png',
    title: 'Program dikelola secara profesional',
    desc: 'Setiap program dijalankan dengan kurikulum dan pendamping yang terstruktur.',
  },
  {
    image: '/icons/orang-tua.png',
    title: 'Penguatan peran orang tua',
    desc: 'Orang tua dilibatkan aktif lewat sesi BUNDA untuk mendukung tumbuh kembang anak.',
  },
  {
    image: '/icons/end2end.png',
    title: 'Pendampingan end to end',
    desc: 'Tim Tera mendampingi anak dari awal hingga perkembangannya dipantau berkelanjutan.',
  },
  {
    image: '/icons/badan-hukum.png',
    title: 'Berbadan Hukum Resmi',
    desc: 'Lembaga terdaftar secara legal, dengan laporan keuangan yang jelas.',
  },
]

export default function KenapaTera() {
  return (
    <section className="bg-gray-50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em] mb-2">
            Tera Foundation &mdash; Wadah Ikhtiar Kami Untuk
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">
            Mengentaskan Kemiskinan Melalui Pendidikan
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 border border-gray-200 rounded-xl overflow-hidden bg-white">
          {alasan.map((a, i) => {
            const col = i % 2
            const isLastRow = i >= alasan.length - 2
            const classes = [
              'p-6 flex items-center gap-4 border-gray-200',
              i !== alasan.length - 1 ? 'border-b' : '',
              col === 0 ? 'sm:border-r' : '',
              isLastRow ? 'sm:border-b-0' : 'sm:border-b',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <div key={a.title} className={classes}>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink mb-2">{a.title}</h3>
                  <p className="text-sm text-ink/60">{a.desc}</p>
                </div>
                <img src={a.image} alt="" className="w-14 h-14 object-contain shrink-0" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-16">
        <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em]">
          Program Berkelanjutan untuk Anak Sejahtera
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-6">
          {program.map((f) => (
            <div
              key={f.slug}
              className="flex flex-col bg-white border border-gray-200 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-teal/10 text-teal-dark flex items-center justify-center shrink-0">
                  <f.icon size={20} stroke={2} />
                </div>
                <h3 className="font-bold text-ink">{f.label}</h3>
              </div>
              <p className="flex-1 text-sm text-ink/60 mb-4">{f.desc}</p>
              <Link
                to={`/program/${f.slug}`}
                className="group self-start inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:text-teal transition-colors"
              >
                Pelajari Selengkapnya
                <IconArrowRight size={16} stroke={2} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
