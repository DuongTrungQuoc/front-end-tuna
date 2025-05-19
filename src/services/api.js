import axios from "axios";

// Predict API
export const predictRGB = async (rgbValues) => {
  const requestData = {
    lab_input: [Number(rgbValues.r), Number(rgbValues.g), Number(rgbValues.b)],
    mode: "rgb",
  };

  const response = await axios.post(
    "https://back-end-tuna.onrender.com/v1/predict",
    requestData,
  );
  return response.data;
};

export const predictLab = async (labValues) => {
  const requestData = {
    lab_input: [Number(labValues.l), Number(labValues.a), Number(labValues.b)],
    mode: "lab",
  };

  const response = await axios.post(
    "https://back-end-tuna.onrender.com/v1/predict",
    requestData,
  );
  return response.data;
};

export const predictImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await axios.post(
    "https://743c-35-185-1-162.ngrok-free.app/predict", // Correct endpoint
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

// htt
