'use client'

import { 
  LayoutDashboard, 
  PackagePlus, 
  PackageMinus, 
  Users, 
  FileText, 
  Settings,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: PackagePlus, label: 'Stock In', href: '/stock-in' },
  { icon: PackageMinus, label: 'Stock Out', href: '/stock-out' },
  { icon: Users, label: 'Party List', href: '/party-list' },
  { icon: FileText, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-slate-800 border-r border-slate-700
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-slate-700">
            <h1 className="text-2xl font-bold text-white">Uprokritoo</h1>
            <p className="text-sm text-slate-400 mt-1">Inventory Management</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>

        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </aside>
    </>
  )
}
