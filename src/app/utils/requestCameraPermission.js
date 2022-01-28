import { PermissionsAndroid } from "react-native";

export const requestCameraPermission = async () => {
  // if (PermissionsAndroid.RESULTS.GRANTED === "granted") return true;

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Permissão de camera AgroEasy",
        message: "O aplicativo AgroEasy deseja obter acesso à sua câmera.",
        // buttonNeutral: "Perguntar mais tarde",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
      return true;
    } else {
      console.log("Camera permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
