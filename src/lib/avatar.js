export function getAvatarUrl(anak) {
  const params = new URLSearchParams({ seed: anak.avatar_seed, beardProbability: '0' })

  return `https://api.dicebear.com/9.x/lorelei/svg?${params.toString()}`
}
