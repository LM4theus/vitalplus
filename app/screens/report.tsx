import React from "react";
import { router } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import CustomButton from "../components/button";

export default function Report() {
  const goToHome = () => {
    router.replace("./home");
  };
  const goToHistory = () => {
    router.replace("./history");
  };

  return (
    <View style={styles.container}>
      {/* HEADER FIXO */}
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

      <View style={styles.blueLine}></View>

      {/* CONTEÚDO FIXO - TÍTULO E SUBTÍTULO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monitoramento</Text>
        <Text style={styles.sectionSubtitle}>
          Todo o progresso {"\n"} dos tratamentos
        </Text>
      </View>

      {/* CARD + BOTÃO */}
      <View style={styles.cardContainer}>
        <Pressable
          onPress={() => alert("em desenvolvimento")}
          style={styles.graphButton}
        >
          <View style={styles.graphIconBox}>
            <Image
              source={require("../../assets/graphic.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>

          <View style={styles.graphTextBox}>
            <Text style={styles.graphText}>Gráficos</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => goToHistory()} style={styles.graphButton}>
          <View style={styles.graphIconBox2}>
            <Image
              source={require("../../assets/archive.png")}
              style={styles.graphIconImage}
            />
          </View>

          <View style={styles.graphTextBox}>
            <Text style={styles.graphText}>Histórico</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  blueLine: {
    width: "100%",
    height: 5,
    backgroundColor: "#53C4F9",
  },
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
  sectionSubtitle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: "center",
    width: "100%",
    gap: 80,
  },
  textStyle: {
    fontWeight: "bold",
  },
  descriptionStyle: {
    fontStyle: "italic",
  },

  // Estilo do botão "Gráficos"
  graphButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  graphIconBox: {
    width: 127,
    height: 127,
    backgroundColor: "#51B300",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  graphIconBox2: {
    backgroundColor: "#0775AF",
    width: 127,
    height: 127,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  graphTextBox: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 222,
    height: 99,
    marginLeft: -20,
    alignItems: "center",
    justifyContent: "center", // sobreposição parcial
  },
  graphText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
  },
  graphIconImage: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
});
