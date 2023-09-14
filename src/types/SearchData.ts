export type Item = {
  cacheId: string
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  formattedUrl: string
  htmlFormattedUrl: string
  pagemap: any
}

type QueriesItem = {
  title: string
  totalResults: string
  searchTerms: string
  count: number
  startIndex: number
  inputEncoding: 'utf8'
  outputEncoding: 'utf8'
  safe: string
  cx: string
}

export type SearchData = {
  kind: string
  url: { type: 'application/json'; template: string }
  queries: { request: QueriesItem; nextPage: QueriesItem }
  context: { title: string }
  searchInformation: {
    searchTime: number
    formattedSearchTime: string
    totalResults: string
    formattedTotalResults: string
  }
  items: Item[]
}

type Image = {
  contextLink: string
  height: number
  width: number
  byteSize: number
  thumbnailLink: string
  thumbnailHeight: number
  thumbnailWidth: number
}

export type ImageItem = {
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  mime: 'image/png'
  fileFormat: 'image/png'
  image: Image
}

export type SearchImageData = {
  kind: string
  url: { type: 'application/json'; template: string }
  queries: { request: QueriesItem; nextPage: QueriesItem }
  context: { title: string }
  searchInformation: {
    searchTime: number
    formattedSearchTime: string
    totalResults: string
    formattedTotalResults: string
  }
  items: ImageItem[]
}
