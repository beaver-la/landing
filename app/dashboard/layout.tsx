"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, LogOut, LayoutDashboard, FolderOpen, ArrowDownToLine, ArrowUpFromLine, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import MobileNavBar from "@/components/MobileNavBar"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:block w-52 bg-white shadow-md">
        <div className="p-4">
          <Link href="/dashboard">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beaver_positivo_color-a02GIsj5SqKONhZEblyIhVvh3Ws07z.png"
              alt="Beaver Logo"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </Link>
        </div>
        <nav className="mt-6">
          {[
            { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { href: "/dashboard/proyectos", icon: FolderOpen, label: "Proyectos" },
            { href: "/dashboard/ingresar", icon: ArrowDownToLine, label: "Ingresar" },
            { href: "/dashboard/retirar", icon: ArrowUpFromLine, label: "Retirar" },
            { href: "/dashboard/ajustes", icon: Settings, label: "Ajustes" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 ${
                pathname === item.href ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-[#F0F4F7] px-3 py-1 rounded-md">
                  <Image src="/tether-icon.svg" alt="USDT" width={20} height={20} />
                  <span className="text-lg font-bold text-primary">5,678.90</span>
                  <span className="text-sm text-gray-500 hidden sm:inline">Saldo</span>
                </div>
                <span className="text-sm text-gray-500 md:hidden">Saldo</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-primary font-medium hidden sm:inline">Bienvenido, Juan</span>
                <div className="flex items-center space-x-4 md:space-x-2">
                  <Bell className="h-6 w-6 text-gray-400 cursor-pointer" />
                  <LogOut className="h-6 w-6 text-gray-400 cursor-pointer md:block hidden" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </main>
        {/* Mobile Navigation Bar */}
        <MobileNavBar />
      </div>
    </div>
  )
}

