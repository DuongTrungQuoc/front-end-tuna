import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import videoBg from "../../assets/0322.mp4";

const Banner = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);

  return (
    <section
      className="relative h-full text-20 font-semibold dark:bg-gray-900"
      role="banner"
      aria-label="Banner chính"
    >
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="aspect-video h-[300px] w-full object-cover brightness-90 dark:brightness-75 sm:h-[400px] md:h-[500px] lg:h-full"
        aria-label="Video nền"
      />
      <div className="absolute left-1/2 top-1/2 h-auto min-h-[200px] w-[90%] -translate-x-1/2 -translate-y-1/2 transform bg-ocean-900/50 p-4 text-white shadow-md dark:bg-gray-900/70 sm:h-2/3 sm:w-2/3 lg:h-1/2">
        <div className="flex h-full flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="text-center text-26 uppercase sm:text-32 md:text-48 lg:text-7xl">
            <span className="inline-block bg-gradient-to-r from-white via-ocean-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] dark:from-gray-100 dark:via-gray-300 dark:to-gray-100">
              big
            </span>
            <span className="inline-block bg-gradient-to-r from-ocean-200 via-white to-ocean-200 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] dark:from-gray-300 dark:via-gray-100 dark:to-gray-300">
              tuna
            </span>
          </div>
          <p className="md:text-18 text-center text-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-16 lg:text-26">
            Mang đến những miếng cá đạt chất lượng tốt nhất
          </p>
          <Link
            to={user ? "/user" : "/guest"}
            aria-label={user ? "Đến trang người dùng" : "Đến trang khách"}
          >
            <button
              className="mt-2 bg-orange-400 px-4 py-2 text-14 uppercase transition-all duration-300 hover:bg-primary-blue dark:bg-orange-500 dark:hover:bg-primary-blue/80 sm:text-16 md:px-6 md:py-3 md:text-20"
              aria-label="Thử ngay"
            >
              Thử ngay
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
