import { FastifyInstance } from 'fastify'
import { db } from '../../db/connection'

export async function bookingsRoutes(app: FastifyInstance) {
  app.get('/bookings', async () => {
    const bookings = await db.query.bookings.findMany()

    return bookings
  })
}
