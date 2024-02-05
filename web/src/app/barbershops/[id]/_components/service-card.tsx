'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Service } from '@/@types/service'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/utils/format-price'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { CreateBooking } from './create-booking'

interface ServiceCardProps {
  service: Service
  isAuthenticated: boolean
}

export function ServiceCard({ service, isAuthenticated }: ServiceCardProps) {
  const router = useRouter()

  const price = formatPrice(service.priceInCents)

  function handleBookService() {
    if (!isAuthenticated) {
      return router.push(
        `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email`,
      )
    }
  }

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
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" onClick={handleBookService}>
                    Reservar
                  </Button>
                </SheetTrigger>

                <CreateBooking />
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
