"use client"

import { useState } from "react"
import { Bell, Lock, Globe, Moon, Sun, CreditCard, HelpCircle } from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("Español")
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Ajustes</h1>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {/* Cuenta */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Cuenta</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-400 mr-3" />
                <span>Cambiar contraseña</span>
              </div>
              <button className="text-primary hover:text-primary-dark">Cambiar</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                <span>Métodos de pago</span>
              </div>
              <button className="text-primary hover:text-primary-dark">Gestionar</button>
            </div>
          </div>
        </div>

        {/* Preferencias */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Preferencias</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-gray-400 mr-3" />
                <span>Idioma</span>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option>Español</option>
                <option>English</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {darkMode ? (
                  <Moon className="h-5 w-5 text-gray-400 mr-3" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-400 mr-3" />
                )}
                <span>Modo oscuro</span>
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div
                    className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                      darkMode ? "transform translate-x-full bg-primary" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-400 mr-3" />
                <span>Notificaciones</span>
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div
                    className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                      notifications ? "transform translate-x-full bg-primary" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Ayuda y soporte */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Ayuda y soporte</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 text-gray-400 mr-3" />
                <span>Centro de ayuda</span>
              </div>
              <button className="text-primary hover:text-primary-dark">Visitar</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-400 mr-3" />
                <span>Contactar soporte</span>
              </div>
              <button className="text-primary hover:text-primary-dark">Contactar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

