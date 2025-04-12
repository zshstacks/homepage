import { HeaderProps } from "@/types/types";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";

const Header: React.FC<HeaderProps> = ({ handleContentChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (handleContentChange) {
      handleContentChange(path === "/" ? "home" : "work");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="w-full backdrop-blur-lg fixed text-white/80 z-50">
      <div className="w-[768px] h-[56px] flex  mx-auto px-2">
        <div className="flex min-w-full gap-12 h-[40px]  my-auto ">
          <div className="flex justify-between w-full my-auto">
            <div className="flex my-auto ">
              <h1 className="font-bold text-lg">
                <button
                  className=" cursor-pointer"
                  onClick={() => handleNavigation("/")}
                >
                  Edgar Grishin
                </button>
              </h1>

              <div className="flex ml-10 gap-4  my-auto">
                <button
                  onClick={() => handleNavigation("/works")}
                  className="hover:underline  cursor-pointer"
                >
                  Works
                </button>
                <a
                  href="https://github.com/wlr1/homepage"
                  className="hover:underline flex gap-1"
                  target="_blank"
                >
                  <FaGithub className="my-auto" size={13} />
                  <span>Source</span>
                </a>
              </div>
            </div>

            <div className="bg-amber-500 rounded-md h-[40px] w-[40px] flex my-auto cursor-pointer">
              <MdOutlineLightMode size={23} color="white" className="m-auto" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
