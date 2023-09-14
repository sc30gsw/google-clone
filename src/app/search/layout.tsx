import React from 'react'

import SearchHeader from '@/components/SearchHeader'

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}

export default SearchLayout
