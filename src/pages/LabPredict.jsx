import { useLabPredict } from "../hooks/useLabPredict";
import LabInput from "../components/LabInput/LabInput";
import BackButton from "../components/BackButton/BackButton";

const LabPredict = () => {
  const { labValues, prediction, loading, handleInputChange, handleSubmit } =
    useLabPredict();

  return (
    <div className="flex min-h-screen flex-col">
      <BackButton />
      <div className="container mx-auto flex flex-1 flex-col justify-center p-4">
        <div className="mx-auto w-full max-w-2xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-ocean-700">
            Dự đoán chất lượng cá ngừ bằng L*a*b*
          </h1>

          <form onSubmit={handleSubmit} className="mb-8 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <LabInput
                label="Giá trị L* (0-100)"
                name="l"
                value={labValues.l}
                onChange={handleInputChange}
                min={0}
                max={100}
              />
              <LabInput
                label="Giá trị a* (-128-127)"
                name="a"
                value={labValues.a}
                onChange={handleInputChange}
                min={-128}
                max={127}
              />
              <LabInput
                label="Giá trị b* (-128-127)"
                name="b"
                value={labValues.b}
                onChange={handleInputChange}
                min={-128}
                max={127}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-ocean-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-ocean-700 focus:outline-none focus:ring-4 focus:ring-ocean-300 disabled:bg-ocean-200"
            >
              {loading ? "Đang dự đoán..." : "Dự đoán"}
            </button>
          </form>

          {prediction && (
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Kết quả dự đoán:
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-600">MetMb:</span>
                  <span className="text-ocean-500">
                    {prediction.MetMb.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-600">TBARS:</span>
                  <span className="text-ocean-500">
                    {prediction.TBARS.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Peroxide:</span>
                  <span className="text-ocean-500">
                    {prediction.Peroxide.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabPredict;
