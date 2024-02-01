'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Header() {
  const router = useRouter()
  return (
    <div className="absolute w-full px-5 py-6 top-0 left-0 flex items-center justify-between">
      <Button
        variant="secondary"
        size="icon"
        onClick={() => router.replace('/')}
      >
        <ChevronLeft size={20} />
      </Button>

      <Button variant="secondary" size="icon">
        <MenuIcon size={20} />
      </Button>
    </div>
  )
}
