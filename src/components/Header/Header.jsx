import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-herov2.svg";
import SideMenu from "../SideMenu/SideMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex h-20 items-center bg-ocean-700 px-4 py-8 text-white">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="BIGTUNA Logo"
              className="mr-2 h-12 cursor-pointer"
            />
          </Link>
          <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
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
