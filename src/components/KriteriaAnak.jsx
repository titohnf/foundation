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

export default function KriteriaAnak() {
  return (
    <section id="kriteria" className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-3">
          Anak yang Menjadi Fokus Kami Saat Ini
        </h2>
        <p className="text-center text-ink/60 max-w-2xl mx-auto mb-10">
          Tera Foundation membuka kesempatan menjadi anak binaan bagi anak-anak yang memenuhi
          kondisi berikut.
        </p>
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
    </section>
  )
}
