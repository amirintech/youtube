import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        alt='logo'
        width={120}
        height={30}
        src='/icons/logo-light.svg'
      />
    </Link>
  )
}

export default Logo
