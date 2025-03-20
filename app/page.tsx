"use client"

import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beaver_positivo_color-a02GIsj5SqKONhZEblyIhVvh3Ws07z.png"
                  alt="Beaver Logo"
                  width={82}
                  height={82}
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link">
                Inicio
              </Link>
              <Link href="/como-funciona" className="nav-link">
                Cómo funciona
              </Link>
              <Link href="/proyectos" className="nav-link">
                Proyectos
              </Link>
              {/* <Link href="/login" className="nav-button nav-button-primary">
                Iniciar sesión
              </Link>
              <Link href="/registro" className="nav-button nav-button-secondary">
                Registrarme
              </Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondogris.jpg-YtDezN8mDcihzbmZKZ8JYlzkHfDTx1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div className="pb-24">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                Invertí en Real Estate tokenizado de forma Simple y Segura.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Hacé crecer tu dinero invirtiendo en propiedades tokenizadas con retornos estables. Accedé desde tu
                moneda local y diversificá sin complicaciones.
              </p>
              {/* <Link href="/registro" className="nav-button nav-button-primary text-lg">
                Comenzar ahora
              </Link> */}
            </div>
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagebanner2-RcksXVnji0ukQGz1MtXDM9CTdBDhgU.png"
                alt="Beaver app interface with floating tokens"
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
                priority
              />
              {/* Floating coins decoration */}
              <div className="absolute top-1/4 right-1/4 animate-float">
                <div className="w-8 h-8 bg-accent rounded-full opacity-80" />
              </div>
              <div className="absolute top-1/3 left-1/4 animate-float-delayed">
                <div className="w-6 h-6 bg-primary rounded-full opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="bg-[#003D3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 lg:mb-0">
                Conocé todos los tipos de inversión disponibles
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 text-gray-900">
                  <h3 className="text-2xl font-bold text-primary mb-4">Plusvalía</h3>
                  <p className="text-gray-600">
                    Comprar, reformar y vender
                    <br />
                    <span className="block mt-2 text-sm">Corto plazo: 12 a 36 meses</span>
                  </p>
                </div>
                <div className="bg-white rounded-lg p-8 text-gray-900">
                  <h3 className="text-2xl font-bold text-primary mb-4">Renta</h3>
                  <p className="text-gray-600">
                    Comprar, alquilar y vender
                    <br />
                    <span className="block mt-2 text-sm">Medio plazo: 3 a 5 años</span>
                  </p>
                </div>
                <div className="bg-white rounded-lg p-8 text-gray-900">
                  <h3 className="text-2xl font-bold text-primary mb-4">Interés</h3>
                  <p className="text-gray-600">
                    Préstamos al promotor del proyecto
                    <br />
                    <span className="block mt-2 text-sm">Plazo: variable</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 lg:mb-0">
                Comenzá el proceso en 3 simples pasos
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white mb-6 block">1.</span>
                  <h3 className="text-xl font-bold mb-4">Creá tu cuenta</h3>
                  <p>Registrate en tan solo 3 minutos.</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-white mb-6 block">2.</span>
                  <h3 className="text-xl font-bold mb-4">Descubrí el proyecto</h3>
                  <p>Explorá nuestras oportunidades.</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-white mb-6 block">3.</span>
                  <h3 className="text-xl font-bold mb-4">Empezá a operar</h3>
                  <p>¡Con una simple transferencia, ya serás parte de un proyecto!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/like-1T1e45CjTpKzNal6nT4h6NT813Jbt4.png"
                  alt="Like notification"
                  width={300}
                  height={300}
                  className="animate-float"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unite a nuestra comunidad</h2>
              <p className="text-lg mb-8 max-w-xl">
                Formá parte de una comunidad de inversores que accede a oportunidades exclusivas en real estate
                tokenizado. Conectate, aprendé y obtené rentabilidades atractivas con total seguridad y transparencia.
              </p>
              <div className="flex justify-center md:justify-end space-x-6">
                <Link href="https://t.me/beaverarg" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/telegram-logo.svg"
                    alt="Telegram"
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link href="https://discord.gg/beaverarg" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/discord-logo.svg"
                    alt="Discord"
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link href="https://www.instagram.com/beaver.arg" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/instagram-logo.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/beaverarg" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/linkedin-logo.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}

