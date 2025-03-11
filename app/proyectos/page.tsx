"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X } from "lucide-react"
import PropertyCard from "@/components/PropertyCard"
import WhatsAppButton from "@/components/WhatsAppButton"

const properties = [
  {
    id: "HOU-3",
    name: "Houston 3",
    location: "US",
    price: "222.300",
    tokenPrice: "100",
    funded: 141275.51,
    target: 222300,
    totalReturn: 62.1,
    annualReturn: 8.57,
    status: "tokens",
    rentStart: "17/03/2023",
  },
  {
    id: "MUR-1",
    name: "Murcia 1",
    location: "ES",
    price: "1.527.800",
    tokenPrice: "100",
    funded: 844004.23,
    target: 1527800,
    totalReturn: 19.34,
    annualReturn: 11.05,
    status: "tokens",
    rentStart: "01/06/2023",
  },
  {
    id: "AZN-1",
    name: "Arizona 1",
    location: "US",
    price: "110.000",
    funded: 110000,
    target: 110000,
    investmentPeriod: "60 meses",
    totalReturn: 72.3,
    annualReturn: 9.68,
    rentStart: "17/03/2023",
    status: "funded",
  },
  {
    id: "MIA-2",
    name: "Miami 2",
    location: "US",
    price: "450.000",
    tokenPrice: "150",
    funded: 325000,
    target: 450000,
    totalReturn: 45.2,
    annualReturn: 12.3,
    status: "tokens",
    rentStart: "01/07/2023",
  },
  {
    id: "BCN-1",
    name: "Barcelona 1",
    location: "ES",
    price: "890.000",
    funded: 890000,
    target: 890000,
    investmentPeriod: "48 meses",
    totalReturn: 55.4,
    annualReturn: 13.85,
    rentStart: "01/06/2023",
    status: "funded",
  },
  {
    id: "MAD-3",
    name: "Madrid 3",
    location: "ES",
    price: "750.000",
    tokenPrice: "75",
    funded: 562500,
    target: 750000,
    totalReturn: 38.9,
    annualReturn: 9.72,
    status: "tokens",
    rentStart: "15/08/2023",
  },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Fecha")
  const [showModal, setShowModal] = useState(false)

  const sortedProperties = useMemo(() => {
    const sorted = [...properties]
    switch (sortBy) {
      case "Precio":
        sorted.sort(
          (a, b) => Number.parseFloat(b.price.replace(/[.,]/g, "")) - Number.parseFloat(a.price.replace(/[.,]/g, "")),
        )
        break
      case "Rentabilidad":
        sorted.sort((a, b) => b.annualReturn - a.annualReturn)
        break
      // For "Fecha" and "Mostrar todos", we'll keep the original order
      default:
        break
    }
    return sorted
  }, [sortBy])

  const filteredProperties = useMemo(() => {
    return sortedProperties.filter(
      (property) =>
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.id.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [sortedProperties, searchQuery])

  const handleInvestClick = () => {
    setShowModal(true)
  }

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
              <Link href="/login" className="nav-button nav-button-primary">
                Iniciar sesión
              </Link>
              <Link href="/registro" className="nav-button nav-button-secondary">
                Registrarme
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
          <h1 className="text-gray-500 text-sm">
            Mostrando {filteredProperties.length} de {properties.length} inmuebles
          </h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Mostrar todos</option>
              <option>Fecha</option>
              <option>Precio</option>
              <option>Rentabilidad</option>
            </select>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onInvestClick={handleInvestClick} />
          ))}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-primary">Acceso restringido</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="mb-6 text-gray-600">Debe ser un usuario registrado para tener acceso a nuestros proyectos.</p>
            <Link
              href="/registro"
              className="block w-full text-center bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              ¡Quiero registrarme!
            </Link>
          </div>
        </div>
      )}

      <WhatsAppButton />
    </div>
  )
}

