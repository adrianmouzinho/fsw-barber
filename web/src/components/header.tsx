import { cookies } from 'next/headers'
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'

import logoImg from '../assets/logo.svg'
import { Button } from './ui/button'
import { Sheet, SheetTrigger } from './ui/sheet'
import { SideMenu } from './side-menu'

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

          <SideMenu isAuthenticated={isAuthenticated} />
        </Sheet>
      </div>
    </header>
  )
}
