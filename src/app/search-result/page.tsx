"use client"

import { SearchResultPage } from '@/components/sections/SearchResult'
import { Valak } from '@/components/sections/Valak'
import { Suspense } from "react"
import React from 'react'

const SearchResult = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <main className='flex'>
        <Valak />
        <SearchResultPage />
      </main>
    </Suspense>
  )
}

export default SearchResult
