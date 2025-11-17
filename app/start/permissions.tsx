import React, { useState } from "react";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { requestAllPermissions } from "../../src/services/permission";

export default function PermissionsPage() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const result = await requestAllPermissions();

    if (result.allGranted) {
      router.replace("screens/home");
    } else {
      Alert.alert(
        "Permissões necessárias",
        "Você precisa conceder todas as permissões para continuar."
      );
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Permissões</Text>
        <Text style={styles.subtitle}>
          Autoriza o aplicativo acessar data, arquivos e notificações. E
          sobreposição a outros apps?
        </Text>
      </View>

      <View style={styles.BigCircle}>
        <View style={styles.SmallCircle}>
          <Image
            source={require("../../assets/permissionsIcon.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </View>

      <View>
        <Pressable style={styles.btn} onPress={handleClick}>
          <Text style={styles.textbtn}>Permitir</Text>
        </Pressable>
      </View>

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
    alignItems: "center",
    textAlign: "center",
  },

  title: {
    marginTop: 60,
    fontSize: 40,
    fontWeight: "bold",
    color: "#0775AF",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "center",
  },
  BigCircle: {
    marginTop: 60,
    width: 267,
    height: 267,
    backgroundColor: "#61B5E0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 300,
  },
  SmallCircle: {
    width: 194,
    height: 194,
    backgroundColor: "#0775AF",
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginTop: 60,
    width: 274,
    height: 100,
    backgroundColor: "#FF7B00",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textbtn: {
    fontSize: 30,
    color: "#FFFFFF",
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
});
