import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  return (
    <nav className="w-full backdrop-blur-lg fixed">
      <div className="w-[768px] h-[56px] flex  mx-auto px-2">
        <div className="flex min-w-full gap-12 h-[40px]  my-auto ">
          <div className="flex justify-between w-full my-auto">
            <div className="flex my-auto ">
              <h1 className="font-bold text-lg">Edgar Grishin </h1>

              <div className="flex ml-10 gap-4  my-auto">
                <a href="#" className="hover:underline">
                  Works
                </a>
                <a href="#" className="hover:underline flex gap-1">
                  <FaGithub className="my-auto" size={13} />
                  <span>Source</span>
                </a>
                <a href="#" className="hover:underline flex gap-1">
                  <FaGithub className="my-auto" size={13} />
                  <span>Source</span>
                </a>
                <a href="#" className="hover:underline flex gap-1">
                  <FaGithub className="my-auto" size={13} />
                  <span>Source</span>
                </a>
                <a href="#" className="hover:underline flex gap-1">
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
