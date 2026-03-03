'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import MobileMenu from '@/components/MobileMenu'

export default function MobileHeader() {
  const pathname = usePathname()

  return (
    <>
      <div className="mobile-logo">
        <Image
          src="/img/beaver.svg"
          alt="Beaver Logo"
          width={120}
          height={50}
        />
      </div>

      <MobileMenu />
    </>
  )
}

