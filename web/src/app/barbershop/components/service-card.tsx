import Image from 'next/image'

import { Service } from '@/@types/service'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/utils/format-price'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const price = formatPrice(service.priceInCents)

  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={110}
            height={110}
            className="w-[110px] h-[110px] rounded-lg object-cover"
          />

          <div className="flex-1 flex flex-col gap-1.5">
            <div className="space-y-1">
              <h3 className="text-sm font-bold">{service.name}</h3>
              <p className="text-sm text-zinc-400">{service.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary">{price}</span>
              <Button variant="secondary">Reservar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
