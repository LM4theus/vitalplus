import React, { useState } from "react";
import { router } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createMedicine } from "../../src/services/medicine";
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

export default function Create() {
  const [description, setDescription] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startData, setStartData] = useState(""); // só hora
  const [duration, setDuration] = useState("");

  const [showClock, setShowClock] = useState(false);

  const [tipo, setTipo] = useState<"temporario" | "recorrente" | "">("");
  const [diasTemporario, setDiasTemporario] = useState("");

  const handleSave = async () => {
    if (!description || !dosage || !frequency || !tipo || !startData) {
      Alert.alert("Aviso", "Preencha todos os campos obrigatórios.");
      return;
    }

    let finalDuration = "";

    if (tipo === "temporario") {
      if (!diasTemporario) {
        Alert.alert("Aviso", "Insira o número de dias.");
        return;
      }
      finalDuration = diasTemporario;
    }

    if (tipo === "recorrente") {
      finalDuration = "appellant";
    }

    // gera data completa automaticamente (ano-mês-dia)
    const hoje = new Date();
    const dataISO = hoje.toISOString().slice(0, 10); // yyyy-mm-dd

    // junta data com hora escolhida
    const startDateTime = `${dataISO}T${startData}:00`;

    try {
      await createMedicine({
        description,
        dosage,
        frequency,
        startData: startDateTime, // agora é data + hora completas
        duration: finalDuration,
        statusCard: "neutral",
        statusPercent: 0,
      });

      router.replace("./home");
    } catch (e: any) {
      Alert.alert("Erro", e.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>VitalPlus</Text>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine}></View>

      {/* TÍTULO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cadastro</Text>
        <Text style={styles.sectionSubtitle}>Insira os dados</Text>
      </View>

      {/* CAMPOS */}
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
          {/* NOME */}
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              placeholder="Nome do Medicamento"
            />
          </View>

          {/* DOSAGEM */}
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.input}
              value={dosage}
              onChangeText={setDosage}
              placeholder="Dosagem"
            />
          </View>

          {/* FREQUÊNCIA */}
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.input}
              value={frequency}
              onChangeText={setFrequency}
              placeholder="Período em Horas"
              keyboardType="numeric"
            />
          </View>

          {/* HORÁRIO INICIAL */}
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

          {/* OPÇÕES */}
          <View style={{ flexDirection: "row", gap: 20, marginTop: 10 }}>
            <CustomButton
              width={150}
              height={50}
              backgroundColor={tipo === "temporario" ? "#0775AF" : "#D9D9D9"}
              borderRadius={10}
              onPress={() => setTipo("temporario")}
            >
              <Text
                style={{
                  color: tipo === "temporario" ? "white" : "black",
                  fontWeight: "600",
                }}
              >
                Temporário
              </Text>
            </CustomButton>

            <CustomButton
              width={150}
              height={50}
              backgroundColor={tipo === "recorrente" ? "#0775AF" : "#D9D9D9"}
              borderRadius={10}
              onPress={() => setTipo("recorrente")}
            >
              <Text
                style={{
                  color: tipo === "recorrente" ? "white" : "black",
                  fontWeight: "600",
                }}
              >
                Recorrente
              </Text>
            </CustomButton>
          </View>

          {/* DIAS */}
          {tipo === "temporario" && (
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.input}
                value={diasTemporario}
                onChangeText={setDiasTemporario}
                placeholder="Quantidade de dias"
                keyboardType="numeric"
              />
            </View>
          )}
        </View>
      </ScrollView>

      {/* BOTÕES */}
      <View style={styles.buttonContainer}>
        <CustomButton
          width={60}
          height={60}
          backgroundColor="#FF0042"
          borderRadius={10}
          onPress={() => router.replace("./home")}
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
