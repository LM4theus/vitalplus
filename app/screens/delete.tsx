import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/button";

export default function Delete() {
  const goToHome = () => router.replace("./home");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>VitalPlus</Text>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Excluído</Text>
        <Text style={styles.sectionSubtitle}>
          O medicamento foi {"\n"} deletado com {"\n"} sucesso
        </Text>

        <CustomButton
          width={350}
          height={550}
          backgroundColor=""
          borderRadius={15}
          onPress={goToHome}
        >
          <Image source={require("../../assets/return-icon.png")} />
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
    fontWeight: "regular",
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
