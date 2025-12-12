import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Lazy initialization to avoid build-time errors
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null
let _queryClient: ReturnType<typeof postgres> | null = null

function getConnectionString(): string {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  return connectionString
}

function getDb(): ReturnType<typeof drizzle<typeof schema>> {
  if (!_db) {
    _queryClient = postgres(getConnectionString())
    _db = drizzle(_queryClient, { schema })
  }
  return _db
}

// Lazy-loaded database instance using proxy
export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_, prop) {
    const instance = getDb()
    const value = instance[prop as keyof typeof instance]
    if (typeof value === 'function') {
      return value.bind(instance)
    }
    return value
  },
})

// For migrations (uses a separate connection)
export const createMigrationClient = () => {
  return postgres(getConnectionString(), { max: 1 })
}

export type Database = ReturnType<typeof drizzle<typeof schema>>
