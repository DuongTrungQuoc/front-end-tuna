import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RiMenu2Line,
  RiNotification3Line,
  RiMoonLine,
  RiSunLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
} from "react-icons/ri";
import { logoutUser } from "../../store/apiRequest";
import { createAxios } from "../../services/createInstance";
import { useTheme } from "../../contexts/ThemeContext";
import { AUTH_MESSAGES, ROUTES } from "../../constants";
import { useState } from "react";

const AdminHeader = ({ onMenuClick, isSidebarOpen }) => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let axiosJWT = createAxios(user, dispatch, () => {
    navigate(ROUTES.LOGIN);
  });

  const handleLogout = async () => {
    if (window.confirm(AUTH_MESSAGES.LOGOUT_CONFIRM)) {
      try {
        await logoutUser(
          user?.accessToken,
          user?.id,
          dispatch,
          navigate,
          axiosJWT,
        );
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-800">
      {/* Left side */}
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isSidebarOpen ? (
            <RiMenuFoldLine className="h-6 w-6" />
          ) : (
            <RiMenuUnfoldLine className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <RiSunLine className="h-6 w-6" />
          ) : (
            <RiMoonLine className="h-6 w-6" />
          )}
        </button>

        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          <RiNotification3Line className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </button>

        {/* Profile Dropdown*/}
        <div className="relative">
          <button
            className="flex items-center space-x-3 rounded-lg py-2 pl-3 pr-8 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            <div className="h-8 w-8 overflow-hidden rounded-full bg-ocean-100">
              <img
                src={`https://ui-avatars.com/api/?name=${user?.username}&background=0D8ABC&color=fff`}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{user?.username}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </button>

          {/* Dropdown menu */}
          <div
            className={`absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg dark:bg-gray-800 ${isDropdownOpen ? "block" : "hidden"}`}
          >
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
