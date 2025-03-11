"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import PropertyCard from "@/components/PropertyCard"

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
  const [filterCountry, setFilterCountry] = useState("all")

  const sortedProperties = useMemo(() => {
    const sorted = [...properties]
    switch (sortBy) {
      case "priceAsc":
        sorted.sort(
          (a, b) => Number.parseFloat(a.price.replace(/[.,]/g, "")) - Number.parseFloat(b.price.replace(/[.,]/g, "")),
        )
        break
      case "priceDesc":
        sorted.sort(
          (a, b) => Number.parseFloat(b.price.replace(/[.,]/g, "")) - Number.parseFloat(a.price.replace(/[.,]/g, "")),
        )
        break
      case "returnAsc":
        sorted.sort((a, b) => a.annualReturn - b.annualReturn)
        break
      case "returnDesc":
        sorted.sort((a, b) => b.annualReturn - a.annualReturn)
        break
      case "dateAsc":
        sorted.sort((a, b) => new Date(a.rentStart).getTime() - new Date(b.rentStart).getTime())
        break
      case "dateDesc":
        sorted.sort((a, b) => new Date(b.rentStart).getTime() - new Date(a.rentStart).getTime())
        break
      default:
        break
    }
    return sorted
  }, [sortBy])

  const filteredProperties = useMemo(() => {
    return sortedProperties.filter(
      (property) =>
        (property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filterCountry === "all" || property.location === filterCountry),
    )
  }, [sortedProperties, searchQuery, filterCountry])

  const handleInvestClick = () => {
    // No action for now
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Proyectos</h1>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
        <h2 className="text-gray-500 text-sm">
          Mostrando {filteredProperties.length} de {properties.length} inmuebles
        </h2>
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
            <option value="default">Mostrar todos</option>
            <option value="dateAsc">Fecha (Ascendente)</option>
            <option value="dateDesc">Fecha (Descendente)</option>
            <option value="priceAsc">Precio (Menor a Mayor)</option>
            <option value="priceDesc">Precio (Mayor a Menor)</option>
            <option value="returnAsc">Rentabilidad (Menor a Mayor)</option>
            <option value="returnDesc">Rentabilidad (Mayor a Menor)</option>
          </select>
          <select
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          >
            <option value="all">Todos los países</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
          </select>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onInvestClick={handleInvestClick} />
        ))}
      </div>
    </div>
  )
}

