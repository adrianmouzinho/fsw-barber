import { CircleUserIcon, LogInIcon } from 'lucide-react'

import { Button } from './ui/button'

export function SignIn() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <CircleUserIcon className="size-10 text-zinc-500 stroke-[1.5]" />
        <span className="font-bold">Olá. Faça seu login!</span>
      </div>
      <Button variant="secondary" className="justify-start gap-2" asChild>
        <a
          href={`https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email`}
        >
          <LogInIcon className="size-4" /> Fazer Login
        </a>
      </Button>
    </div>
  )
}
