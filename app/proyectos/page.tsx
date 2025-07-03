"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X } from "lucide-react"
import ProjectCard from "@/components/ProjectCard"
import WhatsAppButton from "@/components/WhatsAppButton"
import axios from "axios"

export interface Project {
  id?: number;
  name: string;
  key: string;
  description?: string;
  location?: {country_id: string};
  total_price?: number;
  currency?: string;
  funded?: number;
  token_price?: number;
  anual_interest_rate?: number;
  total_interest_rate?: number;
  start_date?: string;
  end_date?: string;
  period?: number;
  finalized_at?: string;
  created_at?: string;

  investment_type_id: string;

  status: string;
  images?: {id: string; order: number; file?: any;}[];
}

export type SortBy = 'recommended' | 'lowToHigh' | 'highToLow';

const sortByOptions: { value: SortBy; label: string }[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'lowToHigh', label: 'Returns Low-High' },
  { value: 'highToLow', label: 'Returns High-Low' }
];

const PROJECT_STATUS_ORDER: any = {
  open: 0,
  in_exploitation: 1,
  work_in_progress: 2,
  financed: 3,
  closed: 4,
  pending: 5
};

export default function ProjectsPage() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = React.useState<'recommended' | 'lowToHigh' | 'highToLow'>('recommended');

  const [showModal, setShowModal] = useState(false);

  const handleInvestClick = () => {
    setShowModal(true)
  }

  const filterAndSortProjects = (projectsList: Project[], sort: any, text?: string) => {
    let filteredAndSortedProjects = [...projectsList];
    if (text) {
      const regex = new RegExp(text, 'i');
      filteredAndSortedProjects = projectsList.filter((p: Project) => (text ? regex.test(p.name) : true));
    }

    switch (sort) {
      case 'recommended':
        filteredAndSortedProjects = filteredAndSortedProjects.sort((a: Project, b: Project) => {
          const statusA = PROJECT_STATUS_ORDER[a.status];
          const statusB = PROJECT_STATUS_ORDER[b.status];

          if (statusA !== statusB) {
            return statusA - statusB; // menor valor va primero
          }

          // Si tienen el mismo status, ordenamos por interest_rate de mayor a menor
          return (b.total_interest_rate ?? 0) - (a.total_interest_rate ?? 0);
        });
        break;
      case 'lowToHigh':
        filteredAndSortedProjects = filteredAndSortedProjects.sort(
          (a: Project, b: Project) => (a.total_interest_rate ?? 0) - (b.total_interest_rate ?? 0)
        );
        break;
      case 'highToLow':
        filteredAndSortedProjects = filteredAndSortedProjects.sort(
          (a: Project, b: Project) => (b.total_interest_rate ?? 0) - (a.total_interest_rate ?? 0)
        );
        break;
    }

    setFilteredProjects(filteredAndSortedProjects);
  };

  const getData = async () => {
    const res = await axios.get('https://api.beaver.la/projects/all/');
    const p = res.data?.filter((p: Project) => p.status !== 'pending');
    setProjects(p);
    return p;
  } 

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    filterAndSortProjects(projects, sortBy, searchQuery);
  }, [projects, searchQuery, sortBy]);

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
              <Link href="https://app.beaver.la/auth/login" className="nav-button nav-button-primary">
                Iniciar sesión
              </Link>
              <Link href="https://app.beaver.la/auth/sign-up" className="nav-button nav-button-secondary" style={{ marginLeft: '8px' }}>
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
            Mostrando {filteredProjects.length} de {projects.length} inmuebles
          </h1>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
            >
              {sortByOptions.map((sb: any) => (<option key={sb.value} id={sb.value} value={sb.value}>{sb.label}</option>))}
            </select>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects && filteredProjects?.map((project: Project) => (
            <ProjectCard key={project.id} project={project} onInvestClick={handleInvestClick} />
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
              href="https://app.beaver.la/auth/sign-up"
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

