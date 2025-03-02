import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import React from 'react'

const AuthButton = () => {
  return (
    <Button
      variant='outline'
      size='lg'
      className='rounded-full border-blue-500/20 px-4 py-2 text-sm font-medium !text-blue-500'
    >
      <UserCircleIcon />
      <span>Sign in</span>
    </Button>
  )
}

export default AuthButton
