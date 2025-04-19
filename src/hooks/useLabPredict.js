import { useState } from "react";
import { toast } from "react-toastify";
import { predictLab } from "../services/api";

export const useLabPredict = () => {
  const [labValues, setLabValues] = useState({
    l: "",
    a: "",
    b: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;
    let numValue = parseFloat(value);

    // Kiểm tra giá trị hợp lệ cho từng thành phần
    if (name === "l") {
      isValid = !isNaN(numValue) && numValue >= 0 && numValue <= 100;
    } else {
      isValid = !isNaN(numValue) && numValue >= -128 && numValue <= 127;
    }

    if (value === "" || isValid) {
      setLabValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!labValues.l || !labValues.a || !labValues.b) {
      toast.error("Vui lòng nhập đầy đủ các giá trị L*, a*, b*");
      return;
    }

    // Kiểm tra giá trị hợp lệ trước khi gửi
    const l = parseFloat(labValues.l);
    const a = parseFloat(labValues.a);
    const b = parseFloat(labValues.b);

    if (l < 0 || l > 100) {
      toast.error("Giá trị L* phải nằm trong khoảng 0-100");
      return;
    }

    if (a < -128 || a > 127 || b < -128 || b > 127) {
      toast.error("Giá trị a* và b* phải nằm trong khoảng -128 đến 127");
      return;
    }

    setLoading(true);
    try {
      const result = await predictLab(labValues);
      setPrediction(result);
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
    labValues,
    prediction,
    loading,
    handleInputChange,
    handleSubmit,
  };
};
