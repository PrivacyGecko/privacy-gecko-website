import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// For query purposes
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("DATABASE_URL not found. Database client will not be available.");
}

// Create postgres client with connection pooling
const client = connectionString
  ? postgres(connectionString, {
      max: 10, // Maximum connections in pool
      idle_timeout: 20, // Close idle connections after 20 seconds
      connect_timeout: 10, // Connection timeout in seconds
    })
  : null;

// Create drizzle instance
export const db = client ? drizzle(client, { schema }) : null;

// Export type for use in other packages
export type Database = NonNullable<typeof db>;

// Helper to check if database is available
export function isDatabaseAvailable(): boolean {
  return db !== null;
}

// Safe database getter that throws if not available
export function getDatabase(): Database {
  if (!db) {
    throw new Error(
      "Database is not available. Make sure DATABASE_URL environment variable is set."
    );
  }
  return db;
}
