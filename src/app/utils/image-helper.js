import { Dimensions } from "react-native";
import * as ImageManipulator from "expo-image-manipulator";

const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get("window");

// got the dimension from the trained data of the *Teachable Machine*; pixel resolution conversion (8x)
export const BITMAP_DIMENSION = 256;

export const cropPicture = async (imageData, maskDimensions) => {
  try {
    const { uri, width, height } = imageData;

    const cropHeight = maskDimensions[0] * 2.2 * (height / DEVICE_HEIGHT);
    const cropWidth = maskDimensions[1] * 2 * (width / DEVICE_WIDTH);

    const actions = [
      {
        crop: {
          originX: width / 2 - cropWidth / 2,
          originY: (height - cropHeight) / 2.5,
          width: cropWidth,
          height: cropHeight,
        },
      },
      {
        resize: {
          width: 128,
          height: 213,
        },
      },
    ];
    const saveOptions = {
      compress: 1,
      format: ImageManipulator.SaveFormat.JPEG,
      base64: true,
    };
    return await ImageManipulator.manipulateAsync(uri, actions, saveOptions);
  } catch (error) {
    console.log("Could not crop & resize photo", error);
  }
};
