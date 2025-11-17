import React, { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getMedicines, updateMedicine } from "../../src/services/medicine";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import CustomButton from "../components/button";

export default function Edit() {
  const { id } = useLocalSearchParams();

  const [description, setDescription] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startData, setStartData] = useState("");
  const [duration, setDuration] = useState("");

  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    loadMedicine();
  }, []);

  const loadMedicine = async () => {
    const all = await getMedicines();
    const med = all.find((m) => m.id === Number(id));

    if (!med) {
      Alert.alert("Erro", "Medicamento não encontrado.");
      router.replace("/home");
      return;
    }

    setDescription(med.description);
    setDosage(med.dosage);
    setFrequency(med.frequency);
    setStartData(med.startData);
    setDuration(med.duration);
  };

  const handleSave = async () => {
    try {
      await updateMedicine({
        id: Number(id),
        description,
        dosage,
        frequency,
        startData,
        duration,
        statusCard: "neutral",
        statusPercent: 0,
      });

      router.push("./home");
    } catch (e: any) {
      Alert.alert("Erro", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>VitalPlus</Text>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine}></View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Editar</Text>
        <Text style={styles.sectionSubtitle}>
          Altere os dados {"\n"} do seu medicamento
        </Text>
      </View>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              placeholder="Nome do Medicamento"
            />
          </View>

          <View style={styles.InputContainer}>
            <TextInput
              style={styles.input}
              value={dosage}
              onChangeText={setDosage}
              placeholder="Dosagem"
            />
          </View>

          <View style={styles.InputContainer}>
            <TextInput
              style={styles.input}
              value={frequency}
              onChangeText={setFrequency}
              placeholder="Período em Horas"
              keyboardType="numeric"
            />
          </View>

          <CustomButton
            style={styles.clockContainer}
            onPress={() => setShowClock(true)}
          >
            <View style={styles.clock}>
              <Text style={styles.clockText}>
                {startData ? `Hora: ${startData}` : "Horário da Dose Inicial"}
              </Text>
            </View>
          </CustomButton>

          {showClock && (
            <DateTimePicker
              mode="time"
              display="spinner"
              value={new Date()}
              onChange={(event, selectedDate) => {
                setShowClock(false);
                if (selectedDate) {
                  const h = selectedDate.getHours().toString().padStart(2, "0");
                  const m = selectedDate
                    .getMinutes()
                    .toString()
                    .padStart(2, "0");
                  setStartData(`${h}:${m}`);
                }
              }}
            />
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          width={60}
          height={60}
          backgroundColor="#FF0042"
          borderRadius={10}
          onPress={() => router.back()}
        >
          <Image source={require("../../assets/cancel.png")} />
        </CustomButton>

        <CustomButton
          width={60}
          height={60}
          backgroundColor="#51B300"
          borderRadius={10}
          onPress={handleSave}
        >
          <Image source={require("../../assets/check.png")} />
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
    fontWeight: "500",
    color: "#030303ff",
    marginRight: 20,
  },
  scrollArea: { flex: 1 },
  scrollContent: { paddingVertical: 20, alignItems: "center" },
  sectionTitle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  sectionSubtitle: { fontSize: 25, textAlign: "center", marginBottom: 20 },
  section: { marginTop: 20, marginBottom: 10, alignItems: "center" },
  cardContainer: { alignItems: "center", width: "100%", gap: 16 },
  InputContainer: { flexDirection: "row" },
  input: {
    width: 322,
    height: 62,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#F2F2F2",
    marginBottom: 20,
  },
  clockContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 315,
    height: 121,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  clock: {
    width: 270,
    height: 51,
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  clockText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
