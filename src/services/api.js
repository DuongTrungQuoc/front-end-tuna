import axios from "axios";

// Predict API
export const predictRGB = async (rgbValues) => {
  const requestData = {
    lab_input: [Number(rgbValues.r), Number(rgbValues.g), Number(rgbValues.b)],
    mode: "rgb",
  };

  const response = await axios.post(
    //"https://back-end-tuna.onrender.com/v1/predict",
    "https://ad49-34-16-250-22.ngrok-free.app/predict",
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
    //"https://back-end-tuna.onrender.com/v1/predict",
    "https://ad49-34-16-250-22.ngrok-free.app/predict",
    requestData,
  );
  return response.data;
};

export const predictImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await axios.post(
    "https://f7bd-34-168-206-179.ngrok-free.app/predict", // https://back-end-tuna.onrender.com/v1/predict/image
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
