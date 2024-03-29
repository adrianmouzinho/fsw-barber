import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ptBR } from 'date-fns/locale/pt-BR'
import { generateTimeOfDayList } from '../_utils/hours'

export function CreateBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const times = generateTimeOfDayList(new Date())

  return (
    <SheetContent className="p-0">
      <SheetHeader className="px-5 py-6 border-b">
        <SheetTitle className="text-left">Fazer Reserva</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col divide-y h-full">
        <div className="py-6 px-5">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="p-0"
            locale={ptBR}
            fromDate={new Date()}
            styles={{
              head_cell: {
                width: '100%',
              },
              cell: {
                width: '100%',
              },
              button: {
                width: '36px',
                height: '36px',
                borderRadius: '100%',
              },
              nav_button_next: {
                borderRadius: '8px',
              },
              nav_button_previous: {
                borderRadius: '8px',
              },
              caption_label: {
                textTransform: 'capitalize',
              },
            }}
          />
        </div>
        {date && (
          <div className="py-6 px-5 flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {times.map((time) => (
              <span
                key={time}
                className="py-2 px-4 text-xs border rounded-full"
              >
                {time}
              </span>
            ))}
          </div>
        )}
        <div className="py-6 px-5 flex-1">oi</div>
      </div>
    </SheetContent>
  )
}
