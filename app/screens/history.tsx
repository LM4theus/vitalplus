import React from "react";
import { router } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import CustomButton from "../components/button";

export default function History() {
  const goToReport = () => {
    router.replace("./report");
  };

  return (
    <View style={styles.container}>
      {/* HEADER FIXO */}
      <View style={styles.header}>
        <CustomButton
          width={50}
          height={50}
          borderRadius={15}
          onPress={goToReport}
        >
          <Image source={require("../../assets/back-icon.png")} />
        </CustomButton>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine}></View>

      {/* CONTEÚDO FIXO - TÍTULO E SUBTÍTULO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Histórico</Text>
        <Text style={styles.sectionSubtitle}>Todo os medicamentos</Text>
      </View>

      {/* CARD + BOTÃO */}
      <View style={styles.cardContainer}>
        <CustomButton
          width={256}
          height={102}
          borderRadius={15}
          onPress={() => alert("em desenvolvimento")}
          backgroundColor="#C4C4C4"
        >
          <Text style={styles.btnAll}>Ver tudo</Text>
        </CustomButton>
        <CustomButton
          width={256}
          height={102}
          borderRadius={15}
          onPress={() => alert("em desenvolvimento")}
          backgroundColor="#51B300"
        >
          <Text style={styles.btns}>Concluídos</Text>
        </CustomButton>
        <CustomButton
          width={256}
          height={102}
          borderRadius={15}
          onPress={() => alert("em desenvolvimento")}
          backgroundColor="#FF7B00"
        >
          <Text style={styles.btns}>Em andamento</Text>
        </CustomButton>
        <CustomButton
          width={256}
          height={102}
          borderRadius={15}
          onPress={() => alert("em desenvolvimento")}
          backgroundColor="#FF0042"
        >
          <Text style={styles.btns}>Atrasados</Text>
        </CustomButton>
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
    gap: 40,
  },
  btnAll: {
    fontSize: 25,
  },
  btns: {
    fontSize: 25,
    color: "#fff",
  },
});
