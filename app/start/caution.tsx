import React from "react";
import { router } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { checkAllPermissions } from "../../src/services/permission";

export default function Caution() {
  const handleClick = async () => {
    const result = await checkAllPermissions();

    if (result.allGranted) {
      router.replace("/screens/home");
    } else {
      router.replace("/start/permissions");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <View style={styles.layer1}></View>
        <View style={styles.layer2}></View>
        <View style={styles.layer3}></View>
      </View>

      <View style={styles.header}>
        <Image
          source={require("../../assets/alertIcon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Aviso</Text>
      </View>

      <View>
        <Text style={styles.slogan}>
          Este aplicativo não {"\n"}
          incentiva automedicação.{"\n"}
          Preencha os dados {"\n"}
          conforme a receita médica {"\n"}
          indicada pelo profissional de saúde.
        </Text>
      </View>

      <Pressable style={styles.btn} onPress={handleClick}>
        <Text style={styles.textbtn}>Continuar</Text>
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
    backgroundColor: "#FFA9BF",
  },
  layer2: {
    height: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#F8547F",
    marginTop: -20,
  },
  layer3: {
    height: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#FF0042",
    marginTop: -20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 250,
  },
  logo: {
    width: 55,
    height: 55,
    marginRight: 8,
  },
  title: {
    fontSize: 55,
    fontWeight: "800",
    color: "#FF0042",
  },

  slogan: {
    marginTop: 30,
    fontSize: 25,
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#FF0042",
    width: 274,
    height: 100,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textbtn: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "600",
  },

  bottomLayer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
  },
  layer4: {
    position: "absolute",
    bottom: 60,
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
});
