import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../store/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../services/createInstance";
import { logoutSuccess } from "../../store/authSlice";
import { useState } from "react";
import { AUTH_MESSAGES, ROUTES } from "../../constants";

const MiniHeader = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = user?.accessToken;
  const id = user?.id;
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoutSuccess = () => {
    navigate(ROUTES.LOGIN);
  };

  let axiosJWT = createAxios(user, dispatch, handleLogoutSuccess);

  const handleLogout = async () => {
    if (!accessToken || !id) {
      dispatch(logoutSuccess());
      navigate(ROUTES.LOGIN);
      return;
    }

    if (window.confirm(AUTH_MESSAGES.LOGOUT_CONFIRM)) {
      setIsLoading(true);
      try {
        await logoutUser(accessToken, id, dispatch, navigate, axiosJWT);
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div className="flex bg-slate-300">
        <div className="ml-auto flex gap-1 px-4 py-2 text-ocean-700">
          {user ? (
            <>
              <p>
                Hi, <span className="font-bold">{user.username}</span>
              </p>
              <p> | </p>
              <p
                onClick={handleLogout}
                className={`cursor-pointer ${isLoading ? "opacity-50" : ""}`}
              >
                {isLoading ? AUTH_MESSAGES.LOGOUT_LOADING : "logout"}
              </p>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN} className="hover:font-bold">
                login
              </Link>
              <p> | </p>
              <Link to={ROUTES.REGISTER} className="hover:font-bold">
                register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MiniHeader;
