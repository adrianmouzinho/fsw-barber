import { LogOutIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  const avatarFallback = name
    .trim()
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('')
    .substring(0, 2)

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <span className="font-bold">{name}</span>
      </div>

      <Button variant="secondary" size="icon" asChild>
        <a href="/api/auth/logout">
          <LogOutIcon className="size-4" />
        </a>
      </Button>
    </div>
  )
}
