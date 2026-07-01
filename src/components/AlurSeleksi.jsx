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

export default function AlurSeleksi() {
  return (
    <section className="bg-[#F7FBF9] pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-ink mb-12">
          Alur Seleksi
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-4 left-0 right-0 h-0.5 bg-[#CDEBE0]" />
          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {alur.map((a, idx) => (
              <div key={a.title} className="relative flex md:flex-col gap-4 md:gap-0">
                <div className="relative z-10 w-8 h-8 shrink-0 rounded-full bg-[#085041] text-white flex items-center justify-center font-semibold text-sm md:mx-auto md:mb-4">
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
      </div>
    </section>
  )
}
