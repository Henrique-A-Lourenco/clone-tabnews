import MigrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrationsOptions = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await MigrationRunner(defaultMigrationsOptions);
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migrateMigrations = await MigrationRunner({
      ...defaultMigrationsOptions,
      dryRun: false,
    });

    if (migrateMigrations.length > 0) {
      return response.status(201).json(migrateMigrations);
    }

    return response.status(200).json(migrateMigrations);
  }

  return response.status(405).end();
}
