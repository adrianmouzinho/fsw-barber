import chalk from 'chalk'

import { barbershops, bookings, services, users } from './schema'
import { db } from './connection'

/**
 * Reset database
 */
await db.delete(bookings)
await db.delete(barbershops)
await db.delete(services)
await db.delete(users)

console.log(chalk.yellow('✔ Database reset'))

/**
 * Create barbershops
 */
const images = [
  'https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png',
  'https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png',
  'https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png',
  'https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png',
  'https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png',
  'https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png',
  'https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png',
  'https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png',
  'https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png',
  'https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png',
  'https://utfs.io/f/3bcf33fc-988a-462b-8b98-b811ee2bbd71-17k.png',
  'https://utfs.io/f/5788be0e-2307-4bb4-b603-d9dd237950a2-17l.png',
  'https://utfs.io/f/6b0888f8-b69f-4be7-a13b-52d1c0c9cab2-17m.png',
  'https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png',
  'https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png',
  'https://utfs.io/f/a55f0f39-31a0-4819-8796-538d68cc2a0f-17o.png',
  'https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png',
  'https://utfs.io/f/23d9c4f7-8bdb-40e1-99a5-f42271b7404a-17q.png',
  'https://utfs.io/f/9f0847c2-d0b8-4738-a673-34ac2b9506ec-17r.png',
  'https://utfs.io/f/07842cfb-7b30-4fdc-accc-719618dfa1f2-17s.png',
  'https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png',
]

// Barbershops names
const names = [
  'Barbearia Vintage',
  'Corte & Estilo',
  'Barba & Navalha',
  'The Dapper Den',
  'Cabelo & Cia.',
  'Machado & Tesoura',
  'Barbearia Elegance',
  'Aparência Impecável',
  'Estilo Urbano',
  'Estilo Clássico',
]

// Barbershops addresses
const addresses = [
  'Rua da Barbearia, 123',
  'Avenida dos Cortes, 456',
  'Praça da Barba, 789',
  'Travessa da Navalha, 101',
  'Alameda dos Estilos, 202',
  'Estrada do Machado, 303',
  'Avenida Elegante, 404',
  'Praça da Aparência, 505',
  'Rua Urbana, 606',
  'Avenida Clássica, 707',
]
const [barbershop1, barbershop2, barbershop3, barbershop4] = await db
  .insert(barbershops)
  .values([
    {
      name: names[0],
      address: addresses[0],
      imageUrl: images[0],
    },
    {
      name: names[1],
      address: addresses[1],
      imageUrl: images[1],
    },
    {
      name: names[2],
      address: addresses[2],
      imageUrl: images[2],
    },
    {
      name: names[3],
      address: addresses[3],
      imageUrl: images[3],
    },
  ])
  .returning()

console.log(chalk.yellow('✔ Created customers'))

/**
 * Create services
 */
await db.insert(services).values([
  {
    name: 'Corte de Cabelo',
    description: 'Estilo personalizado com as últimas tendências.',
    priceInCents: 6000,
    imageUrl:
      'https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png',
    barbershopId: barbershop1.id,
  },
  {
    name: 'Barba',
    description: 'Modelagem completa para destacar sua masculinidade.',
    priceInCents: 4000,
    imageUrl:
      'https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png',
    barbershopId: barbershop2.id,
  },
  {
    name: 'Pézinho',
    description: 'Acabamento perfeito para um visual renovado.',
    priceInCents: 3500,
    imageUrl:
      'https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png',
    barbershopId: barbershop3.id,
  },
  {
    name: 'Sobrancelha',
    description: 'Expressão acentuada com modelagem precisa.',
    priceInCents: 2000,
    imageUrl:
      'https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png',
    barbershopId: barbershop4.id,
  },
  {
    name: 'Massagem',
    description: 'Relaxe com uma massagem revigorante.',
    priceInCents: 5000,
    imageUrl:
      'https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png',
    barbershopId: barbershop1.id,
  },
])

console.log(chalk.yellow('✔ Created services'))

console.log(chalk.greenBright('Database seeded successfully!'))

process.exit()
