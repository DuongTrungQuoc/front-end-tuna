import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header className="flex h-20 items-center bg-ocean-700 px-4 py-8 text-white">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="../src/assets/logo-herov2.svg"
              className="mr-2 h-12 cursor-pointer"
            />
          </Link>
          <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
        </div>
        <ul className="ml-auto text-16 font-semibold">
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        </ul>
      </header>
    </>
  );
};
export default Header;
