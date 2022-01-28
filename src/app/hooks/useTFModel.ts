import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-react-native";
import { decodeJpeg, bundleResourceIO } from "@tensorflow/tfjs-react-native";

import { cropPicture } from "src/app/utils/image-helper";
import { base64ToUint8Array } from "src/app/utils/base64ToArrayBuffer";
import { useEffect, useMemo, useState } from "react";

const modelJson = require(`../../assets/model/model.json`);
const modelWeights = require(`../../assets/model/model.bin`);

// const size: [number, number] = [256, 256];
const size: [number, number] = [213, 128];

const CLASSNAMES = [
  {
    value: "burra_leitera_leitaozinho",
    name: "Burra leitera leitaozinho",
  },
  {
    value: "capim_coloniao_capim_sempre_verde",
    name: "Capim colonião/Capim sempre verde",
  },
  {
    value: "capim_da_roca",
    name: "Capim da roça",
  },
  {
    value: "capim_da_seda_grama_de_burro",
    name: "Capim da seda/Grama de burro",
  },
  {
    value: "capim_gengibre",
    name: "Capim gengibre",
  },
  {
    value: "tiririca_alho_cyperus_rotundus",
    name: "Tiririca alho",
  },
];

const useTFModel = () => {
  const [model, setModel] = useState<tf.GraphModel | undefined | Error>();

  const modelAvailable = useMemo(() => model instanceof tf.GraphModel, [model]);

  const cropImage = async (image) => {
    console.log("cropping image...");
    const croppedData = await cropPicture(image, size);

    if (!croppedData) throw new Error("A imagem não pode ser cortada");

    console.log("croppedData.base64", croppedData.base64);

    console.log("turning img into a tensor...");
    const imageData = base64ToUint8Array(croppedData.base64);
    const imageTensor = decodeJpeg(imageData);

    console.log("resizing tensor...");
    let resized = tf.image.resizeBilinear(imageTensor, size);
    resized = tf.expandDims(resized, 0);

    console.log("crop finished!");

    return resized;
  };

  async function loadModel() {
    console.log("loading model...");

    tf.setBackend("rn-webgl");
    await tf.ready();

    console.log("current backend:", tf.getBackend());

    const model = await tf.loadGraphModel(
      bundleResourceIO(modelJson, modelWeights)
    );

    // // WARM-UP model
    // const res = tf.tidy(() =>
    //   model.predict(tf.zeros([1, 256, 256, 3]))
    // ) as tf.Tensor; // <<---------- Error is thrown here

    // console.log("warm up finished!");

    return model;
  }

  const modelPrediction = async (model, img) => {
    console.log("starting prediction...");
    const prediction = await model.predict(img);
    const scores = prediction.softmax().dataSync();

    console.log("calculating scores...");
    let max_score = scores[0];
    let max_idx = 0;
    scores.map(function (score, i) {
      if (score > max_score) {
        max_score = score;
        max_idx = i;
      }
    });

    console.log("processing...");
    const resultPredicted = CLASSNAMES[max_idx];
    const resultPredictedPercentage = (max_score * 100).toFixed(2);

    console.log("finished process!");

    const resultPredictedText = `Imagem pertence a classe "${resultPredicted.name}" com ${resultPredictedPercentage}% de confiança.`;

    console.log(resultPredictedText);

    return resultPredictedText;
  };

  const analyzePhoto = async (image) => {
    const resized = await cropImage(image);

    return false;

    const prediction = await modelPrediction(model, resized);

    return prediction;
  };

  useEffect(() => {
    if (!model) {
      loadModel().then((model) => {
        setModel(model);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    analyzePhoto,
    modelAvailable,
  };
};

export default useTFModel;
