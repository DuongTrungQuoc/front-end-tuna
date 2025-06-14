import { useRGBPredict } from "../hooks/useRGBPredict";
import RGBInput from "../components/RGBInput/RGBInput";
import BackButton from "../components/BackButton/BackButton";
import ColorWheel from "../components/ColorWheel";

const RGBPredict = () => {
  const { rgbValues, prediction, loading, handleInputChange, handleSubmit } =
    useRGBPredict();

  return (
    <div className="flex min-h-[70vh] flex-col">
      <BackButton />
      <div className="container mx-auto flex flex-1 flex-col justify-center p-4">
        <div className="mx-auto w-full max-w-2xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-ocean-700">
            Dự đoán chất lượng cá ngừ bằng RGB
          </h1>

          <form onSubmit={handleSubmit} className="mb-8 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <RGBInput
                label="Giá trị R (0-255)"
                name="r"
                value={rgbValues.r}
                onChange={handleInputChange}
                disabled={loading}
              />
              <RGBInput
                label="Giá trị G (0-255)"
                name="g"
                value={rgbValues.g}
                onChange={handleInputChange}
                disabled={loading}
              />
              <RGBInput
                label="Giá trị B (0-255)"
                name="b"
                value={rgbValues.b}
                onChange={handleInputChange}
                disabled={loading}
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
            <div className="flex items-center justify-evenly gap-6 py-4">
              <ColorWheel
                rgb={[
                  Number(rgbValues.r),
                  Number(rgbValues.g),
                  Number(rgbValues.b),
                ]}
                size={140}
              />
              <div
                className="h-[130px] w-[130px] rounded border"
                style={{
                  backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`,
                }}
                title={`RGB: ${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}`}
              />
            </div>
          )}

          {prediction && (
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Kết quả dự đoán:
              </h2>
              <div className="space-y-3">
                <div className="flex gap-4 border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">MetMb:</span>
                  <span className="text-gray-800">
                    {prediction.MetMb.toFixed(2)} %
                  </span>
                </div>
                <div className="flex gap-4 border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">TBARS:</span>
                  <span className="text-gray-800">
                    {prediction.TBARS.toFixed(2)} nmol DMA/g
                  </span>
                </div>
                <div className="flex gap-8 border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">HPO:</span>
                  <span className="text-gray-800">
                    {prediction.Peroxide.toFixed(2)} nmol cumene-OOH/g
                  </span>
                </div>
                {prediction.GiaTriChuyenDoi && (
                  <div className="mt-4 flex flex-col pt-4">
                    <span className="mb-2 font-medium text-gray-800">
                      Giá trị chuyển đổi (L*a*b*):
                    </span>
                    <span className="text-gray-800">
                      L*: {prediction.GiaTriChuyenDoi["L*"]}
                    </span>
                    <span className="text-gray-800">
                      a*: {prediction.GiaTriChuyenDoi["a*"]}
                    </span>
                    <span className="text-gray-800">
                      b*: {prediction.GiaTriChuyenDoi["b*"]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RGBPredict;
