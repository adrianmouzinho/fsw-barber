import { getUser } from '@/lib/auth'

interface WelcomeProps {
  isAuthenticated: boolean
}

export function Welcome({ isAuthenticated }: WelcomeProps) {
  if (!isAuthenticated) {
    return (
      <span className="text-xl leading-tight">
        Olá, <span className="font-bold">Faça seu Login!</span>
      </span>
    )
  }

  const { name } = getUser()

  return (
    <span className="text-xl leading-tight">
      Olá, <span className="font-bold">{name}!</span>
    </span>
  )
}
