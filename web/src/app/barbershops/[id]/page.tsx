import { MapPinIcon, StarIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { BarbershopWithServices } from '@/@types/barbershop-with-services'
import { api } from '@/lib/api'
import { ServiceCard } from './_components/service-card'
import { Header } from './_components/header'

interface BarbershopProps {
  params: {
    id: string
  }
}

async function getBarbershop(id: string) {
  try {
    const response = await api.get(`/barbershops/${id}`)

    return response.data
  } catch (error) {
    return redirect('/')
  }
}

export default async function BarbershopPage({ params }: BarbershopProps) {
  if (!params.id) {
    return redirect('/')
  }

  const isAuthenticated = cookies().has('token')
  const barbershop: BarbershopWithServices = await getBarbershop(params.id)

  return (
    <div className="flex flex-col flex-1">
      <div className="max-w-[1224px] w-full mx-auto flex flex-col">
        <section className="relative">
          <Header />

          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            width={390}
            height={250}
            className="w-full aspect-video object-cover"
          />

          <div className="px-5 pb-6 mt-3 space-y-3 border-b">
            <h1 className="text-xl font-bold">{barbershop.name}</h1>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm">
                <MapPinIcon size={16} className="text-primary" />{' '}
                {barbershop.address}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <StarIcon size={16} className="text-primary" /> 5,0 (889
                avaliações)
              </span>
            </div>
          </div>
        </section>

        <section className="px-5 pt-6 mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <Button>Serviços</Button>
            <Button variant="outline">Informações</Button>
          </div>

          <div className="flex flex-col gap-3">
            {barbershop.services &&
              barbershop.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isAuthenticated={isAuthenticated}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
