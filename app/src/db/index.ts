import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from './schema';

const sqlite = new Database('../sqlite.db', { create: true });
export const db = drizzle(sqlite, { schema });

export { schema };

export default db;
