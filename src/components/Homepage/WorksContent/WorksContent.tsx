import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { Link } from "react-router";
import "animate.css";

const WorksContent = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex justify-center mx-auto w-[768px]  min-h-screen">
        <div>
          <div className=" w-[640px] h-[640px] touch-none -mt-[120px] -mb-[200px] ">
            <ThreeModel />
          </div>
          <article className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeInUp  ">
            <div className="flex flex-col justify-center w-[486px] mx-auto animate__animated animate__fadeIn animate__slow">
              <h3 className="font-bold text-xl  mb-3 ">Works</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 ">
                <div>
                  <Link to="/works/workspace">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">Workspace</p>
                    </div>
                    <p className="text-sm text-center">
                      A Markdown note-taking app with 100+ plugins,
                      cross-platform and encrypted data sync support
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/dropmusic">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">DropMusic</p>
                    </div>
                    <p className="text-sm text-center">
                      A Markdown note-taking app with 100+ plugins,
                      cross-platform and encrypted data sync support
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/mybooks">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">MyBooks</p>
                    </div>
                    <p className="text-sm text-center">
                      A Markdown note-taking app with 100+ plugins,
                      cross-platform and encrypted data sync support
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/mybooks">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">MyBooks</p>
                    </div>
                    <p className="text-sm text-center">
                      A Markdown note-taking app with 100+ plugins,
                      cross-platform and encrypted data sync support
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp animate__slow">
        <Footer />
      </div>
    </div>
  );
};

export default WorksContent;
