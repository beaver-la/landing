"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  const phoneNumber = "5491171722509"
  const message = encodeURIComponent("Hola, estoy interesado en conocer más acerca de Beaver!")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`


  useEffect(() => {
    let hasScrolled = false
    let timeout: NodeJS.Timeout

    const handleScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true
        timeout = setTimeout(() => {
          setVisible(true)
        }, 3000)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      className={`whatsapp-float ${visible ? 'visible' : ''}`}
      aria-label="WhatsApp"
    >
      <Image
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </a>
  )
}