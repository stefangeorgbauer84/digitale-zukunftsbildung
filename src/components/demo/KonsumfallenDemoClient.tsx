'use client'

import dynamic from 'next/dynamic'

const KonsumfallenDemo = dynamic(
  () => import('./KonsumfallenDemo').then(m => m.KonsumfallenDemo),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#4a2d8a] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
)

export default function KonsumfallenDemoClient() {
  return <KonsumfallenDemo />
}
