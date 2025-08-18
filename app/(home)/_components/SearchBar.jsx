import { Search } from 'lucide-react'
import React from 'react'

function SearchBar(onSearch) {
  return (
    <div className='flex gap-3 text-[14px]
    iteam-center border-1 border-gray-200 p-2 rounded-md bg-gray-50 text-gray-500'>
        <Search height={17}/>
        <input type="text" 
        placeholder='Search Course'
        className='bg-transparent outline-none'/>
    </div>
  )
}

export default SearchBar
