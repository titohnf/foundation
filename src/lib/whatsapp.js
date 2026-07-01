export const WA_NUMBER = '6285361005445'

export function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
