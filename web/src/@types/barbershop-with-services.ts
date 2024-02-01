import { Service } from './service'

export type BarbershopWithServices = {
  id: string
  name: string
  address: string
  description: string
  imageUrl: string
  services: Service[]
}
