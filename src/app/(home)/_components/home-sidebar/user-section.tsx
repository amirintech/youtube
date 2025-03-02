'use client'

import {
  FlameIcon,
  HistoryIcon,
  HomeIcon,
  ListVideoIcon,
  PlaySquareIcon,
  ThumbsUpIcon,
} from 'lucide-react'
import React from 'react'
import Section from './Section'

const routes = [
  {
    title: 'History',
    url: '/playlists/history',
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: 'Liked Videos',
    url: '/playlists/liked',
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: 'All Playlists',
    url: '/playlists',
    icon: ListVideoIcon,
    auth: true,
  },
]

const UserSection = () => {
  return (
    <Section
      title='You'
      routes={routes}
    />
  )
}

export default UserSection
