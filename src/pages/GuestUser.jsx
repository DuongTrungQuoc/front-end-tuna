import fisher from "../assets/Fisher.svg";
import fisher2 from "../assets/Fisher2.svg";
import { Link, useNavigate } from "react-router-dom";

const GuestUser = () => {
  const navigate = useNavigate();

  const handleRGBClick = () => {
    navigate("/rgb-predict");
  };

  const handleLabClick = () => {
    navigate("/lab-predict");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="my-10 flex min-h-fit flex-col items-center space-y-9 px-4">
        <div className="space-y-1">
          <h2 className="inline-block bg-gradient-to-r from-ocean-500 via-green-500 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
            Xin Chào
          </h2>
          <p className="text-3xl">Hôm nay tôi có thể giúp gì cho bạn</p>
        </div>
        <div className="flex items-center space-x-9 text-xl text-white">
          <div
            onClick={handleRGBClick}
            className="flex h-60 w-60 cursor-pointer flex-col items-center justify-center rounded-lg bg-ocean-300 p-4 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <p>Dự đoán chất lượng cá ngừ bằng RGB </p>
            <img src={fisher} alt="AI" className="h-40 w-40" />
          </div>
          <div
            onClick={handleLabClick}
            className="flex h-60 w-60 cursor-pointer flex-col items-center justify-center rounded-lg bg-ocean-300 p-4 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <p>Dự đoán chất lượng cá ngừ bằng L*a*b*</p>
            <img src={fisher2} alt="AI" className="h-40 w-40" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="mb-4 text-lg">
            Để sử dụng tính năng dự đoán bằng hình ảnh, vui lòng{" "}
            <span
              onClick={handleLoginClick}
              className="cursor-pointer font-medium text-ocean-500 hover:text-ocean-700"
            >
              đăng nhập
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default GuestUser;
