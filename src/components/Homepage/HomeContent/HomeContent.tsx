import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router";
import "animate.css";

const HomeContent = () => {
  return (
    <div className="w-full">
      <div className="flex  justify-center mx-auto min-h-full w-[768px]">
        <div>
          {/* threejs something */}
          <div className=" w-[640px] h-[640px] touch-none -mt-[120px] -mb-[200px] ">
            <div className=" w-[640px] h-[640px] m-auto  absolute bottom-0 -top-96">
              <ThreeModel />
            </div>
          </div>

          {/* content */}
          <article className="relative opacity-100">
            <div className="flex flex-col justify-center w-[486px]  mx-auto  ">
              <div className=" flex justify-center mx-auto p-3 mb-4 w-[486px] rounded-md bg-white/5 backdrop-blur-lg">
                Hello, I'm a fullstack web developer based in Latvia!
              </div>
              <div className="flex flex-col gap-1 w-[486px] items-center  ">
                <h2 className="font-bold text-4xl">Edgar Grishin</h2>
                <p>Fullstack developer</p>
              </div>
              <div className=" w-[486px] mb-4">
                <h3 className="font-bold text-xl border-b-4 border-b-white/20 w-fit mt-6 mb-2">
                  Work
                </h3>
                <p className="indent-[1em] hyphens-auto text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus consequuntur enim ducimus aliquid necessitatibus quo
                  perferendis illum voluptates magnam dignissimos ad nemo iusto
                  neque sint labore, corrupti ipsa est minus! Nesciunt enim
                  asperiores, quidem repellendus ad ipsam fuga voluptatum
                  consequuntur, illo molestias iure sint? Pariatur iste, amet
                  perferendis id vero hic possimus quam quos? Quibusdam facilis
                  ipsum nobis esse blanditiis. Veniam ipsam facilis vero
                  doloremque quos at dolorum consequatur soluta velit dolor
                  temporibus non, provident animi necessitatibus reiciendis
                  repellat maxime. Dolorem saepe omnis autem, adipisci in
                  laudantium eaque consequatur quidem!
                </p>
                <div className="w-[486px] mt-3 ">
                  <Link
                    to="/works"
                    className="bg-[#81e6d9] h-[40px] w-[146px] flex justify-center items-center mx-auto text-black font-semibold rounded-md "
                  >
                    My portfolio
                    <span className="ml-2 mt-[1px]">
                      <MdOutlineNavigateNext className="my-auto text-center align-middle flex justify-center items-center" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className=" w-[486px]">
                <h3 className="font-bold text-xl border-b-4 border-b-white/20 w-fit  mb-2">
                  I ♥
                </h3>
                <p className="indent-[1em] hyphens-auto text-justify ">
                  Games, Games development, Music, Art, Customization,
                  Programming
                </p>
              </div>
              <div className=" w-[486px] mt-4">
                <h3 className="font-bold text-xl border-b-4 border-b-white/20 w-fit  mb-2">
                  On the web
                </h3>
                <ul className=" font-bold text-[#81e6d9]">
                  <li>
                    <a href="https://github.com/wlr1" target="_blank">
                      <button className=" hover:bg-[#81e6d9]/20 transition-all duration-200 rounded-md p-2 max-w-40 cursor-pointer flex">
                        <span className="my-auto">
                          <FaGithub className="mr-2" />
                        </span>
                        @wlr1
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/wlr1_dev" target="_blank">
                      <button className=" hover:bg-[#81e6d9]/20 transition-all duration-200 rounded-md p-2 max-w-40 cursor-pointer flex">
                        <span className="my-auto">
                          <FaSquareXTwitter className="mr-2" />
                        </span>
                        @wlr1_dev
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
