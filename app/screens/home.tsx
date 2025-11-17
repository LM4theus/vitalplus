import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/button";
import Card from "../components/card";

import { getMedicines } from "../../src/services/medicine";
import type { Medicine } from "../../src/services/medicine";

export default function Home() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getMedicines();
    setMedicines(data);
  };

  const extractHour = (value: string) => {
    if (!value) return "";

    const d = new Date(value);
    if (!isNaN(d.getTime())) {
      const h = d.getHours().toString().padStart(2, "0");
      const m = d.getMinutes().toString().padStart(2, "0");
      return `${h}:${m}`;
    }

    const match = value.match(/([0-1]?[0-9]|2[0-3]):[0-5][0-9]/);
    return match ? match[0] : "";
  };

  const goToCrud = () => router.replace("./create");
  const gotToReport = () => router.replace("./report");
  const goToCalendar = () => router.replace("./calendar");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>VitalPlus</Text>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bom Dia</Text>
        <Text style={styles.sectionSubtitle}>
          Você tem {medicines.length} medicações {"\n"} para tomar hoje
        </Text>
      </View>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          {medicines
            .filter((item) => item.id !== undefined)
            .map((item) => (
              <Card
                key={item.id}
                state={item.statusCard ?? "neutral"}
                title={item.description}
                description={`${item.dosage} - ${extractHour(item.startData)}`}
                onPress={() =>
                  router.push({
                    pathname: "./status",
                    params: { id: item.id!.toString() },
                  })
                }
                textStyle={styles.textStyle}
                descriptionStyle={styles.descriptionStyle}
              />
            ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          width={106}
          height={106}
          backgroundColor="#51B300"
          borderRadius={15}
          onPress={gotToReport}
        >
          <Image source={require("../../assets/report.png")} />
        </CustomButton>

        <CustomButton
          width={106}
          height={106}
          backgroundColor="#FFD50E"
          borderRadius={15}
          onPress={goToCrud}
        >
          <Image source={require("../../assets/crud.png")} />
        </CustomButton>

        <CustomButton
          width={106}
          height={106}
          backgroundColor="#008DD6"
          borderRadius={15}
          onPress={goToCalendar}
        >
          <Image source={require("../../assets/time.png")} />
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F2" },
  blueLine: { width: "100%", height: 5, backgroundColor: "#53C4F9" },

  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0775AF",
    marginLeft: 20,
  },

  headerTime: {
    fontSize: 30,
    fontWeight: "medium",
    color: "#030303ff",
    marginRight: 20,
  },

  scrollArea: { flex: 1 },

  scrollContent: {
    paddingVertical: 20,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },

  sectionSubtitle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },

  section: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    alignItems: "center",
    width: "100%",
    gap: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#F2F2F2",
    marginBottom: 20,
  },

  textStyle: { fontWeight: "bold" },
  descriptionStyle: { fontStyle: "italic" },
});
