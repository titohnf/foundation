import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.terafoundation.or.id'

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, image = '/logo.png' }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = `${title} | Tera Foundation`
    const url = `${SITE_URL}${pathname}`
    const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = fullTitle
    setMeta('description', description)
    setCanonical(url)
    setMeta('og:type', 'website', 'property')
    setMeta('og:locale', 'id_ID', 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:image', absoluteImage, 'property')
    setMeta('twitter:card', 'summary')
  }, [title, description, image, pathname])

  return null
}
