import fastify from 'fastify'
import { bookingsRoutes } from './routes/bookings'
import { barbershopsRoutes } from './routes/barbershops'

const app = fastify()

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
