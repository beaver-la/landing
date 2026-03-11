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

export default function ComoFunciona() {
  const [randomImage, setRandomImage] = useState<string | null>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length)
    setRandomImage(images[randomIndex])
  }, [])

  return (
    <>
      {/* BANNER */}
      <section className="banner como-funciona-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <div className="como-funciona-kicker">
                Cómo funciona
              </div>

              <h1>
                La tecnología
                <br />
                que abre el acceso
                <br />
                al real estate
              </h1>

              <p>
                Beaver utiliza un modelo de{' '}
                <strong>tokenización de activos</strong> para transformar
                inversiones inmobiliarias en{' '}
                <strong>participaciones digitales accesibles</strong>.
                <br />
                Esto permite dividir proyectos inmobiliarios en pequeñas
                fracciones, haciendo posible que{' '}
                <strong>más personas puedan invertir</strong> en oportunidades
                que antes requerían grandes capitales.
              </p>
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

      {/* CONTENT */}
      <section className="como-funciona-content">
        <div className="container">
          <div className="como-funciona-grid">
            <div className="como-funciona-card como-funciona-card--light">
              <span
                className="material-icons como-funciona-icon"
                aria-hidden="true"
              >
                paid
              </span>

              <h2>
                Qué significa
                <br />
                tokenizar un activo
              </h2>

              <p>
                Cuando un proyecto inmobiliario se tokeniza, su valor se divide
                en múltiples participaciones digitales. Cada inversor puede
                adquirir una o varias de estas participaciones y acceder
                proporcionalmente a los ingresos generados por el proyecto.
                De esta forma, la tecnología permite simplificar la inversión,
                mejorar la transparencia y facilitar la administración de cada
                participación.
              </p>
            </div>

            <div className="como-funciona-card como-funciona-card--dark">
              <span
                className="material-icons como-funciona-icon"
                aria-hidden="true"
              >
                verified_user
              </span>

              <h2>
                Transparencia
                <br />
                y control
              </h2>

              <p>
                A través de la plataforma de Beaver, los inversores pueden
                acceder a la información de cada proyecto, realizar su
                inversión y seguir su evolución desde un solo lugar.
                La tecnología permite gestionar las participaciones de forma
                clara, ordenada y transparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="como-funciona-cta">
        <div className="container">
          <div className="como-funciona-cta-inner">
            <div>
              <span
                className="material-icons como-funciona-cta-icon"
                aria-hidden="true"
              >
                trending_up
              </span>

              <h2>
                Invertí en oportunidades
                <br />
                que ahora están
                <br />
                a tu alcance
              </h2>
            </div>

            <p>
              Tradicionalmente, invertir en real estate requiere grandes montos
              de capital y procesos complejos. Gracias a la tokenización, podés
              acceder a proyectos de real estate desde USD 100, de forma simple
              y digital, sin necesidad de conocimientos financieros ni
              tecnológicos. Beaver ofrece alternativas de inversión con tasas
              competitivas, desde fondos con liquidez inmediata hasta
              inversiones inmobiliarias tokenizadas de mayor plazo y
              rendimiento.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

