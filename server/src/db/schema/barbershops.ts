import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'

import { bookings } from './bookings'
import { services } from './services'

export const barbershops = pgTable('barbershops', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const barbershopsRelations = relations(barbershops, ({ many }) => ({
  bookings: many(bookings),
  services: many(services),
}))
