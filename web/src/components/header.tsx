import Image from 'next/image'
import { MenuIcon } from 'lucide-react'

import logoImg from '../assets/logo.svg'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-[1224px] w-full mx-auto px-5 py-6 flex justify-between">
        <Image src={logoImg} alt="Logo da FSW Barber" width={130} height={22} />

        <Button variant="ghost" size="icon">
          <MenuIcon size={20} />
        </Button>
      </div>
    </header>
  )
}
