import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

type User = {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser() {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = jwtDecode(token)

  return user
}
