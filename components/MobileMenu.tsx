"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-4 right-4 z-50 p-2 rounded-md transition-colors ${
          isScrolled ? "bg-white text-primary" : "bg-primary text-white"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" className="text-2xl font-medium text-primary" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
            <Link href="/como-funciona" className="text-2xl font-medium text-primary" onClick={() => setIsOpen(false)}>
              Cómo funciona
            </Link>
            <Link href="/proyectos" className="text-2xl font-medium text-primary" onClick={() => setIsOpen(false)}>
              Proyectos
            </Link>
            <Link href="/login" className="text-2xl font-medium text-primary" onClick={() => setIsOpen(false)}>
              Iniciar sesión
            </Link>
            <Link href="/registro" className="text-2xl font-medium text-primary" onClick={() => setIsOpen(false)}>
              Registrarme
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

