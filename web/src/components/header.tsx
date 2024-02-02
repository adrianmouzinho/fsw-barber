import { cookies } from 'next/headers'
import Image from 'next/image'
import { MenuIcon, HomeIcon, CalendarDaysIcon } from 'lucide-react'

import logoImg from '../assets/logo.svg'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { SignIn } from './sign-in'
import { Profile } from './profile'

export function Header() {
  const isAuthenticated = cookies().has('token')

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
              {isAuthenticated ? <Profile /> : <SignIn />}

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
