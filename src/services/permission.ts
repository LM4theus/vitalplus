import * as Notifications from "expo-notifications";
import { Platform, PermissionsAndroid } from "react-native";

// ---------------------------------------
// CHECK NOTIFICATION PERMISSION
// ---------------------------------------
export async function checkNotificationPermission(): Promise<boolean> {
  const { status } = await Notifications.getPermissionsAsync();
  return status === "granted";
}

// ---------------------------------------
// CHECK STORAGE PERMISSION
// ---------------------------------------
export async function checkStoragePermission(): Promise<boolean> {
  if (Platform.OS !== "android") return true;

  // Android 13+
  if (Platform.Version >= 33) {
    return await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
    );
  }

  // Android 12 ou menos
  return await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  );
}

// ---------------------------------------
// REQUEST NOTIFICATION PERMISSION
// ---------------------------------------
export async function askNotificationPermission(): Promise<boolean> {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}

// ---------------------------------------
// REQUEST STORAGE PERMISSION
// ---------------------------------------
export async function askStoragePermission(): Promise<boolean> {
  if (Platform.OS !== "android") return true;

  // Android 13+
  if (Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      {
        title: "Acesso a Imagens",
        message: "O aplicativo precisa acessar imagens do dispositivo.",
        buttonPositive: "Permitir",
        buttonNegative: "Cancelar",
      }
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }

  // Android 12 ou menos
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: "Acesso a Arquivos",
      message: "O aplicativo precisa acessar arquivos do dispositivo.",
      buttonPositive: "Permitir",
      buttonNegative: "Cancelar",
    }
  );

  return granted === PermissionsAndroid.RESULTS.GRANTED;
}

// ---------------------------------------
// REQUEST ALL PERMISSIONS
// ---------------------------------------
export async function requestAllPermissions() {
  const notif = await askNotificationPermission();
  const storage = await askStoragePermission();

  return {
    notifications: notif,
    storage,
    allGranted: notif && storage,
  };
}

// ---------------------------------------
// CHECK ALL PERMISSIONS
// ---------------------------------------
export async function checkAllPermissions() {
  const notif = await checkNotificationPermission();
  const storage = await checkStoragePermission();

  return {
    notifications: notif,
    storage,
    allGranted: notif && storage,
  };
}
