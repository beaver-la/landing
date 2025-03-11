"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import Image from "next/image"

// Datos de ejemplo para las gráficas
const monthlyReturns = [
  { name: "Ene", return: 4000 },
  { name: "Feb", return: 3000 },
  { name: "Mar", return: 2000 },
  { name: "Abr", return: 2780 },
  { name: "May", return: 1890 },
  { name: "Jun", return: 2390 },
]

const investmentDistribution = [
  { name: "Estados Unidos", value: 400 },
  { name: "España", value: 300 },
  { name: "Argentina", value: 300 },
  { name: "México", value: 200 },
]

const COLORS = ["#003D3A", "#008883", "#A5CDCE", "#9AABAC"]

const calculatePercentage = (value: number) => {
  const total = investmentDistribution.reduce((sum, item) => sum + item.value, 0)
  return ((value / total) * 100).toFixed(2)
}

export default function UserHome() {
  const total = investmentDistribution.reduce((sum, item) => sum + item.value, 0)
  return (
    <div className="scale-90 origin-top-left">
      <div className="mb-6"></div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Capital Invertido Total</h3>
          <div className="flex items-center space-x-2">
            <Image src="/tether-icon.svg" alt="USDT" width={24} height={24} />
            <p className="text-lg font-bold text-primary">2,345,678.90</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Rendimiento Promedio</h3>
          <p className="text-lg font-bold text-primary">12.5%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Ingresos pasivos mensuales</h3>
          <div className="flex items-center space-x-2">
            <Image src="/tether-icon.svg" alt="USDT" width={24} height={24} />
            <p className="text-lg font-bold text-primary">19,547.25</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Rendimientos distribuidos totales</h3>
          <div className="flex items-center space-x-2">
            <Image src="/tether-icon.svg" alt="USDT" width={24} height={24} />
            <p className="text-lg font-bold text-primary">351,851.84</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Rendimientos Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyReturns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="return" fill="#004D40" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Distribución de Inversiones</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={investmentDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value, percent }) => `${name}: ${percent.toFixed(0)}%`}
              >
                {investmentDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${(((value as number) / total) * 100).toFixed(2)}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

