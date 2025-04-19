import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import FishList from "./components/FishList/FishList";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden font-roboto">
      <Header />
      <Banner />
      <Content />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
