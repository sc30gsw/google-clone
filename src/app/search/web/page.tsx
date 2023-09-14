import Link from 'next/link'
import React from 'react'

import WebSearchResults from '@/components/WebSearchResults'
import type { Item, SearchData } from '@/types/SearchData'

const fetchSearchData = async (searchTerm: string, startIndex: string) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`,
    )

    if (!res.ok) {
      console.log(res)
      throw new Error('Something went wrong')
    }

    const data: SearchData = await res.json()

    return data
  } catch (err) {
    throw new Error('Something went wrong')
  }
}

type WebSearchPageProps = {
  searchParams: { searchTerm: string; start: string }
}

const WebSearchPage: React.FC<WebSearchPageProps> = async ({ searchParams }) => {
  const startIndex = searchParams.start || '1'
  const data = await fetchSearchData(searchParams.searchTerm, startIndex)
  const results: Item[] = data.items

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

  return <>{results && <WebSearchResults results={data} />}</>
}

export default WebSearchPage
