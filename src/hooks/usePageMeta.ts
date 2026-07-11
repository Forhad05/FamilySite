import { useEffect } from 'react'

const SITE_NAME = 'Global Pathways Education'

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    const previousDescription = meta.content
    meta.content = description

    return () => {
      document.title = previousTitle
      meta!.content = previousDescription
    }
  }, [title, description])
}
