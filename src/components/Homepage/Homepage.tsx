import { memo } from "react";
import HomeContent from "./HomeContent/HomeContent";

const Homepage = memo(() => {
    return <HomeContent />;
});

Homepage.displayName = "Homepage";

export default Homepage;