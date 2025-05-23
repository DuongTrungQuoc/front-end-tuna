import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAxios } from "../../services/createInstance";
import {
  getAllUsers,
  deleteUser,
  resetUserPassword,
  createUser,
  updateUser,
} from "../../store/apiRequest";
import { loginSuccess } from "../../store/authSlice";
import {
  RiSearchLine,
  RiFilterLine,
  RiEdit2Line,
  RiDeleteBinLine,
  RiLockPasswordLine,
  RiCloseLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    admin: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const { allUsers, isFetching: loading } = useSelector(
    (state) => state.users.users,
  );
  const axiosJWT = useMemo(
    () => createAxios(currentUser, dispatch, loginSuccess),
    [currentUser, dispatch],
  );

  useEffect(() => {
    if (currentUser?.accessToken) {
      getAllUsers(currentUser.accessToken, dispatch, axiosJWT);
    }
  }, [currentUser, dispatch, axiosJWT]);

  const handleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      await deleteUser(currentUser.accessToken, dispatch, userId, axiosJWT);
      // Refresh danh sách sau khi xóa
      getAllUsers(currentUser.accessToken, dispatch, axiosJWT);
    }
  };

  const handleResetPassword = async (userId) => {
    if (
      window.confirm(
        "Bạn có chắc chắn muốn đặt lại mật khẩu cho người dùng này?",
      )
    ) {
      try {
        await resetUserPassword(currentUser.accessToken, userId, axiosJWT);
        // Refresh danh sách sau khi reset
        getAllUsers(currentUser.accessToken, dispatch, axiosJWT);
      } catch (error) {
        console.error("Reset password error:", error);
      }
    }
  };

  const handleOpenModal = (mode, user = null) => {
    setIsEditMode(mode === "edit");
    setSelectedUser(user);
    if (mode === "edit" && user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: "",
        admin: user.admin,
      });
    } else {
      setFormData({
        username: "",
        email: "",
        password: "",
        admin: false,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({
      username: "",
      email: "",
      password: "",
      admin: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateUser(
          currentUser.accessToken,
          dispatch,
          selectedUser._id,
          formData,
          axiosJWT,
        );
      } else {
        await createUser(currentUser.accessToken, dispatch, formData, axiosJWT);
      }
      handleCloseModal();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  // Search filter
  const filteredUsers = allUsers
    ? allUsers.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  // Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const direction = sortConfig.direction === "asc" ? 1 : -1;
    if (sortConfig.key === "_id") {
      return direction * (a._id > b._id ? 1 : -1);
    }
    return (
      direction *
      (a[sortConfig.key]
        ?.toString()
        .localeCompare(b[sortConfig.key]?.toString()) || 0)
    );
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-ocean-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Quản lý người dùng
        </h1>
        <button
          onClick={() => handleOpenModal("create")}
          className="rounded-lg bg-ocean-600 px-4 py-2 text-white hover:bg-ocean-700"
        >
          Thêm người dùng mới
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <RiSearchLine className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button className="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:text-white">
          <RiFilterLine className="h-5 w-5" />
          <span>Lọc</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                onClick={() => handleSort("_id")}
              >
                ID
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                onClick={() => handleSort("username")}
              >
                Username
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                onClick={() => handleSort("email")}
              >
                Email
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                onClick={() => handleSort("admin")}
              >
                Vai trò
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {currentUsers.map((user) => (
              <tr
                key={user._id}
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                  {user._id}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${user.username}&background=0D8ABC&color=fff`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-center text-sm font-medium text-gray-900 dark:text-white">
                        {user.username}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {user.email}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.admin
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    }`}
                  >
                    {user.admin ? "Admin" : "User"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                  <button
                    className="mr-3 text-ocean-600 hover:text-ocean-900 dark:hover:text-ocean-400"
                    onClick={() => handleOpenModal("edit", user)}
                    title="Edit user"
                  >
                    <RiEdit2Line className="h-5 w-5" />
                  </button>
                  <button
                    className="mr-3 text-yellow-600 hover:text-yellow-900 dark:hover:text-yellow-400"
                    onClick={() => handleResetPassword(user._id)}
                    title="Reset password"
                  >
                    <RiLockPasswordLine className="h-5 w-5" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
                    onClick={() => handleDelete(user._id)}
                    title="Delete user"
                  >
                    <RiDeleteBinLine className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isEditMode
                  ? "Chỉnh sửa người dùng này"
                  : "Thêm người dùng mới"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <RiCloseLine className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password {isEditMode && "(để trống để giữ nguyên mật khẩu)"}
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required={!isEditMode}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {showPassword ? (
                      <RiEyeOffLine className="h-5 w-5" />
                    ) : (
                      <RiEyeLine className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Người này có quyền admin không ?
                </label>
                <input
                  type="checkbox"
                  name="admin"
                  checked={formData.admin}
                  onChange={handleInputChange}
                  className="ml-2 h-4 w-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500 dark:border-gray-600"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700"
                >
                  {isEditMode ? "Cập nhật" : "Thêm mới"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Hiện từ{" "}
              <span className="font-medium">{indexOfFirstUser + 1}</span> tới{" "}
              <span className="font-medium">
                {Math.min(indexOfLastUser, sortedUsers.length)}
              </span>{" "}
              trên tổng{" "}
              <span className="font-medium">{sortedUsers.length}</span> người
              dùng
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                    currentPage === index + 1
                      ? "z-10 bg-ocean-600 text-white dark:bg-ocean-500"
                      : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
