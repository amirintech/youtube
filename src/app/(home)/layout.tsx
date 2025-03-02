import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import HomeNavbar from './_components/home-navbar'
import HomeSidebar from './_components/home-sidebar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className='h-full'>
        <HomeNavbar />
        <div className='flex min-h-screen pt-16'>
          <HomeSidebar />
          <main className='flex overflow-y-auto'>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout
