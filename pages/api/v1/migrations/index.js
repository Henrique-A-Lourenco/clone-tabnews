import MigrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  console.log(request.method);

  if (request.method === "GET") {
    console.log("Entrou no get");
    const migrations = await MigrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await MigrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    response.status(200).json(migrations);
  }

  return response.status(405).end();
}
