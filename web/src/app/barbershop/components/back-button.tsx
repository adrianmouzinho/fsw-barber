'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function BackButton() {
  const router = useRouter()
  return (
    <Button variant="secondary" size="icon" onClick={() => router.replace('/')}>
      <ChevronLeft className="size-5" />
    </Button>
  )
}
