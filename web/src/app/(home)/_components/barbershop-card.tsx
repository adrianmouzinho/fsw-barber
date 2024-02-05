'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Barbershop } from '@/@types/barbershop'

interface BarbershopCardProps {
  barbershop: Barbershop
}

export function BarbershopCard({ barbershop }: BarbershopCardProps) {
  const router = useRouter()

  return (
    <Card className="rounded-2xl">
      <CardContent className="p-0">
        <div className="relative max-w-[168px] w-full p-1 flex flex-col">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            width={160}
            height={160}
            className="min-w-40 min-h-40 mb-2 rounded-2xl object-cover"
          />
          <span className="absolute top-2 left-2 w-fit py-1.5 px-2.5 flex items-center gap-0.5 text-xs font-bold bg-[#221C3D]/70 backdrop-blur-[3px] rounded-full">
            <StarIcon className="text-primary size-3 fill-primary" /> 5,0
          </span>
          <div className="px-2 pb-2 flex flex-col gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="font-bold truncate">{barbershop.name}</h3>
              <p className="text-xs text-zinc-400">{barbershop.address}</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => router.push(`barbershops/${barbershop.id}`)}
            >
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
