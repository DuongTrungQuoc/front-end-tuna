import { useState } from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/logo-herov2.svg";
import SideMenu from "../SideMenu/SideMenu";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="flex h-20 items-center bg-ocean-700 px-4 py-8 text-white dark:bg-gray-950">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="BIGTUNA Logo"
              className="mr-2 h-12 cursor-pointer"
            />
          </Link>
          <button
            onClick={toggleTheme}
            className="cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <BsSunFill size={"24px"} className="text-yellow-300" />
            ) : (
              <BsMoonFill size={"24px"} className="text-yellow-300" />
            )}
          </button>
        </div>
        <ul className="ml-auto text-16 font-semibold">
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </ul>
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
