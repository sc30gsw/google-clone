import Link from 'next/link'
import React from 'react'

import type { Item } from '@/types/Item'

const fetchSearchResult = async (searchTerm: string) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${searchTerm}`,
    )

    if (!res.ok) throw new Error('Something went wrong')
    const data = await res.json()
    const results: Item[] = data.items

    return results
  } catch (err) {
    throw new Error('Something went wrong')
  }
}

type WebSearchPageProps = {
  searchParams: { searchTerm: string }
}

const WebSearchPage: React.FC<WebSearchPageProps> = async ({ searchParams }) => {
  const results = await fetchSearchResult(searchParams.searchTerm)

  if (!results)
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to hte homepage.
          <Link href="/" className="text-blue-500 ml-2">
            Home
          </Link>
        </p>
      </div>
    )

  return <>{results && results.map((result: Item) => <h1 key={result.cacheId}>{result.title}</h1>)}</>
}

export default WebSearchPage
