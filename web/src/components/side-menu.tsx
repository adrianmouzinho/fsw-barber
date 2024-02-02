import Link from 'next/link'
import { CalendarDaysIcon, HomeIcon } from 'lucide-react'

import { SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { Button } from './ui/button'
import { Profile } from './profile'
import { SignIn } from './sign-in'

interface SideMenuProps {
  isAuthenticated: boolean
}

export function SideMenu({ isAuthenticated }: SideMenuProps) {
  return (
    <SheetContent className="p-0">
      <SheetHeader className="px-5 py-6 border-b">
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="px-5 py-6 flex flex-col gap-6">
        {isAuthenticated ? <Profile /> : <SignIn />}

        <div className="flex flex-col gap-3">
          <Button variant="outline" className="justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon className="size-4" /> Início
            </Link>
          </Button>
          <Button variant="outline" className="justify-start gap-2" asChild>
            <Link href="/bookings">
              <CalendarDaysIcon className="size-4" /> Agendamentos
            </Link>
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}
