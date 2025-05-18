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
    <div className="relative w-full text-white xl:w-[80%]">
      <div className="flex items-center space-x-4 p-4">
        <button onClick={() => setMenuToggle(!menuToggle)}>
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 xl:hidden" />
        </button>
      </div>

      {menuToggle && (
        <div className="absolute left-0 top-0 h-full xl:hidden">
          <SideBar onToggle={() => setMenuToggle(!menuToggle)} />
        </div>
      )}

      <div className="mx-auto mt-6 w-full max-w-[90%] space-y-10">
        {id ? (
          <div className="flex h-[320px] flex-col space-y-4 overflow-y-auto overflow-x-hidden p-4">
            {Array.isArray(messageDetail) &&
              messageDetail.map((item) => (
                <div className="flex flex-col space-y-6" key={item.id}>
                  <div className="flex items-baseline space-x-4">
                    {item.isBot ? (
                      <>
                        <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />
                        <p dangerouslySetInnerHTML={{ __html: item.text }} />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                        <p>{item.text}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="mb-10 flex flex-col space-y-5">
            <div className="mb-6 space-y-1">
              <h2 className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">
                Xin Chào
              </h2>
              <p className="text-3xl">Hôm nay tôi có thể giúp gì cho bạn</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-ocean-900">
                <p>Lên kế hoạch bữa ăn</p>
              </div>
              <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-ocean-900">
                <p>Cách đo chỉ số của cá</p>
              </div>
              <div className="flex h-48 w-48 items-center justify-center rounded-lg bg-ocean-900">
                <p>Bí quyết giữ cá tươi ngon</p>
              </div>
              <div className="flex h-48 w-48 flex-col items-center justify-center rounded-lg bg-ocean-900">
                <p>Tạo hình ảnh với AI</p>
                <img src={ImgAI} alt="AI" className="h-32 w-32" />
              </div>
            </div>
          </div>
        )}
        <div className="flex w-full items-center space-x-4">
          <input
            type="text"
            value={inputChat}
            placeholder="Nhập câu hỏi của bạn"
            className="w-[90%] rounded-lg border bg-ocean-900 p-4"
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="rounded-lg bg-ocean-500 p-4 text-white"
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
