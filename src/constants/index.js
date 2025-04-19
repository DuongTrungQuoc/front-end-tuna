export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: "Đăng nhập thành công",
  LOGIN_FAILED: "Đăng nhập thất bại",
  LOGOUT_SUCCESS: "Đăng xuất thành công",
  LOGOUT_FAILED: "Đăng xuất thất bại",
  REGISTER_SUCCESS: "Đăng ký thành công",
  REGISTER_FAILED: "Đăng ký thất bại",
  LOGOUT_CONFIRM: "Bạn có chắc chắn muốn đăng xuất?",
  LOGOUT_LOADING: "Đang đăng xuất...",
  REFRESH_TOKEN_FAILED: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại",
  RESET_PASSWORD_SUCCESS:
    "Đặt lại mật khẩu thành công! Mật khẩu mới là: 123456",
  RESET_PASSWORD_FAILED: "Không thể đặt lại mật khẩu",
};

export const API_ENDPOINTS = {
  LOGIN: "/v1/auth/login",
  LOGOUT: "/v1/auth/logout",
  REGISTER: "/v1/auth/register",
  REFRESH_TOKEN: "/v1/auth/refresh",
  RESET_PASSWORD: "/v1/auth/reset-password",
  USERS: "/v1/user",
};

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  USER: "/user",
  ADMIN: "/admin",
  CHAT: "/chat",
};
