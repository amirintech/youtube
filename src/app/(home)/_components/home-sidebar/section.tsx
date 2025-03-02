'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
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
  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}

      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map(({ icon: Icon, title, url }) => {
            return (
              <SidebarMenuItem key={url}>
                <SidebarMenuButton
                  asChild
                  tooltip={title}
                  isActive={false}
                  onClick={() => {}}
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
