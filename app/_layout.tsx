import { Stack } from "expo-router";
import { useEffect } from "react";
import { createTables } from "../src/database/initDB";

export default function RootLayout() {
  useEffect(() => {
    createTables();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="start/caution" />
    </Stack>
  );
}
