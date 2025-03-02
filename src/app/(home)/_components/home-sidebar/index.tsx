import React from 'react'
import MainSection from './main-section'
import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import UserSection from './user-section'

const HomeSidebar = () => {
  return (
    <Sidebar
      className='z-40 border-none pt-16'
      collapsible='icon'
    >
      <SidebarContent className='bg-background'>
        <MainSection />
        <div className='px-2'>
          <Separator />
        </div>
        <UserSection />
      </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar
