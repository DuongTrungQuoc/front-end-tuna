import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-6 flex items-center">
      <button
        onClick={handleBack}
        className="text-ocean-600 hover:bg-ocean-50 group flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors"
      >
        <IoArrowBack className="h-5 w-5 transform transition-transform duration-200 group-hover:-translate-x-1" />
        <span>Quay lại</span>
      </button>
    </div>
  );
};

export default BackButton;
