import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeContent from "./HomeContent/HomeContent";

const Homepage = () => {
  return (
    <div className="text-white/80 ">
      <Header />

      <HomeContent />

      <Footer />
    </div>
  );
};

export default Homepage;
