import { Link } from "react-router-dom";
import Features from "../components/Features/Features";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Banner */}
      <Banner />

      {/* Features Section */}
      <Features />
      {/* About Us Section */}
      <AboutUs />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
