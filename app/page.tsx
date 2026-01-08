'use client'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import DashboardWidgets from '@/components/DashboardWidgets'
import InventoryTable from '@/components/InventoryTable'
import { PackagePlus, FileText } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 flex flex-col lg:ml-0">
          <Header />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-slate-400">Manage your inventory and track sales</p>
              </div>

              <DashboardWidgets />

              <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  <PackagePlus size={20} />
                  New Entry (Stock In)
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">
                  <FileText size={20} />
                  Generate Daily Rate Card
                </button>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white mb-4">Current Stock</h2>
              </div>

              <InventoryTable />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
