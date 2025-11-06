import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("vitalplus.db");
export default db;
