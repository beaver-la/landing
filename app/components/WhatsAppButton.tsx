import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "5491171722509"
  const message = encodeURIComponent("Hola, estoy interesado en conocer más acerca de Beaver!")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-lg transition-colors duration-200 hover:bg-accent"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

