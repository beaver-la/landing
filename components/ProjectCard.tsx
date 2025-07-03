"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Project } from "@/app/proyectos/page";
import { currencyFormat, formatProjectPrice, formatProjectTotalPrice } from "@/lib/utils";
import ProjectKeyChip from "./ProjectKeyChip";
import ProjectStatusChip from "./ProjectStatusChip";

interface ProjectCardProps {
  project: Project;
  onInvestClick: () => void;
}

export default function ProjectCard({ project, onInvestClick }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project.images?.map((pi: any) => pi.file) ?? [];

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
          alt={project.name}
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
          <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
          <span className="text-2xl font-bold text-primary">
            {formatProjectTotalPrice(project)}
          </span>
        </div>

        {/* Property ID Badge */}
        <div className="flex items-center justify-between space-x-4 mb-6">
          <ProjectKeyChip project={project} size={"medium"} />
          <ProjectStatusChip project={project} size={"medium"} />
        </div>

        {/* Investment Progress */}
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Financiado</span>
          <span>Objetivo</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>
            {formatProjectPrice(project.funded ?? 0, project.currency ?? 'US$')}
          </span>
          <span>
            {formatProjectTotalPrice(project)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-primary rounded-full h-2"
            style={{ width: `${((project.funded ?? 0) / (project.total_price ?? 1)) * 100}%` }}
          />
        </div>

        {/* Investment Details */}
        <div className="space-y-3 flex-grow">
          {project.token_price && (
            <div className="flex justify-between">
              <span className="text-gray-600">Precio del token</span>
              <span className="font-medium">
                {currencyFormat(project.token_price ?? 0, 'es-AR', { maximumFractionDigits: 0 })}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Rentabilidad total estimada</span>
            <span className="font-medium">{project.total_interest_rate?.toLocaleString('es-AR')} %</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Rentabilidad anual estimada</span>
            <span className="font-medium">{project.anual_interest_rate?.toLocaleString('es-AR')} %</span>
          </div>
          {project.period && (
            <div className="flex justify-between">
              <span className="text-gray-600">Período de inversión</span>
              <span className="font-medium">{project.period} meses</span>
            </div>
          )}
          {project.start_date && (
            <div className="flex justify-between">
              <span className="text-gray-600">Inicio renta</span>
              <span className="font-medium">
                {
                  new Date(project.start_date).toLocaleDateString('es-AR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })
                }
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-6 bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          onClick={onInvestClick}
        >
          {project.status === "open" ? "Invertir" : "Ver más"}
        </button>
      </div>
    </div>
  )
}

