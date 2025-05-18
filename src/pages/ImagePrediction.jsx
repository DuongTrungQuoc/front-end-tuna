import { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton/BackButton";

const ImagePrediction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "https://back-end-tuna.onrender.com/v1/predict/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setResults(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackButton />
      <div className="mx-auto min-h-screen max-w-2xl p-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-ocean-700">
          Dự đoán chất lượng cá ngừ bằng hình ảnh
        </h1>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Chọn hình ảnh:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="h-auto max-w-full"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={!selectedFile || loading}
              className={`w-full rounded-md px-4 py-2 font-medium text-white ${
                !selectedFile || loading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-ocean-500 hover:bg-ocean-700"
              }`}
            >
              {loading ? "Đang dự đoán..." : "Dự đoán"}
            </button>
          </form>

          {error && (
            <div className="mt-4 rounded-md bg-red-100 p-3 text-red-700">
              {error}
            </div>
          )}

          {results && (
            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold">Kết quả dự đoán</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="text-sm font-medium text-gray-500">MetMb</h4>
                  <p className="text-xl font-bold">{results.MetMb}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="text-sm font-medium text-gray-500">TBARS</h4>
                  <p className="text-xl font-bold">{results.TBARS}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="text-sm font-medium text-gray-500">
                    Peroxide
                  </h4>
                  <p className="text-xl font-bold">{results.Peroxide}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagePrediction;
