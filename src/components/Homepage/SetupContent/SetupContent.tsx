import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const SetupContent = () => {
  const { t } = useTranslation();

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
              <h3 className="font-bold text-xl  mb-3 ">{t("setup")}</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 ">
                <div>
                  <Link to="/setup/neovim">
                    <img
                      src="/setup/neovim/main.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">{t("neovim")}</p>
                    </div>
                    <p className="text-sm text-center">{t("neovimMin")}</p>
                  </Link>
                </div>
                <div>
                  <Link to="/setup/pwsh">
                    <img
                      src="/setup/pwsh/pwsh.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">{t("pwsh")}</p>
                    </div>
                    <p className="text-sm text-center">{t("pwshMin")}</p>
                  </Link>
                </div>
                <div>
                  <Link to="/setup/arch">
                    <img
                      src="/setup/linux/arch.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">{t("linux")}</p>
                    </div>
                    <p className="text-sm text-center">{t("linuxMin")}</p>
                  </Link>
                </div>
                <div>
                  <Link to="/setup/vscode">
                    <img
                      src="/setup/vscode/main.png"
                      alt=""
                      className="rounded-2xl"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">{t("vscode")}</p>
                    </div>
                    <p className="text-sm text-center">{t("vscodeMin")}</p>
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

export default SetupContent;
