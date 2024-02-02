import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { google } from 'googleapis'

import { env } from '../../env'
import { db } from '../../db/connection'
import { users } from '../../db/schema'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const oauth2Client = new google.auth.OAuth2(
      env.GOOGLE_CLIENT_ID,
      env.GOOGLE_CLIENT_SECRET,
      env.GOOGLE_REDIRECT_URI,
    )

    const { tokens } = await oauth2Client.getToken(code)

    const access_token = tokens.access_token ?? undefined

    const people = google.people('v1')

    const { data } = await people.people.get({
      resourceName: 'people/me',
      personFields: 'names,emailAddresses,photos',
      access_token,
    })

    /* eslint-disable */
    const resourceName = data.resourceName!
    const name = data.names![0].displayName!
    const email = data.emailAddresses![0].value!
    const avatarUrl = data.photos![0].url!
    /* eslint-enable */

    let user = await db.query.users.findFirst({
      where(fields, { eq }) {
        return eq(fields.resourceName, resourceName)
      },
    })

    if (!user) {
      const insertedUser = await db
        .insert(users)
        .values({
          name,
          email,
          resourceName,
          avatarUrl,
        })
        .returning()

      user = insertedUser[0]
    }

    const token = app.jwt.sign(
      {
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      {
        sub: user.id,
        expiresIn: '7 days',
      },
    )

    return {
      token,
    }
  })
}
