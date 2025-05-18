import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiOutlineMenu, HiChevronRight, HiChevronDown } from "react-icons/hi";
import logo from "../../assets/logo-herov2.svg";
import SideMenu from "../SideMenu/SideMenu";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const menuItems = [
    {
      title: "Giới thiệu",
      path: "/about",
    },
    {
      title: "Kiểm tra chất lượng cá",
      icon: isQualityOpen ? (
        <HiChevronDown className="h-5 w-5" />
      ) : (
        <HiChevronRight className="h-5 w-5" />
      ),
      subItems: [
        { title: "RGB", path: "/rgb-predict" },
        { title: "L*a*b*", path: "/lab-predict" },
        { title: "Hình ảnh", path: "/img-predict" },
      ],
    },
    {
      title: "Hoạt động",
      path: "/activities",
    },
    {
      title: "Liên hệ",
      path: "/contact",
    },
    {
      title: "Chat với AI",
      path: "/chat",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isSubItemActive = (subItems) => {
    return subItems?.some((item) => location.pathname === item.path);
  };

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

        {/* Mobile Menu Button */}
        <div className="ml-auto lg:hidden">
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:block">
          <ul className="flex items-center space-x-6 text-20">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => setIsQualityOpen(!isQualityOpen)}
                      className={`flex items-center space-x-1 ${
                        isSubItemActive(item.subItems)
                          ? "text-ocean-300"
                          : "hover:text-ocean-300"
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.icon}
                    </button>
                    {isQualityOpen && (
                      <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-2 shadow-lg dark:bg-gray-800">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-2 ${
                              isActive(subItem.path)
                                ? "bg-ocean-100 text-ocean-600 dark:bg-ocean-700 dark:text-ocean-100"
                                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 ${
                      isActive(item.path)
                        ? "text-ocean-300"
                        : "hover:text-ocean-300"
                    }`}
                  >
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
