import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { createId } from '@paralleldrive/cuid2'

import { users } from './users'
import { barbershops } from './barbershops'
import { services } from './services'

export const bookings = pgTable('bookings', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  userId: text('user_id').references(() => users.id, {
    onDelete: 'set null',
  }),
  barbershopId: text('barbershop_id').references(() => barbershops.id, {
    onDelete: 'set null',
  }),
  serviceId: text('service_id').references(() => services.id, {
    onDelete: 'set null',
  }),
  startsAt: timestamp('starts_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const bookingsRelations = relations(bookings, ({ one }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
    relationName: 'bookingUser',
  }),
  barbershop: one(barbershops, {
    fields: [bookings.barbershopId],
    references: [barbershops.id],
    relationName: 'bookingBarbershop',
  }),
  service: one(services, {
    fields: [bookings.serviceId],
    references: [services.id],
    relationName: 'bookingService',
  }),
}))
