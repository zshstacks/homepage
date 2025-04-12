import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import React from "react";
import { Link } from "react-router";
import "animate.css";

const WorksContent = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex  justify-center mx-auto min-h-full w-[768px]">
        <div>
          <div className=" w-[640px] h-[640px] touch-none -mt-[120px] -mb-[200px] ">
            <div className=" w-[640px] h-[640px] m-auto  absolute bottom-0 -top-88">
              <ThreeModel />
            </div>
          </div>
          <article className="relative opacity-100 text-white/80">
            <div className="flex flex-col justify-center w-[486px]  mx-auto  ">
              <h3 className="font-bold text-xl mb-3 ">Works</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 ">
                <div>
                  <Link to="/works/workspace">
                    <img
                      src="/workspace(r).png"
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
                  <Link to="/works/todo">
                    <img
                      src="/workspace(r).png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">Todo</p>
                    </div>
                    <p className="text-sm text-center">
                      A Markdown note-taking app with 100+ plugins,
                      cross-platform and encrypted data sync support
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/weather">
                    <img
                      src="/workspace(r).png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">Weather</p>
                    </div>
                    <p className="text-sm text-center">
                      A Markdown note-taking app with 100+ plugins,
                      cross-platform and encrypted data sync support
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/calc">
                    <img
                      src="/workspace(r).png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">Calc</p>
                    </div>
                    <p className="text-sm text-center">A Workspace app</p>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorksContent;
