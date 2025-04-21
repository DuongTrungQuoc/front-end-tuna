import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { loginSuccess, logoutSuccess } from "../store/authSlice";
import { API_ENDPOINTS, AUTH_MESSAGES } from "../constants";
import { toast } from "react-toastify";
import API_CONFIG from "../config/api.js";

const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${API_CONFIG.baseURL}${API_ENDPOINTS.REFRESH_TOKEN}`,
      {},
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (err) {
    console.error("Refresh token error:", err);
    toast.error(AUTH_MESSAGES.REFRESH_TOKEN_FAILED);
    return null;
  }
};

export const createAxios = (user, dispatch, onLogout) => {
  const newInstance = axios.create({
    baseURL: API_CONFIG.baseURL,
  });

  newInstance.interceptors.request.use(
    async (config) => {
      if (!user?.accessToken) {
        return Promise.reject("No access token");
      }

      let date = new Date();
      const decodedToken = jwtDecode(user.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        if (data) {
          const refreshUser = {
            ...user,
            accessToken: data.accessToken,
          };
          dispatch(loginSuccess(refreshUser));
          config.headers["token"] = "Bearer " + data.accessToken;
        } else {
          dispatch(logoutSuccess());
          onLogout && onLogout();
          return Promise.reject("Failed to refresh token");
        }
      }
      return config;
    },
    (err) => {
      console.error("Request interceptor error:", err);
      return Promise.reject(err);
    },
  );
  return newInstance;
};
