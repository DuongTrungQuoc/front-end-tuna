import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/404.svg";
import BackButton from "../components/BackButton/BackButton";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="mt-8 text-center">
          <img
            src={notFoundImage}
            alt="404 Not Found"
            className="mx-auto mb-8 h-64 w-64"
          />
          <h1 className="text-ocean-600 mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Oops! Trang bạn đang tìm kiếm không tồn tại
          </h2>
          <p className="mb-8 text-gray-600">
            Có vẻ như trang bạn đang cố truy cập đã bị di chuyển hoặc không tồn
            tại.
          </p>
          <button
            onClick={handleBackHome}
            className="hover:bg-ocean-600 focus:ring-ocean-400 rounded-lg bg-ocean-500 px-6 py-3 text-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
