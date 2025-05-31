import { useState } from "react";
import { predictImage } from "../services/api";
import BackButton from "../components/BackButton/BackButton";
import { toast } from "react-toastify";

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
    if (!selectedFile) {
      toast.error("Vui lòng chọn hình ảnh");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await predictImage(selectedFile);
      setResults(response);
      toast.success("Dự đoán thành công!");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      toast.error(
        err.response?.data?.message ||
          "Có lỗi xảy ra khi dự đoán. Vui lòng thử lại!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackButton />
      <div className="mx-auto min-h-[70vh] max-w-2xl p-4">
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
              <div className="mt-4 flex justify-center">
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
              <div className="space-y-3">
                <div className="flex gap-8 border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">HPO:</span>
                  <span className="text-gray-800">
                    {results.HPO} nmol cumene-OOH/g
                  </span>
                </div>
                <div className="flex gap-4 border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">MetMb:</span>
                  <span className="text-gray-800">{results.MetMb} %</span>
                </div>
                <div className="flex gap-4 border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">TBARS:</span>
                  <span className="text-gray-800">
                    {results.TBARS} nmol DMA/g
                  </span>
                </div>
                <div className="flex flex-col pt-4">
                  <span className="mb-2 font-medium text-gray-800">
                    L*a*b*:
                  </span>
                  <span className="text-gray-800">L*: {results.LAB[0]}</span>
                  <span className="text-gray-800">a*: {results.LAB[1]}</span>
                  <span className="text-gray-800">b*: {results.LAB[2]}</span>
                </div>
                <div className="flex flex-col pt-4">
                  <span className="mb-2 font-medium text-gray-800">RGB:</span>
                  <span className="text-gray-800">
                    R: {results.RGB[0].toFixed(2)}
                  </span>
                  <span className="text-gray-800">
                    G: {results.RGB[1].toFixed(2)}
                  </span>
                  <span className="text-gray-800">
                    B: {results.RGB[2].toFixed(2)}
                  </span>
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
