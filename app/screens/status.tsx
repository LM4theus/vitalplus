import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/button";
import Ring from "../components/ring";
import { getMedicines, deleteMedicine } from "../../src/services/medicine";
import type { Medicine } from "../../src/services/medicine";

export default function Status() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [med, setMed] = useState<Medicine | null>(null);

  // novo estado calculado
  const [diasFaltando, setDiasFaltando] = useState<number | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadMedicine = async () => {
      const medicines = await getMedicines();
      const medicine = medicines.find((m) => m.id?.toString() === id);
      setMed(medicine ?? null);

      if (!medicine) return;

      // se for recorrente, nada é calculado
      if (medicine.duration === "appellant") {
        setDiasFaltando(null);
        return;
      }

      // se for temporário: duration = número
      const diasTotal = Number(medicine.duration);
      if (isNaN(diasTotal)) return;

      try {
        const dataStr = medicine.startData.split("T")[0]; // yyyy-mm-dd
        const inicio = new Date(dataStr + "T00:00:00");
        const hoje = new Date();

        const diffMs =
          new Date(inicio.getTime() + diasTotal * 86400000).getTime() -
          hoje.getTime();
        const diffDias = Math.ceil(diffMs / 86400000);

        setDiasFaltando(diffDias > 0 ? diffDias : 0);
      } catch {
        setDiasFaltando(null);
      }
    };

    loadMedicine();
  }, [id]);

  const goToHome = () => router.replace("./home");

  if (!med) return <Text>Medicamento não encontrado</Text>;

  // cálculo do progresso para o Ring
  let progresso = med.statusPercent;
  if (med.duration !== "appellant" && diasFaltando !== null) {
    const total = Number(med.duration);
    const restante = diasFaltando;
    const completado = total - restante;
    progresso = Math.floor((completado / total) * 100);
  }
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton
          width={50}
          height={50}
          borderRadius={15}
          onPress={goToHome}
        >
          <Image source={require("../../assets/back-icon.png")} />
        </CustomButton>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{med.description}</Text>
        <Text style={styles.sectionSubtitle}>
          {med.dosage} - {extractHour(med.startData)}
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.statusContainer}>
          <Ring progress={progresso} color="#FFD700" />

          {med.duration === "appellant" ? (
            <Text style={styles.statusText}>Tratamento recorrente</Text>
          ) : (
            <Text style={styles.statusText}>
              Faltam {diasFaltando} dias para{"\n"} concluir seu tratamento
            </Text>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          width={140}
          height={54}
          backgroundColor="#FF0042"
          borderRadius={15}
          onPress={async () => {
            if (!med.id) return alert("Erro: medicamento sem ID");

            try {
              await deleteMedicine(med.id);
              router.replace("./delete");
            } catch {
              alert("Erro ao deletar medicamento");
            }
          }}
        >
          <Text style={styles.btnText}>excluir</Text>
        </CustomButton>

        <CustomButton
          width={140}
          height={54}
          backgroundColor="#008DD6"
          borderRadius={15}
          onPress={() =>
            router.push({
              pathname: "./update",
              params: { id: med.id },
            })
          }
        >
          <Text style={styles.btnText}>editar</Text>
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
  headerTime: {
    fontSize: 30,
    fontWeight: "medium",
    color: "#030303ff",
    marginRight: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  sectionSubtitle: { fontSize: 25, textAlign: "center", marginBottom: 20 },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#F2F2F2",
    marginBottom: 20,
  },
  btnText: { color: "#fff", fontWeight: "medium", fontSize: 30 },
  statusContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 330,
    height: 480,
    marginBottom: 30,
  },
  statusText: { marginTop: 50, fontSize: 30, textAlign: "center" },
});
