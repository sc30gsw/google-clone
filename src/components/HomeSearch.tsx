'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

import Spinner from '@/components/Spinner'

const HomeSearch = () => {
  const [searchText, setSearchText] = useState('')
  const [isSearchPending, startSearchTransition] = useTransition()
  const [isRandomPending, startRandomTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!searchText.trim()) return

    startSearchTransition(() => router.push(`/search/web?searchTerm=${searchText}`))
  }

  const randomSearch = async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const res = await response.json()
    const word = res[0]
    if (!word) return

    startRandomTransition(() => router.push(`/search/web?searchTerm=${word}`))
  }

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
          {isSearchPending ? (
            <Spinner color="border-gray-300" height="h-5" width="w-5" border="border-2" />
          ) : (
            'Google Search'
          )}
        </button>
        <button
          disabled={isRandomPending}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {isRandomPending ? (
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
