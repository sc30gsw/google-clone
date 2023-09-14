import React from 'react'

import type { Item } from '@/types/Item'

type WebSearchPageProps = {
  searchParams: { searchTerm: string }
}

const WebSearchPage: React.FC<WebSearchPageProps> = async ({ searchParams }) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${searchParams.searchTerm}`,
  )
  const data = await res.json()
  const results: Item[] = data.items

  return <>{results && results.map((result: Item) => <h1 key={result.cacheId}>{result.title}</h1>)}</>
}

export default WebSearchPage
