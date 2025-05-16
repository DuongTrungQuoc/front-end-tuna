import { Link, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiUserLine,
  RiFileChartLine,
  RiSettings4Line,
  RiCustomerService2Line,
  RiBarChartBoxLine,
} from "react-icons/ri";
import logo from "../../assets/onlyTuna.png";

const menuItems = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <RiDashboardLine className="h-6 w-6" />,
  },
  {
    path: "/admin/users",
    name: "User Management",
    icon: <RiUserLine className="h-6 w-6" />,
  },
  {
    path: "/admin/predictions",
    name: "Predictions",
    icon: <RiBarChartBoxLine className="h-6 w-6" />,
  },
  {
    path: "/admin/reports",
    name: "Reports",
    icon: <RiFileChartLine className="h-6 w-6" />,
  },
  {
    path: "/admin/customer-service",
    name: "Customer Service",
    icon: <RiCustomerService2Line className="h-6 w-6" />,
  },
  {
    path: "/admin/settings",
    name: "Settings",
    icon: <RiSettings4Line className="h-6 w-6" />,
  },
];

const AdminSidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } fixed inset-y-0 left-0 z-30 flex flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200 px-4 dark:border-gray-700">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span
            className={`ml-2 text-xl font-bold text-gray-800 transition-opacity duration-300 dark:text-white ${
              isOpen ? "block" : "hidden"
            }`}
          >
            BIGTUNA
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-ocean-100 text-ocean-600 dark:bg-ocean-700 dark:text-ocean-100"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                <span
                  className={`ml-3 transition-all duration-300 ${
                    isOpen ? "opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  {item.name}
                </span>
              </div>
              {!isOpen && (
                <div className="absolute left-full ml-6 hidden rounded-md bg-gray-800 px-2 py-1 text-sm text-white group-hover:block dark:bg-gray-700">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
