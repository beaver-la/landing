import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import '../styles/landing.css'
import MobileHeader from "./components/MobileHeader"
import Header from "./components/Header"
import WhatsAppButton from "./components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Beaver - Invertí simple',
  description: "Professional services platform",
  generator: "v0.dev",
  icons: [{ rel: "icon", url: "favicon.png" }, { rel: "icon", url: "favicon.png", media: "(prefers-color-scheme: light)" }, { rel: "icon", url: "favicon.png", media: "(prefers-color-scheme: dark)" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <MobileHeader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}



import './globals.css'


