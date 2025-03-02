import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <form className='flex w-full'>
      <div className='relative w-full'>
        <Input
          type='text'
          placeholder='search'
          className='h-10 w-full rounded-l-full shadow-none focus-visible:border-blue-400 focus-visible:ring-0'
        />
      </div>

      <Button className='text-foreground h-10 w-auto rounded-l-none rounded-r-full border border-l-0 bg-gray-100 !pr-4 hover:cursor-pointer hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50'>
        <SearchIcon size={20} />
      </Button>
    </form>
  )
}

export default SearchInput
