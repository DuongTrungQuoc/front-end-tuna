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
    <div className="h-screen w-[280px] bg-ocean-900 p-8 text-white md:h-[80vh]">
      <button className="ml-auto flex xl:hidden" onClick={onToggle}>
        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
      </button>
      <div className="mt-6">
        <button
          className="mb-10 flex items-center space-x-4 bg-ocean-600 px-4 py-2"
          onClick={handleNewChat}
        >
          <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
          <p>Cuộc trò truyện mới</p>
        </button>
        <div className="max-h-[70vh] space-y-4 overflow-y-auto">
          <p>Gần đây</p>
          <div className="flex flex-col space-y-6">
            {data.map((chat) => (
              <Link
                to={`/chat/${chat.id}`}
                className="flex items-center justify-between bg-ocean-600 p-4"
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
