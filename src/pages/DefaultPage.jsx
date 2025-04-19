import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import MiniHeader from "../components/MiniHeader/MiniHeader";

const DefaultPage = () => {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden font-roboto">
      <MiniHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default DefaultPage;
