import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MobileMenu from "@/components/MobileMenu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beaver",
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
      <body className={inter.className}>
        <MobileMenu />
        {children}
      </body>
    </html>
  )
}



import './globals.css'