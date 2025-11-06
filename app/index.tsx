import React from "react";
import { Link, router } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function Screen() {
  const handleClick = () => {
    router.replace("/start/caution");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <View style={styles.layer1}></View>
        <View style={styles.layer2}></View>
        <View style={styles.layer3}></View>
      </View>

      {/* Logo + título lado a lado */}
      <View style={styles.header}>
        <Image
          source={require("../assets/vitaplusIcon.png")} // substitua pelo caminho da sua logo
          style={styles.logo}
        />
        <Text style={styles.title}>VitalPlus</Text>
      </View>
      <View>
        <Text style={styles.slogan}>
          Seu medicamento{"\n"} na hora certa {"\n"}todos os dias.
        </Text>
      </View>

      <Pressable style={styles.btn} onPress={handleClick}>
        <Text style={styles.textbtn}>Entrar</Text>
      </Pressable>

      <Pressable>
        <Text style={styles.aboutbtn}>Sobre</Text>
      </Pressable>
      <View style={styles.bottomLayer}>
        <View style={styles.layer4}></View>
        <View style={styles.layer5}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },

  topLayer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 200,
  },
  layer1: {
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#53C4F9",
  },
  layer2: {
    height: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#008DD6",
    marginTop: -20,
  },
  layer3: {
    height: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#0775AF",
    marginTop: -20,
  },

  header: {
    flexDirection: "row", // coloca os itens lado a lado
    alignItems: "center", // alinha verticalmente
    marginTop: 250, // empurra pra baixo do degradê
  },
  logo: {
    width: 55,
    height: 55,
    marginRight: 8, // espaço entre logo e texto
  },
  title: {
    fontSize: 55,
    fontWeight: "800",
    color: "#0775AF",
  },

  bottomLayer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
  },

  layer4: {
    position: "absolute",
    bottom: 60, // empilha acima da layer5
    height: 60,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#C4C4C4",
  },

  layer5: {
    position: "absolute",
    bottom: 10,
    height: 60,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#7F7C7C",
  },
  slogan: {
    marginTop: 40,
    fontSize: 25,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#0775AF",
    width: 274,
    height: 100,
    borderRadius: 35,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textbtn: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "600",
  },
  aboutbtn: {
    fontSize: 22,
    marginTop: 50,
  },
});
