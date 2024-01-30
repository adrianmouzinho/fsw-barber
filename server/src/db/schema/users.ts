import { text, timestamp, pgTable } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'

import { bookings } from './bookings'

export const users = pgTable('users', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const usersRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
}))
