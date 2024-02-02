import Image from 'next/image'
import {
  MenuIcon,
  CircleUser,
  LogInIcon,
  HomeIcon,
  CalendarDaysIcon,
} from 'lucide-react'

import logoImg from '../assets/logo.svg'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-[1224px] w-full mx-auto px-5 py-6 flex justify-between">
        <Image src={logoImg} alt="Logo da FSW Barber" width={130} height={22} />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SheetHeader className="px-5 py-6 border-b">
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="px-5 py-6 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <CircleUser className="size-10 text-zinc-500 stroke-[1.5]" />
                  <span className="font-bold">Olá. Faça seu login!</span>
                </div>
                <Button
                  variant="secondary"
                  className="justify-start gap-2"
                  asChild
                >
                  <a
                    href={`https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email`}
                  >
                    <LogInIcon className="size-4" /> Fazer Login
                  </a>
                </Button>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start gap-2">
                  <HomeIcon className="size-4" /> Início
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <CalendarDaysIcon className="size-4" /> Agendamentos
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
