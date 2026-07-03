import { getAvatarUrl } from '../lib/avatar'

export default function PerkembanganAnakCard({ anak }) {
  const avatarUrl = getAvatarUrl(anak)

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

      <hr className="border-gray-200 mb-4" />

      <div className="space-y-2.5 text-sm text-ink/80">
        <div className="flex items-start gap-2">
          <svg
            className="shrink-0 w-4 h-4 mt-0.5 text-teal-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <span>{anak.program}</span>
        </div>
        <div className="flex items-start gap-2">
          <svg
            className="shrink-0 w-4 h-4 mt-0.5 text-teal-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          <span>Bergabung selama {anak.lama_bergabung}</span>
        </div>
        <div className="flex items-start gap-2">
          <svg
            className="shrink-0 w-4 h-4 mt-0.5 text-teal-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 21h8" />
            <path d="M12 17v4" />
            <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
            <path d="M7 5H4a3 3 0 0 0 3 4" />
            <path d="M17 5h3a3 3 0 0 1-3 4" />
          </svg>
          <span>{anak.prestasi}</span>
        </div>
      </div>
    </div>
  )
}
