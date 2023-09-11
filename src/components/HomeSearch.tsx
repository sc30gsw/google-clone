'use client'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState, useTransition } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

import Spinner from '@/components/Spinner'

const HomeSearch = () => {
  const [searchText, setSearchText] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      console.log(searchText.trim())

      if (!searchText.trim()) return

      startTransition(() => router.push(`/search/web?searchTerm=${searchText}`))
    },
    [searchText, router],
  )

  const randomSearch = useCallback(async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const res = await response.json()
    const word = res[0]
    if (!word) return

    startTransition(() => router.push(`/search/web?searchTerm=${word}`))
  }, [router])

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={isPending}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {isPending ? (
            <Spinner color="border-gray-300" height="h-5" width="w-5" border="border-2" />
          ) : (
            'I’m Feeling Lucky '
          )}
        </button>
      </div>
    </>
  )
}

export default HomeSearch
