import { FastifyInstance } from 'fastify'
import { db } from '../../db/connection'

export async function barbershopsRoutes(app: FastifyInstance) {
  app.get('/barbershops', async () => {
    const barbershops = await db.query.barbershops.findMany()

    return barbershops
  })
}
