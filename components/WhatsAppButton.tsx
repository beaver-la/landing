"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [isOverGreenSection, setIsOverGreenSection] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const phoneNumber = "5491171722509"
  const message = encodeURIComponent("Hola, estoy interesado en conocer más acerca de Beaver!")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  useEffect(() => {
    // Solo aplicar la lógica de cambio de color en la página de inicio
    if (!isHomePage) return

    const checkPosition = () => {
      // Obtener la posición del botón
      const button = document.getElementById("whatsapp-button")
      if (!button) return

      const buttonRect = button.getBoundingClientRect()
      const buttonMiddle = buttonRect.top + buttonRect.height / 2

      // Obtener las secciones verdes específicas de la página de inicio
      const greenSections = document.querySelectorAll(".bg-\\[\\#003D3A\\], .bg-primary, .bg-gradient-secondary")

      // Verificar si el botón está sobre alguna sección verde
      let overGreen = false
      greenSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect()
        if (buttonMiddle >= sectionRect.top && buttonMiddle <= sectionRect.bottom) {
          overGreen = true
        }
      })

      setIsOverGreenSection(overGreen)
    }

    // Ejecutar al montar
    checkPosition()

    // Configurar un intervalo para verificar continuamente
    const intervalId = setInterval(checkPosition, 100)

    // También verificar en cada scroll
    window.addEventListener("scroll", checkPosition)

    // Limpiar event listeners al desmontar
    return () => {
      clearInterval(intervalId)
      window.removeEventListener("scroll", checkPosition)
    }
  }, [isHomePage])

  return (
    <a
      id="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-colors duration-200 ${
        isHomePage && isOverGreenSection ? "bg-[#F5F5F5] text-primary" : "bg-primary text-white hover:bg-accent"
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

