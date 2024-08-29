// import "dotenv/config";
// import type { Config } from 'drizzle-kit';

// export default {
//     schema: "./db/schema.ts",
//     out: './drizzle',
//     driver: "pglite",
//     dbCredentials: {
//         url: process.env.DATABASE_URL!,
//     },
// } satisfies Config;

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql", 
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});