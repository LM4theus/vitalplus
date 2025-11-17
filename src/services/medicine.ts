import { db } from "../database/db";

// Tipagem exata para não quebrar no Card
export type CardState = "neutral" | "active" | "late" | "completed";

export type Medicine = {
  id?: number;
  description: string;
  dosage: string;
  frequency: string;
  startData: string;
  duration: string;
  statusCard: CardState; // <-- corrigido
  statusPercent: number;
};

export const createMedicine = async (m: Medicine) => {
  await db.runAsync(
    `INSERT INTO medicine 
    (description, dosage, frequency, startData, duration, statusCard, statusPercent)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      m.description,
      m.dosage,
      m.frequency,
      m.startData,
      m.duration,
      m.statusCard,
      m.statusPercent,
    ]
  );
};

export const getMedicines = async (): Promise<Medicine[]> => {
  return await db.getAllAsync<Medicine>("SELECT * FROM medicine;");
};

export const updateMedicine = async (m: Medicine) => {
  if (!m.id) throw new Error("ID obrigatório para atualizar");

  await db.runAsync(
    `UPDATE medicine SET
      description = ?, 
      dosage = ?, 
      frequency = ?, 
      startData = ?, 
      duration = ?, 
      statusCard = ?, 
      statusPercent = ?
     WHERE id = ?`,
    [
      m.description,
      m.dosage,
      m.frequency,
      m.startData,
      m.duration,
      m.statusCard,
      m.statusPercent,
      m.id,
    ]
  );
};

export const deleteMedicine = async (id: number) => {
  await db.runAsync("DELETE FROM medicine WHERE id = ?;", [id]);
};
