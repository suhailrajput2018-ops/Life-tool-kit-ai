import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("DATABASE_URL is not configured. Database connections will be disabled.");
}

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export const pool = databaseUrl
  ? (globalForDb.__arenaNextJsPostgresqlPool ??
      new Pool({
        connectionString: databaseUrl,
      }))
  : null;

if (databaseUrl && process.env.NODE_ENV !== "production" && pool) {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const db = databaseUrl && pool ? drizzle(pool) : null;
