'use client'

import { Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Uprokritoo</h2>
          <p className="text-sm text-slate-400">Wholesale Business</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors">
            <User size={20} />
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  )
}
