import { SearchResultPage } from '@/components/sections/SearchResult'
import { Valak } from '@/components/sections/Valak'
import React from 'react'

const SearchResult = () => {
  return (
    <main className='flex'>
        <Valak />
        <SearchResultPage />
    </main>
  )
}

export default SearchResult