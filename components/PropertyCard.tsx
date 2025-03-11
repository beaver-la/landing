"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PropertyCardProps {
  property: {
    id: string
    name: string
    location: string
    price: string
    tokenPrice?: string
    funded: number
    target: number
    totalReturn: number
    annualReturn: number
    status: "tokens" | "funded"
    investmentPeriod?: string
    rentStart: string
  }
  onInvestClick: () => void
}

export default function PropertyCard({ property, onInvestClick }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beaver_positivo_color-a02GIsj5SqKONhZEblyIhVvh3Ws07z.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beaver_positivo_color-a02GIsj5SqKONhZEblyIhVvh3Ws07z.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beaver_positivo_color-a02GIsj5SqKONhZEblyIhVvh3Ws07z.png",
  ]

  const changeImage = (direction: "prev" | "next") => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1
      } else {
        return (prevIndex + 1) % images.length
      }
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {/* Property Image */}
      <div className="relative h-48">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={property.name}
          layout="fill"
          objectFit="contain"
          className="p-8 transition-opacity duration-300"
        />
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1"
          onClick={() => changeImage("prev")}
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1"
          onClick={() => changeImage("next")}
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Property Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{property.name}</h3>
          <span className="text-2xl font-bold text-primary">
            {property.price.includes("€") ? "€" : "$"}
            {property.price.replace(/[€$]/g, "")}
          </span>
        </div>

        {/* Property ID Badge */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-gray-600">{property.id}</span>
            <div className="w-4 h-3">
              {property.location === "US" ? (
                <div className="w-4 h-3 bg-[#3c3b6e]" />
              ) : (
                <div className="w-4 h-3 bg-[#ffc400]" />
              )}
            </div>
          </div>
          {property.status === "tokens" && (
            <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-primary">Tokens en venta</span>
            </div>
          )}
          {property.status === "funded" && (
            <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-primary">¡Financiado!</span>
            </div>
          )}
        </div>

        {/* Investment Progress */}
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Financiado</span>
          <span>Objetivo</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>
            {property.funded.toLocaleString()} {property.price.includes("€") ? "€" : "$"}
          </span>
          <span>
            {property.target.toLocaleString()} {property.price.includes("€") ? "€" : "$"}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-primary rounded-full h-2"
            style={{ width: `${(property.funded / property.target) * 100}%` }}
          />
        </div>

        {/* Investment Details */}
        <div className="space-y-3 flex-grow">
          {property.tokenPrice && (
            <div className="flex justify-between">
              <span className="text-gray-600">Precio del token</span>
              <span className="font-medium">
                {property.tokenPrice.includes("€") ? "€" : "$"}
                {property.tokenPrice.replace(/[€$]/g, "")}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Rentabilidad total estimada</span>
            <span className="font-medium">{property.totalReturn} %</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Rentabilidad anual estimada</span>
            <span className="font-medium">{property.annualReturn} %</span>
          </div>
          {property.investmentPeriod && (
            <div className="flex justify-between">
              <span className="text-gray-600">Período de inversión</span>
              <span className="font-medium">{property.investmentPeriod}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Inicio renta</span>
            <span className="font-medium">{property.rentStart.replace(/20(\d{2})/, "$1")}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-6 bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          onClick={onInvestClick}
        >
          {property.status === "tokens" ? "Invertir" : "Ver más"}
        </button>
      </div>
    </div>
  )
}

