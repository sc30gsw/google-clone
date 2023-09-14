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
