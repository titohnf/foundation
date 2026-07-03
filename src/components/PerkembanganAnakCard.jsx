export default function PerkembanganAnakCard({ anak }) {
  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(
    anak.avatar_seed
  )}`

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatarUrl}
          alt={`Ilustrasi avatar ${anak.nama}`}
          className="w-16 h-16 rounded-full bg-teal/10"
        />
        <div>
          <h3 className="font-bold text-ink">{anak.nama}</h3>
          <p className="text-sm text-ink/60">
            {anak.usia} tahun &middot; {anak.kelas}
          </p>
        </div>
      </div>

      <p className="text-sm text-ink/70 mb-4">{anak.deskripsi}</p>

      <div className="space-y-2.5 text-sm text-ink/80">
        <div className="flex items-start gap-2">
          <span className="shrink-0">📚</span>
          <span>{anak.program}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="shrink-0">⏳</span>
          <span>Bergabung selama {anak.lama_bergabung}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="shrink-0">🏆</span>
          <span>{anak.prestasi}</span>
        </div>
      </div>
    </div>
  )
}
