import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";
import {
  faPlus,
  faRectangleList,
  faTrashCan,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../store/chatSlice";
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ onToggle }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.chat);
  const navigate = useNavigate();

  const handleNewChat = () => {
    dispatch(addChat());
  };

  const handleRemoveChat = (id) => {
    dispatch(removeChat(id));
    navigate("/chat");
  };

  return (
    <div className="bg-primaryBg-sideBar w-[280px] h-screen text-white p-8 ">
      <button className="flex ml-auto xl:hidden" onClick={onToggle}>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>
      <div className="mt-16">
        <button
          className="flex items-center px-4 py-2 space-x-4 bg-gray-600 mb-10"
          onClick={handleNewChat}
        >
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          <p>Cuộc trò truyện mới</p>
        </button>
        <div className="space-y-4 overflow-y-auto max-h-[70vh]">
          <p>Gần đây</p>
          <div className="flex flex-col space-y-6">
            {data.map((chat) => (
              <Link
                to={`/chat/${chat.id}`}
                className="flex items-center justify-between p-4 bg-gray-800"
                key={chat?.id}
              >
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faRectangleList} />
                  <p>{chat.title}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveChat(chat.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  onToggle: PropType.func,
};

export default SideBar;
