import axios from "axios";
import { toast } from "react-toastify";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} from "./authSlice";
import {
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
  deleteUserStart,
  deleteUsersSuccess,
  deleteUserFailed,
} from "./userSlice";
import { API_ENDPOINTS, AUTH_MESSAGES, ROUTES } from "../constants";
import API_CONFIG from "../config/api.js";

const api = axios.create({
  baseURL: API_CONFIG.baseURL,
});

const handleError = (error, defaultMessage) => {
  console.error("API Error:", error);
  let errorMessage;

  if (error.response?.data && typeof error.response.data === "string") {
    errorMessage = error.response.data;
  } else if (error.response?.data?.message) {
    errorMessage = error.response.data.message;
  } else if (error.message) {
    errorMessage = error.message;
  } else {
    errorMessage = defaultMessage;
  }

  toast.error(errorMessage);
  return errorMessage;
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await api.post(API_ENDPOINTS.LOGIN, user);
    dispatch(loginSuccess(res.data));
    toast.success(AUTH_MESSAGES.LOGIN_SUCCESS);
    if (res.data.admin) {
      navigate(ROUTES.ADMIN);
    } else {
      navigate(ROUTES.USER);
    }
  } catch (err) {
    dispatch(loginFailed());
    handleError(err, AUTH_MESSAGES.LOGIN_FAILED);
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await api.post(API_ENDPOINTS.REGISTER, user);
    dispatch(registerSuccess());
    toast.success(AUTH_MESSAGES.REGISTER_SUCCESS);
    navigate(ROUTES.LOGIN);
  } catch (err) {
    dispatch(registerFailed());
    const errorMessage = handleError(err, AUTH_MESSAGES.REGISTER_FAILED);
    throw new Error(errorMessage);
  }
};

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get(API_ENDPOINTS.USERS, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
    handleError(err, "Không thể lấy danh sách người dùng");
  }
};

export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete(`${API_ENDPOINTS.USERS}/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUsersSuccess(res.data));
    toast.success(res.data);
  } catch (err) {
    dispatch(deleteUserFailed(err.response?.data));
    handleError(err, "Không thể xóa người dùng");
  }
};

export const logoutUser = async (
  accessToken,
  id,
  dispatch,
  navigate,
  axiosJWT,
) => {
  dispatch(logoutStart());
  try {
    await axiosJWT.post(API_ENDPOINTS.LOGOUT, id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
    toast.success(AUTH_MESSAGES.LOGOUT_SUCCESS);
    navigate(ROUTES.LOGIN);
  } catch (err) {
    dispatch(logoutFailed());
    handleError(err, AUTH_MESSAGES.LOGOUT_FAILED);
  }
};

export const resetUserPassword = async (accessToken, userId, axiosJWT) => {
  try {
    const res = await axiosJWT.post(
      API_ENDPOINTS.RESET_PASSWORD,
      { userId },
      {
        headers: { token: `Bearer ${accessToken}` },
      },
    );
    toast.success(AUTH_MESSAGES.RESET_PASSWORD_SUCCESS);
    return res.data;
  } catch (err) {
    handleError(err, AUTH_MESSAGES.RESET_PASSWORD_FAILED);
    throw err;
  }
};
