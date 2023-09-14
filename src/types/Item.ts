type MetaTag = {
  referer: string
  'og:image': string
  'theme-color': string
  'og:image:width': string
  viewport: string
  'og:title': string
  'og:image:height': string
  'format-detection': string
}

export type Item = {
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  cacheId: string
  formattedUrl: string
  htmlFormattedUrl: string
  pagemap: MetaTag[]
}
