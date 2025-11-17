import { db } from "./db";

export function createTables() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS medicine (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT,
      dosage TEXT,
      frequency TEXT,
      startData TEXT,
      duration TEXT,
      statusCard TEXT,
      statusPercent INTEGER
    );
  `);
}
