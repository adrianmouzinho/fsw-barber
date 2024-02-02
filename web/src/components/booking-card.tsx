import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function BookingCard() {
  return (
    <Card className="min-w-full sm:min-w-[350px] sm:max-w-[350px]">
      <CardContent className="p-0">
        <div className="grid grid-cols-[auto_106px] divide-x">
          <div className="p-3">
            <span className="block w-fit mb-3 py-0.5 px-2 text-xs font-bold text-primary bg-[#221C3D] rounded-full">
              Confirmado
            </span>
            <h3 className="mb-2 font-bold truncate">Corte de Cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://github.com/adrianmouzinho.png"
                  alt="Adrian Mouzinho"
                />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <span className="text-sm truncate">Vintage Barber</span>
            </div>
          </div>

          <div className="p-3 flex flex-col items-center justify-center">
            <span className="text-sm">Fevereiro</span>
            <span className="text-2xl leading-tight">06</span>
            <span className="text-sm">09:45</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
