import { IconMapPin, IconUsersGroup, IconStars } from '@tabler/icons-react'

const kriteria = [
  {
    icon: IconMapPin,
    title: 'Berdomisili di Cipayung, Depok',
    desc: 'Anak yang tinggal di wilayah Cipayung, Depok dan sekitarnya.',
  },
  {
    icon: IconUsersGroup,
    title: 'Orang tua/wali bersedia terlibat aktif',
    desc: 'Orang tua atau wali mendukung dan ikut berperan aktif selama anak menjadi anak binaan.',
  },
  {
    icon: IconStars,
    title: 'Kurang mampu dan punya semangat serta cita-cita',
    desc: 'Anak dari keluarga dengan keterbatasan ekonomi yang memiliki motivasi belajar dan cita-cita yang ingin diwujudkan lewat pendidikan.',
  },
]

const alur = [
  {
    title: 'Seleksi Administrasi',
  },
  {
    title: 'Seleksi Sikap dan Nilai (Anak dan Orang Tua)',
    sub: ['Sekolah Karakter 2 bulan', 'Mentoring', 'Seleksi orang tua'],
  },
  {
    title: 'Trial Class 3 Bulan',
  },
  {
    title: 'Evaluasi',
  },
]

export default function KriteriaAnak() {
  return (
    <section id="kriteria" className="bg-white border-t border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em] text-center mb-2">
          Kriteria Penerimaan
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-10">
          Anak yang Menjadi Fokus Kami Saat Ini
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {kriteria.map((k) => (
            <div
              key={k.title}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center"
            >
              <div className="w-11 h-11 rounded-full bg-teal/10 text-teal-dark flex items-center justify-center mx-auto mb-3">
                <k.icon size={22} stroke={2} />
              </div>
              <h3 className="text-[15px] font-medium text-ink mb-1">{k.title}</h3>
              <p className="text-sm text-ink/60">{k.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
        <p className="text-sm font-semibold text-teal-dark uppercase tracking-[0.02em] text-center mb-2">
          Proses Seleksi
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-12">
          Alur Seleksi Penerimaan
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-4 left-0 right-0 h-0.5 bg-teal/10" />
          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {alur.map((a, idx) => (
              <div key={a.title} className="relative flex md:flex-col gap-4 md:gap-0">
                <div className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-teal-dark text-white flex items-center justify-center font-semibold text-sm md:mx-auto md:mb-4">
                  {idx + 1}
                </div>
                <div className="md:text-center">
                  <h3 className="text-[15px] font-medium text-ink mb-2">{a.title}</h3>
                  {a.sub && (
                    <ul className="text-sm text-ink/60 space-y-1 md:inline-block md:text-left">
                      {a.sub.map((s) => (
                        <li key={s}>&middot; {s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <p className="inline-block bg-teal/10 text-teal-dark text-sm font-medium px-4 py-2 rounded-full text-center">
            Pendaftaran Batch 2 akan segera dibuka, kunjungi web secara berkala untuk tahu
            updatenya
          </p>
        </div>
      </div>
    </section>
  )
}
