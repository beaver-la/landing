"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/img/ib01.webp',
  '/img/ib02.webp',
  '/img/ib03.webp',
  '/img/ib04.webp',
  '/img/ib05.webp',
  '/img/ib06.webp',
  '/img/ib07.webp',
]

export default function Home() {
  const [randomImage, setRandomImage] = useState<string | null>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length)
    setRandomImage(images[randomIndex])
  }, [])

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h1>
                Invertí en Real Estate tokenizado de forma Simple y Segura.
              </h1>
              <p>
                Hacé crecer tu dinero invirtiendo en propiedades tokenizadas
                con retornos estables. Accedé desde tu moneda local y
                diversificá sin complicaciones.
              </p>
              <Link
                href="https://app.beaver.la/auth/login"
                className="btn-banner"
              >
                Comenzar ahora
              </Link>
            </div>

            <div className="banner-image">
              {randomImage && (
                <Image
                  src={randomImage}
                  alt="Investment"
                  width={650}
                  height={550}
                  className="loaded"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT TYPES ================= */}
      <section className="investment-types">
        <div className="container">
          <div className="investment-types-content">
            <h2 className="investment-types-title">
              Conocé<br />
              todos los tipos<br />
              de inversión<br />
              disponibles
            </h2>

            <div className="investment-cards">
              <div className="investment-card">
                <span className="material-icons">
                  trending_up
                </span>
                <h3>PLUSVALÍA</h3>
                <p className="card-description">
                  Comprar, reformar y vender
                </p>
                <p className="card-term">
                  Corto plazo: 12 a 36 meses
                </p>
              </div>

              <div className="investment-card">
                <span className="material-icons">
                  real_estate_agent
                </span>
                <h3>RENTA</h3>
                <p className="card-description">
                  Comprar, alquilar y vender
                </p>
                <p className="card-term">
                  Medio plazo: 3 a 5 años
                </p>
              </div>

              <div className="investment-card">
                <span className="material-icons">
                  payments
                </span>
                <h3>INTERÉS</h3>
                <p className="card-description">
                  Préstamos al promotor del proyecto
                </p>
                <p className="card-term">
                  Plazo: variable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="process-steps">
        <div className="container">
          <div className="process-steps-content">
            <h2 className="process-steps-title">
              Comenzá el<br />
              proceso en 3<br />
              simples pasos
            </h2>

            <div className="process-cards">
              <div className="process-card">
                <Image
                  src="/img/pa1.webp"
                  alt="Paso 1 - Creá tu cuenta"
                  width={300}
                  height={300}
                />
              </div>

              <div className="process-card">
                <Image
                  src="/img/pa2.webp"
                  alt="Paso 2 - Descubrí el proyecto"
                  width={300}
                  height={300}
                />
              </div>

              <div className="process-card">
                <Image
                  src="/img/pa3.webp"
                  alt="Paso 3 - Empezá a operar"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="process-cta">
            <button className="btn-process">
              Registrate acá
            </button>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="community">
        <div className="container">
          <div className="community-content">
            <div className="community-image">
              <Image
                src="/img/like.webp"
                alt="Unite a nuestra comunidad"
                width={220}
                height={220}
              />
            </div>

            <div className="community-text">
              <h2>Unite a nuestra comunidad</h2>
              <p>
                Formá parte de una comunidad de inversores que accede a
                oportunidades exclusivas en real estate tokenizado.
                Conectate, aprendé y obtené rentabilidades atractivas
                con total seguridad y transparencia.
              </p>

              <div className="social-icons">
                <a href="#" target="_blank" aria-label="Telegram">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg"
                    alt="Telegram"
                    width={32}
                    height={32}
                  />
                </a>

                <a href="#" target="_blank" aria-label="Discord">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg"
                    alt="Discord"
                    width={32}
                    height={32}
                  />
                </a>

                <a href="#" target="_blank" aria-label="Instagram">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </a>

                <a href="#" target="_blank" aria-label="LinkedIn">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container">
          <a
            href="https://estudio3.ar"
            target="_blank"
          >
            Desarrollado por Estudio 3
          </a>
        </div>
      </footer>
    </>
  )
}