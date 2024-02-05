import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { cookies } from 'next/headers'

import { BookingCard } from '@/components/booking-card'
import { Header } from '@/components/header'
import { Welcome } from '@/components/welcome'
import { BarbershopCard } from './_components/barbershop-card'
import { Search } from './_components/search'
import { api } from '@/lib/api'
import { Barbershop } from '@/@types/barbershop'

async function getBarbershops() {
  const response = await api.get('/barbershops')

  return response.data
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  const today = format(new Date(), "EEEE',' d 'de' y", { locale: ptBR })

  const barbershops: Barbershop[] = await getBarbershops()

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <section>
        <div className="max-w-[1224px] w-full mx-auto mt-6 flex flex-col gap-8">
          <div className="space-y-6 px-5">
            <div className="flex flex-col gap-1">
              <Welcome isAuthenticated={isAuthenticated} />
              <span className="text-sm">
                {today.replace(today[0], today[0].toUpperCase())}
              </span>
            </div>
            <Search />
          </div>

          <div className="space-y-5 mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase text-zinc-400 mb-3 px-5">
                AGENDAMENTOS
              </h2>
              <div className="flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                <BookingCard />
                <BookingCard />
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase text-zinc-400 mb-3 px-5">
                RECOMENDADOS
              </h2>
              <div className="flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {barbershops.map((barbershop) => (
                  <BarbershopCard key={barbershop.id} barbershop={barbershop} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
