import IMG from "../assets/thinking.png";
import fisher from "../assets/Fisher.svg";
import fisher2 from "../assets/Fisher2.svg";
import fisher3 from "../assets/Fisher3.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const navigate = useNavigate();

  const handleRGBClick = () => {
    navigate("/rgb-predict");
  };

  const handleLabClick = () => {
    navigate("/lab-predict");
  };
  const handleImgClick = () => {
    navigate("/img-predict");
  };
  return (
    <>
      <div className="my-10 mt-20 flex min-h-[500px] flex-col items-center space-y-9 px-4 md:mb-0">
        <div className="space-y-1">
          <h2 className="inline-block bg-gradient-to-r from-ocean-500 via-green-500 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
            Xin Chào
          </h2>
          <p className="text-3xl">
            Hôm nay tôi có thể giúp gì cho {user ? user.username : "bạn"}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-xl text-white md:flex-row md:space-x-9">
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
          <div
            onClick={handleImgClick}
            className="flex h-60 w-60 flex-col items-center justify-center rounded-lg bg-ocean-300 p-4 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <p>Dự đoán chất lượng cá ngừ bằng hình ảnh</p>
            <img src={fisher3} alt="AI" className="h-40 w-40" />
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
