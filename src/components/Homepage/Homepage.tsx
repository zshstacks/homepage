
import { memo } from "react";
import HomeContent from "./HomeContent/HomeContent";

const Homepage = memo(() => {
    return  <div className="text-white/80 dark:text-gray-800 min-h-screen flex flex-col "><HomeContent />   </div>;
});

Homepage.displayName = "Homepage";

export default Homepage;