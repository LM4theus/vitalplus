import { db } from "../database/db";

export type Task = {
  id?: number;
  title: string;
};

export const createTask = async (title: string) => {
  await db.runAsync("INSERT INTO tasks (title) VALUES (?);", [title]);
};

export const getTasks = async (): Promise<Task[]> => {
  return await db.getAllAsync<Task>("SELECT * FROM tasks;");
};

export const updateTask = async (id: number, title: string) => {
  await db.runAsync("UPDATE tasks SET title = ? WHERE id = ?;", [title, id]);
};

export const deleteTask = async (id: number) => {
  await db.runAsync("DELETE FROM tasks WHERE id = ?;", [id]);
};
