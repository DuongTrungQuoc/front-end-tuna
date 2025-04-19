import axios from "axios";

// Predict API
export const predictRGB = async (rgbValues) => {
  const requestData = {
    lab_input: [Number(rgbValues.r), Number(rgbValues.g), Number(rgbValues.b)],
    mode: "rgb",
  };

  const response = await axios.post("/v1/predict", requestData);
  return response.data;
};

export const predictLab = async (labValues) => {
  const requestData = {
    lab_input: [Number(labValues.l), Number(labValues.a), Number(labValues.b)],
    mode: "lab",
  };

  const response = await axios.post("/v1/predict", requestData);
  return response.data;
};
