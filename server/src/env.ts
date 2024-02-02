import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DB_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  GOOGLE_REDIRECT_URI: z.string().url(),
})

export const env = envSchema.parse(process.env)
