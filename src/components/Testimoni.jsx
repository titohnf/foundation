import { useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

const testimoni = [
  {
    quote:
      'Sejak ikut bimbel Tera, anak saya jadi lebih percaya diri dan semangat belajar. Sesi BUNDA juga membantu saya paham cara mendampingi anak di rumah.',
    name: 'Ibu dari Siti N.',
    role: 'Orang tua anak binaan Tera',
    avatarSeed: 'Ibu-Siti-Nuraini',
  },
  {
    quote:
      'Rizki jadi lebih rajin belajar dan berani tampil di depan kelas. Pendampingan dari tim Tera terasa tulus, bukan cuma sekadar bimbel.',
    name: 'Nenek dari Rizki A.',
    role: 'Wali anak binaan Tera',
    avatarSeed: 'Nenek-Rizki-Ananda',
  },
  {
    quote:
      'Dimas dulu sering absen sekolah, sekarang lebih semangat karena ada Kakak Asuh yang rutin mendampingi. Saya jadi lebih tenang.',
    name: 'Ibu dari Dimas P.',
    role: 'Orang tua anak binaan Tera',
    avatarSeed: 'Ibu-Dimas-Pratama',
  },
]

export default function Testimoni() {
  const [index, setIndex] = useState(0)
  const current = testimoni[index]
  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(
    current.avatarSeed
  )}`

  const prev = () => setIndex((i) => (i === 0 ? testimoni.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimoni.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-white border-t border-gray-200 py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-[13px] font-semibold text-teal-dark uppercase tracking-[0.02em] mb-6">
          Cerita dari Orang Tua Kami
        </p>
        <div className="flex items-center justify-center min-h-[140px] md:min-h-[112px] mb-6">
          <p className="text-ink text-lg md:text-xl leading-relaxed font-medium">
            {current.quote}
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={avatarUrl} alt="Avatar orang tua" className="w-10 h-10 rounded-full bg-teal/10" />
          <div className="text-left">
            <p className="text-ink font-semibold text-sm">{current.name}</p>
            <p className="text-ink/60 text-xs">{current.role}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Testimoni sebelumnya"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-ink/60 hover:bg-gray-50"
          >
            <IconChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimoni.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Lihat testimoni ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-teal-dark' : 'bg-gray-200'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Testimoni berikutnya"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-ink/60 hover:bg-gray-50"
          >
            <IconChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
