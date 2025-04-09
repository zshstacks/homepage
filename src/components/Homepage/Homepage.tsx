import { useCallback, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeContent from "./HomeContent/HomeContent";
import WorksContent from "./WorksContent/WorksContent";

const Homepage = () => {
  const [currentContent, setCurrentContent] = useState("home");

  const renderContent = () => {
    switch (currentContent) {
      case "home":
        return <HomeContent />;
      case "work":
        return <WorksContent />;
      default:
        return <HomeContent />;
    }
  };

  const handleContentChange = useCallback((content: string) => {
    setCurrentContent(content);
  }, []);

  return (
    <div className="text-white/80 ">
      <Header handleContentChange={handleContentChange} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Homepage;
