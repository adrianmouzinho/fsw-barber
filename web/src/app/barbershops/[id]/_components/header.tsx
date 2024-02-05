import { cookies } from 'next/headers'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { SideMenu } from '@/components/side-menu'
import { BackButton } from './back-button'

export function Header() {
  const isAuthenticated = cookies().has('token')

  return (
    <div className="absolute w-full px-5 py-6 top-0 left-0 flex items-center justify-between">
      <BackButton />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon">
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>

        <SideMenu isAuthenticated={!!isAuthenticated} />
      </Sheet>
    </div>
  )
}
