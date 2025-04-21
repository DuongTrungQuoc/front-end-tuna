import { useState } from "react";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen, onClose }) => {
  const [isQualityOpen, setIsQualityOpen] = useState(false);

  const menuItems = [
    {
      title: "Giới thiệu",
      path: "/about",
      icon: <HiChevronRight className="h-5 w-5" />,
    },
    {
      title: "Kiểm tra chất lượng cá",
      icon: isQualityOpen ? (
        <HiChevronDown className="h-5 w-5" />
      ) : (
        <HiChevronRight className="h-5 w-5" />
      ),
      subItems: [
        { title: "RGB", path: "/predict/rgb" },
        { title: "L*a*b*", path: "/predict/lab" },
        { title: "Hình ảnh", path: "/predict/image" },
      ],
    },
    {
      title: "Hoạt động",
      path: "/activities",
      icon: <HiChevronRight className="h-5 w-5" />,
    },
    {
      title: "Liên hệ",
      path: "/contact",
      icon: <HiChevronRight className="h-5 w-5" />,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      {/* Menu */}
      <div className="relative w-64 bg-white shadow-lg">
        <div className="flex h-full flex-col">
          <div className="border-b p-4">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => setIsQualityOpen(!isQualityOpen)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <span>{item.title}</span>
                        {item.icon}
                      </button>
                      {isQualityOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
                                onClick={onClose}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={onClose}
                    >
                      <span>{item.title}</span>
                      {item.icon}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
