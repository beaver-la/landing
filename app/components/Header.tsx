'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/img/beaver.svg"
              alt="Beaver Logo"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className={isActive('/') ? 'active' : ''}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/como-funciona"
                className={isActive('/como-funciona') ? 'active' : ''}
              >
                Cómo funciona
              </Link>
            </li>

            <li>
              <Link
                href="/proyectos"
                className={isActive('/proyectos') ? 'active' : ''}
              >
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-buttons">
            <Link
                href="https://app.beaver.la/auth/login"
                className="btn-login"
              >
                Iniciar sesión
              </Link>
              <Link
                href="https://app.beaver.la/auth/sign-up"
                className="btn-register"
              >
                Registrarse
              </Link>
        </div>
      </div>
    </header>
  )
}

