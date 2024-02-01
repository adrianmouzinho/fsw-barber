import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { db } from '../../db/connection'

export async function barbershopsRoutes(app: FastifyInstance) {
  app.get('/barbershops', async () => {
    const barbershops = await db.query.barbershops.findMany()

    return barbershops
  })

  app.get('/barbershops/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().cuid2(),
    })

    const { id } = paramsSchema.parse(request.params)

    const barbershop = await db.query.barbershops.findFirst({
      where(fields, { eq }) {
        return eq(fields.id, id)
      },
      columns: {
        createdAt: false,
        updatedAt: false,
      },
      with: {
        services: {
          columns: {
            createdAt: false,
            updatedAt: false,
          },
        },
      },
    })

    if (!barbershop) {
      throw new Error('Barbershop not found.')
    }

    return barbershop
  })
}
