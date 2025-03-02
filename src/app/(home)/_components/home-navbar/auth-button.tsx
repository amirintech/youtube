'use client'

import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { UserButton } from '@clerk/nextjs'
import { UserCircleIcon } from 'lucide-react'
import React from 'react'

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton mode='modal'>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full border-blue-500/20 px-4 py-2 text-sm font-medium !text-blue-500'
          >
            <UserCircleIcon />
            <span>Sign in</span>
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}

export default AuthButton
