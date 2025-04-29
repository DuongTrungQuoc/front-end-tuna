import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAuth = ({ children }) => {
  const user = useSelector((state) => state.auth.login?.currentUser);

  // Nếu user đã đăng nhập, chuyển hướng về trang chủ hoặc trang user tùy theo role
  if (user) {
    return <Navigate to={user.admin ? "/admin" : "/user"} replace />;
  }

  // Nếu chưa đăng nhập, cho phép truy cập các trang auth
  return children;
};

export default ProtectedAuth;
