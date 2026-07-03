const fasilitas = [
  { emoji: '📚', label: 'Bimbingan Belajar Gratis' },
  { emoji: '✨', label: 'Sekolah Karakter' },
  { emoji: '🤝', label: 'Kakak Asuh' },
  { emoji: '👨‍👩‍👧', label: 'Sesi BUNDA untuk Orang Tua' },
  { emoji: '🎓', label: 'Kelas Akademik & UTBK' },
  { emoji: '🚌', label: 'Field Trip Edukatif' },
]

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
  const looped = [...fasilitas, ...fasilitas]

  return (
    <section className="bg-gray-50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-[13px] font-semibold text-teal-dark uppercase tracking-[0.02em] mb-2">
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
        <p className="text-[13px] font-semibold text-teal-dark uppercase tracking-[0.02em]">
          Program Berkelanjutan untuk Anak Sejahtera
        </p>
      </div>

      <div
        className="overflow-hidden mt-6"
        style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex w-max gap-3.5 animate-marquee">
          {looped.map((f, i) => (
            <div
              key={`${f.label}-${i}`}
              className="flex items-center gap-3 w-72 shrink-0 bg-white border border-gray-200 rounded-xl p-4"
            >
              <span className="text-xl shrink-0">{f.emoji}</span>
              <span className="text-sm font-medium text-ink">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
