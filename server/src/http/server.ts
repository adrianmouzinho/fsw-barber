import fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

import { bookingsRoutes } from './routes/bookings'
import { barbershopsRoutes } from './routes/barbershops'
import { authRoutes } from './routes/auth'
import { env } from '../env'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: env.JWT_SECRET,
})

app.register(authRoutes)
app.register(bookingsRoutes)
app.register(barbershopsRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🔥HTTP server running on http://localhost:3333`)
  })
