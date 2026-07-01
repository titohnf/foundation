export default function Testimoni() {
  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(
    'Ibu-Siti-Nuraini'
  )}`

  return (
    <section className="bg-teal-dark py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.02em] mb-6">
          Cerita dari Orang Tua Kami
        </p>
        <span className="text-3xl block mb-4">💬</span>
        <p className="text-white text-lg md:text-xl leading-relaxed font-medium mb-6">
          Sejak ikut bimbel Tera, anak saya jadi lebih percaya diri dan semangat belajar. Sesi
          BUNDA juga membantu saya paham cara mendampingi anak di rumah.
        </p>
        <div className="flex items-center justify-center gap-3">
          <img src={avatarUrl} alt="Avatar orang tua" className="w-10 h-10 rounded-full bg-white/10" />
          <div className="text-left">
            <p className="text-white font-semibold text-sm">Ibu dari Siti N.</p>
            <p className="text-white/60 text-xs">Orang tua anak binaan Tera</p>
          </div>
        </div>
      </div>
    </section>
  )
}
