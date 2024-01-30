import { text, timestamp, pgTable, integer } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'

import { barbershops } from './barbershops'

export const services = pgTable('services', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  barbershopId: text('barbershop_id').references(() => barbershops.id, {
    onDelete: 'set null',
  }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  priceInCents: integer('price_in_cents').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const servicesRelations = relations(services, ({ one }) => ({
  barbershop: one(barbershops, {
    fields: [services.barbershopId],
    references: [barbershops.id],
    relationName: 'serviceBarbershop',
  }),
}))
