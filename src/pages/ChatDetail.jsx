import ImgAI from "../assets/thinking.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../components/SideBar";
import { faRobot, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Gemini from "../gemini";
import { useDispatch } from "react-redux";
import { addMessage, setNameChat, addChat } from "../store/chatSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatDetail = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  const [messageDetail, setMessageDetail] = useState([]);
  const { data } = useSelector((state) => state.chat);
  const [inputChat, setInputChat] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length > 0) {
      if (id) {
        const chat = data.find((chat) => chat.id === id);
        if (chat) {
          console.log("chat2: ", chat);
          setDataDetail(chat);
          setMessageDetail(chat.messages);
        }
      } else {
        console.log("data: ", data);
        const newChat = data[data.length - 1];
        if (newChat) {
          navigate(`/chat/${newChat.id}`);
        }
      }
    }
  }, [data, id, navigate]);

  const handleChatDetail = async () => {
    if (id) {
      const chatText = await Gemini(inputChat, messageDetail);
      if (dataDetail.title === "Chat") {
        const promptName = `Người dùng hỏi về ${inputChat}. Không trả lời, chỉ cần cho tôi một cái tên cho cuộc trò chuyện này, Độ dài tối đa là 10 ký tự`;
        const newTitle = await Gemini(promptName);
        dispatch(setNameChat({ newTitle, chatId: id }));
      }
      if (chatText) {
        const dataMessage = {
          idChat: id,
          userMess: inputChat,
          botMess: chatText,
        };
        dispatch(addMessage(dataMessage));
        setInputChat("");
      }
    } else {
      dispatch(addChat());
    }
  };

  return (
    <div className="text-white xl:w-[80%] w-full relative">
      <div className=" p-4 flex items-center space-x-4">
        <button onClick={() => setMenuToggle(!menuToggle)}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 xl:hidden" />
        </button>

        <h1 className="uppercase text-xl font-bold">Gemini</h1>
      </div>

      {menuToggle && (
        <div className="absolute h-full top-0 left-0 xl:hidden">
          <SideBar onToggle={() => setMenuToggle(!menuToggle)} />
        </div>
      )}

      <div className="max-w-[90%] w-full mx-auto mt-20 space-y-10">
        {id ? (
          <div className="flex flex-col space-y-4 p-4 h-[400px] overflow-y-auto overflow-x-hidden">
            {Array.isArray(messageDetail) &&
              messageDetail.map((item) => (
                <div className="flex space-y-6 flex-col" key={item.id}>
                  <div className="flex space-x-4 items-baseline">
                    {item.isBot ? (
                      <>
                        <FontAwesomeIcon icon={faRobot} className="w-6 h-6" />
                        <p dangerouslySetInnerHTML={{ __html: item.text }} />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                        <p>{item.text}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <div className="space-y-1">
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-3xl inline-block text-transparent bg-clip-text font-bold">
                Xin Chào
              </h2>
              <p className="text-3xl">Hôm nay tôi có thể giúp gì cho bạn</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-48 h-48 bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                <p>Lên kế hoạch bữa ăn</p>
              </div>
              <div className="w-48 h-48 bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                <p>Cách đo chỉ số của cá</p>
              </div>
              <div className="w-48 h-48 bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                <p>Bí quyết giữ cá tươi ngon</p>
              </div>
              <div className="w-48 h-48 bg-primaryBg-sideBar flex items-center justify-center rounded-lg flex-col">
                <p>Tạo hình ảnh với AI</p>
                <img src={ImgAI} alt="AI" className="w-32 h-32" />
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4 w-full">
          <input
            type="text"
            value={inputChat}
            placeholder="Nhập câu hỏi của bạn"
            className="p-4 rounded-lg bg-primaryBg-default w-[90%] border"
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="bg-green-500 p-4 rounded-lg text-white"
            onClick={handleChatDetail}
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatDetail;
