import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header/Header";
import MiniHeader from "../components/MiniHeader/MiniHeader";
import Footer from "../components/Footer/Footer";

function ChatAI() {
  return (
    <>
      <MiniHeader />
      <Header />
      <div className="flex h-screen bg-ocean-800 md:h-[80vh]">
        <div className="hidden xl:block">
          <SideBar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default ChatAI;
