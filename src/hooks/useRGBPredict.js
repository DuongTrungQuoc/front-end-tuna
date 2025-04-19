import { useState } from "react";
import { toast } from "react-toastify";
import { predictRGB } from "../services/api";

export const useRGBPredict = () => {
  const [rgbValues, setRgbValues] = useState({
    r: "",
    g: "",
    b: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 255)) {
      setRgbValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rgbValues.r || !rgbValues.g || !rgbValues.b) {
      toast.error("Vui lòng nhập đầy đủ các giá trị R, G, B");
      return;
    }

    setLoading(true);
    try {
      const data = await predictRGB(rgbValues);
      setPrediction(data);
      toast.success("Dự đoán thành công!");
    } catch (error) {
      console.error("Error predicting:", error);
      toast.error(
        error.response?.data?.error ||
          "Có lỗi xảy ra khi dự đoán. Vui lòng thử lại!",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    rgbValues,
    prediction,
    loading,
    handleInputChange,
    handleSubmit,
  };
};
