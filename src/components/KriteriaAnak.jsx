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
    desc: 'Orang tua atau wali mendukung dan ikut berperan aktif selama anak mengikuti program.',
  },
  {
    icon: IconStars,
    title: 'Kurang mampu dan punya semangat serta cita-cita',
    desc: 'Anak dari keluarga dengan keterbatasan ekonomi yang memiliki motivasi belajar dan cita-cita yang ingin diwujudkan lewat pendidikan.',
  },
]

export default function KriteriaAnak() {
  return (
    <section className="bg-[#F7FBF9] py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-semibold tracking-wide uppercase text-teal-dark mb-3">
          Untuk Orang Tua/Wali
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-3">
          Anak Seperti Apa yang Berhak Mengikuti Program Ini
        </h2>
        <p className="text-center text-ink/60 max-w-2xl mx-auto mb-10">
          Tera Foundation membuka kesempatan belajar bagi anak-anak yang memenuhi kriteria berikut.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {kriteria.map((k) => (
            <div
              key={k.title}
              className="bg-white border border-gray-100 rounded-xl p-5 text-center"
            >
              <div className="w-11 h-11 rounded-full bg-[#E1F5EE] text-[#085041] flex items-center justify-center mx-auto mb-3">
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
