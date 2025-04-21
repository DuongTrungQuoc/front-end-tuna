import { FaCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-ocean-700 px-4 py-4 dark:bg-gray-950 md:py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-white md:flex-row">
          <p className="flex items-center gap-1 text-base font-semibold md:text-xl">
            <FaCopyright className="size-[20px] cursor-pointer md:size-[24px]" />
            <span>2025 BIGTUNA TEAM</span>
          </p>
          <div className="flex items-center gap-4">
            <FaFacebook className="size-[20px] cursor-pointer hover:text-ocean-200 dark:hover:text-gray-300 md:size-[24px]" />
            <FaTiktok className="size-[20px] cursor-pointer hover:text-ocean-200 dark:hover:text-gray-300 md:size-[24px]" />
            <FaInstagram className="size-[20px] cursor-pointer hover:text-ocean-200 dark:hover:text-gray-300 md:size-[24px]" />
          </div>
          <p>
            <span className="text-16 hover:text-ocean-200 dark:hover:text-gray-300 md:text-20">
              Terms of service
            </span>
            <span> | </span>
            <span className="text-16 hover:text-ocean-200 dark:hover:text-gray-300 md:text-20">
              Privacy policy
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
