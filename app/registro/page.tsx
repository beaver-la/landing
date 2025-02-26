"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye } from "lucide-react"
import WhatsAppButton from "../components/WhatsAppButton"

const countries = [
  { code: "54", name: "Argentina" },
  { code: "55", name: "Brasil" },
  { code: "56", name: "Chile" },
  { code: "57", name: "Colombia" },
  { code: "593", name: "Ecuador" },
  { code: "52", name: "México" },
  { code: "51", name: "Perú" },
  { code: "598", name: "Uruguay" },
  { code: "58", name: "Venezuela" },
  // Add more countries as needed
]

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("54")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "")
    e.target.value = value
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center">
          {/* Form */}
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">
              Iniciemos tu proceso para registrarte como usuario!
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Ingresa tu apellido"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Ingresa tu correo electrónico"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Te enviaremos un código de validación al correo indicado, por favor verifica que sea correcto.
                </p>
              </div>

              <div>
                <label htmlFor="confirmar-email" className="block text-sm font-medium text-gray-700">
                  Confirmar correo electrónico *
                </label>
                <input
                  type="email"
                  id="confirmar-email"
                  name="confirmar-email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Ingresa la confirmación de tu correo"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Número de teléfono *
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        +{country.code} {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement
                      target.value = target.value.replace(/[^0-9]/g, "")
                    }}
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">Solo por motivos de seguridad</p>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña *
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary pr-10 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="codigo-referido" className="block text-sm font-medium text-gray-700">
                  Código de referido (Opcional)
                </label>
                <input
                  type="text"
                  id="codigo-referido"
                  name="codigo-referido"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Ingresa tu código de referido"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Si te corresponde puedes solicitarle el código de referido a tu agente de bienes raíces o asesor
                  financiero.
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Registrate como Inversor
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">¿Ya tienes una cuenta? </span>
              <Link href="/login" className="text-sm text-blue-600 hover:text-blue-500">
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}

