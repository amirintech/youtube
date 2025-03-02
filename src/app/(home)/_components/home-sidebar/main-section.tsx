'use client'

import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react'
import React from 'react'
import Section from './section'

const routes = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon,
  },
  {
    title: 'Subscriptions',
    url: '/feed/subscriptions',
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: 'Trending',
    url: '/feed/trending',
    icon: FlameIcon,
  },
]

const MainSection = () => {
  return <Section routes={routes} />
}

export default MainSection
