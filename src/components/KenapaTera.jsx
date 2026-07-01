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
    image:
      'https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/49b6f4-target/dynamic/400/color.webp',
    title: 'Program dikelola secara profesional',
    desc: 'Setiap program dijalankan dengan kurikulum dan pendamping yang terstruktur.',
  },
  {
    image:
      'https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/4e7918-thumb-up/dynamic/400/color.webp',
    title: 'Penguatan peran orang tua',
    desc: 'Orang tua dilibatkan aktif lewat sesi BUNDA untuk mendukung tumbuh kembang anak.',
  },
  {
    image:
      'https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/b91186-shield/dynamic/400/color.webp',
    title: 'Pendampingan end to end',
    desc: 'Tim Tera mendampingi anak dari awal hingga perkembangannya dipantau berkelanjutan.',
  },
  {
    image:
      'https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/176980-folder/dynamic/400/color.webp',
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
        <div className="grid sm:grid-cols-2 gap-4 items-start">
          {alasan.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-ink mb-2">{a.title}</h3>
                <p className="text-sm text-ink/60">{a.desc}</p>
              </div>
              <img src={a.image} alt="" className="w-20 h-20 object-contain shrink-0" />
            </div>
          ))}
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
              className="flex items-center gap-3 w-72 shrink-0 bg-white border border-gray-100 rounded-xl shadow-sm p-4"
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
