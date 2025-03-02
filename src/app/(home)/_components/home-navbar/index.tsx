import { SidebarTrigger } from '@/components/ui/sidebar'

import React from 'react'
import Logo from './logo'
import SearchInput from './search-input'
import AuthButton from './auth-button'

const HomeNavbar = () => {
  return (
    <nav className='bg-background fixed top-0 right-0 left-0 z-50 flex h-16 items-center px-2 pr-5'>
      <div className='flex w-full items-center justify-between gap-4'>
        {/* logo & sidebar trigger */}
        <div className='flex flex-shrink-0 items-center'>
          <SidebarTrigger />
          <Logo />
        </div>

        {/* search bar */}
        <div className='w-full max-w-lg'>
          <SearchInput />
        </div>

        <div className='flex-shrink-0'>
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}

export default HomeNavbar
