import { format } from 'date-fns'

import { BookingCard } from '@/components/booking-card'
import { Header } from '@/components/header'
import { Search } from './components/search'
import { BarbershopCard } from './components/barbershop-card'
import { ptBR } from 'date-fns/locale/pt-BR'

export default function Home() {
  const today = format(new Date(), "EEEE',' d 'de' y", { locale: ptBR })

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <section>
        <div className="max-w-[1224px] w-full mx-auto mt-6 px-5 flex flex-col gap-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-xl leading-tight">
                Olá, <span className="font-bold">Miguel!</span>
              </span>
              <span className="text-sm">
                {today.replace(today[0], today[0].toUpperCase())}
              </span>
            </div>
            <Search />
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="text-xs font-bold uppercase text-zinc-400 mb-3">
                AGENDAMENTOS
              </h2>
              <div className="space-y-4">
                <BookingCard />
                <BookingCard />
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase text-zinc-400 mb-3">
                RECOMENDADOS
              </h2>
              <div className="flex flex-wrap gap-4">
                <BarbershopCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
