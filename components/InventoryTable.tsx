'use client'

interface InventoryItem {
  id: number
  itemName: string
  sackWeight: string
  quantity: number
  avgBuyingPrice: number
  sellingRate: number
  status: 'In Stock' | 'Low Stock'
}

const mockData: InventoryItem[] = [
  {
    id: 1,
    itemName: 'Miniket Rice',
    sackWeight: '50kg',
    quantity: 320,
    avgBuyingPrice: 2800,
    sellingRate: 2950,
    status: 'In Stock'
  },
  {
    id: 2,
    itemName: 'Paijam Rice',
    sackWeight: '50kg',
    quantity: 245,
    avgBuyingPrice: 2650,
    sellingRate: 2800,
    status: 'In Stock'
  },
  {
    id: 3,
    itemName: 'Nazirshail Rice',
    sackWeight: '50kg',
    quantity: 180,
    avgBuyingPrice: 3200,
    sellingRate: 3350,
    status: 'In Stock'
  },
  {
    id: 4,
    itemName: 'Aata (Wheat Flour)',
    sackWeight: '50kg',
    quantity: 95,
    avgBuyingPrice: 2400,
    sellingRate: 2550,
    status: 'Low Stock'
  },
  {
    id: 5,
    itemName: 'Soybean Oil',
    sackWeight: '25kg',
    quantity: 420,
    avgBuyingPrice: 3200,
    sellingRate: 3400,
    status: 'In Stock'
  },
  {
    id: 6,
    itemName: 'Mosur Dal',
    sackWeight: '50kg',
    quantity: 65,
    avgBuyingPrice: 1800,
    sellingRate: 1950,
    status: 'Low Stock'
  },
  {
    id: 7,
    itemName: 'Mashkalai Dal',
    sackWeight: '50kg',
    quantity: 150,
    avgBuyingPrice: 2200,
    sellingRate: 2350,
    status: 'In Stock'
  },
  {
    id: 8,
    itemName: 'Chola Dal',
    sackWeight: '50kg',
    quantity: 110,
    avgBuyingPrice: 1900,
    sellingRate: 2050,
    status: 'In Stock'
  },
]

export default function InventoryTable() {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Item Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Sack Weight
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Quantity (Bosta)
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Avg Buying Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Selling Rate
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {mockData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-700/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{item.itemName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300">{item.sackWeight}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300">{item.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300">৳ {item.avgBuyingPrice.toLocaleString('en-BD')}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">৳ {item.sellingRate.toLocaleString('en-BD')}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'In Stock'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
