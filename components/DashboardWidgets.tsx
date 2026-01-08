'use client'

import { Package, TrendingUp, AlertCircle, Wallet } from 'lucide-react'

interface WidgetProps {
  title: string
  value: string
  icon: React.ElementType
  highlight?: 'red' | 'green'
}

function Widget({ title, value, icon: Icon, highlight }: WidgetProps) {
  const highlightClass = highlight === 'red' 
    ? 'bg-red-500/10 border-red-500/20 text-red-400' 
    : highlight === 'green'
    ? 'bg-green-500/10 border-green-500/20 text-green-400'
    : 'bg-slate-800 border-slate-700 text-slate-300'

  return (
    <div className={`p-6 rounded-lg border ${highlightClass}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400">{title}</h3>
        <Icon size={20} className="opacity-50" />
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Widget
        title="Total Stock"
        value="1,245 Bosta"
        icon={Package}
      />
      <Widget
        title="Today's Sale"
        value="৳ 2,45,000"
        icon={TrendingUp}
      />
      <Widget
        title="Total Due/Baki"
        value="৳ 1,85,500"
        icon={AlertCircle}
        highlight="red"
      />
      <Widget
        title="Cash in Hand"
        value="৳ 5,20,000"
        icon={Wallet}
        highlight="green"
      />
    </div>
  )
}
