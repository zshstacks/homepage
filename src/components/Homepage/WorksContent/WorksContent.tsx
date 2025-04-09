import React from "react";

const WorksContent = () => {
  return (
    <div className="w-full">
      <div className="flex  justify-center mx-auto min-h-full w-[768px]">
        <div>
          <div className="h-[640px] w-[640px]">
            <img src="/resized.png" alt="" className="" />
          </div>
          <article className="relative opacity-100 ">
            <div className="flex flex-col justify-center w-[486px]  mx-auto  ">
              <h3 className="font-bold text-xl mb-3 ">Works</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 ">
                <div>
                  <a href="#">
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
                  </a>
                </div>
                <div>
                  <a href="#">
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
                  </a>
                </div>
                <div>
                  <a href="#">
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
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src="/workspace(r).png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">Workspace</p>
                    </div>
                    <p className="text-sm text-center">A Workspace app</p>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WorksContent;
