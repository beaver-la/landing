"use client"

import Link from "next/link"
import { LayoutDashboard, FolderOpen, ArrowDownToLine, ArrowUpFromLine, Settings } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Inicio" },
  { href: "/dashboard/proyectos", icon: FolderOpen, label: "Proyectos" },
  { href: "/dashboard/ingresar", icon: ArrowDownToLine, label: "Ingresar" },
  { href: "/dashboard/retirar", icon: ArrowUpFromLine, label: "Retirar" },
  { href: "/dashboard/ajustes", icon: Settings, label: "Ajustes" },
]

export default function MobileNavBar() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex flex-col items-center p-2 ${pathname === item.href ? "text-primary" : "text-gray-500"}`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

