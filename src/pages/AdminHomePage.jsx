import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  resetUserPassword,
} from "../store/apiRequest";

import { useNavigate } from "react-router-dom";

import { loginSuccess } from "../store/authSlice";
import { createAxios } from "../services/createInstance";
// import { toast } from "react-toastify";
const AdminHomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const axiosJWT = useMemo(
    () => createAxios(user, dispatch, loginSuccess),
    [user, dispatch],
  );

  const handleDelete = async (userId) => {
    await deleteUser(user.accessToken, dispatch, userId, axiosJWT);
  };

  const handleResetPassword = async (userId) => {
    try {
      await resetUserPassword(user.accessToken, userId, axiosJWT);
      // Refresh user list after reset
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    } catch (error) {
      console.error("Reset password error:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (!user.admin) {
      navigate("/user");
    } else if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, [user, navigate, dispatch]);

  return (
    <>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  USERNAME
                </th>
                <th scope="col" className="px-6 py-3">
                  EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                  ROLE
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((user) => {
                return (
                  <tr
                    className="border-b border-gray-200 odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                    key={user._id}
                  >
                    <th scope="row" className="px-6 py-4">
                      {user._id}
                    </th>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {user.username}
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {user.admin ? "admin" : "user"}
                    </td>
                    <td className="space-x-2 px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                        onClick={() => handleResetPassword(user._id)}
                      >
                        Reset
                      </a>
                      <a
                        href="#"
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AdminHomePage;
