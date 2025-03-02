'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useAuth, useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

interface Props {
  title?: string
  routes: {
    title: string
    url: string
    icon: React.ElementType
    auth?: boolean
  }[]
}

const Section = ({ routes, title }: Props) => {
  const clerk = useClerk()
  const { isSignedIn } = useAuth()

  const onAuthRequiredActionClick = (e: React.MouseEvent, auth?: boolean) => {
    if (!isSignedIn && auth) {
      e.preventDefault()
      clerk.openSignIn()
    }
  }

  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}

      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map(({ icon: Icon, title, url, auth }) => {
            return (
              <SidebarMenuItem key={url}>
                <SidebarMenuButton
                  asChild
                  tooltip={title}
                  isActive={false}
                  onClick={(e) => onAuthRequiredActionClick(e, auth)}
                >
                  <Link
                    href={url}
                    className='flex items-center gap-x-4 text-sm'
                  >
                    <Icon size={24} />
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default Section
