// Satu kolom foto yang bergerak tanpa putus. Daftar dirender dua kali, lalu
// track-nya bergeser sejauh setengah tinggi, jadi sambungannya tidak terlihat.
export default function PhotoColumn({ photos, direction = 'down', duration = 30 }) {
  const track = [...photos, ...photos]

  return (
    <div
      className={`flex flex-col gap-4 ${
        direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'
      }`}
      style={{ '--marquee-duration': `${duration}s` }}
    >
      {track.map((photo, i) => (
        <figure
          key={`${photo.src ?? photo.label}-${i}`}
          className="shrink-0 overflow-hidden rounded-2xl bg-gray-100"
        >
          {photo.src ? (
            <img
              src={photo.src}
              alt=""
              loading="lazy"
              className="h-40 md:h-48 w-full object-cover"
            />
          ) : (
            <div
              className={`h-40 md:h-48 w-full flex items-center justify-center text-center text-sm font-semibold text-white/90 px-3 ${photo.tone}`}
            >
              {photo.label}
            </div>
          )}
        </figure>
      ))}
    </div>
  )
}
