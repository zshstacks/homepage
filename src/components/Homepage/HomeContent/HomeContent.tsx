import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import "animate.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";

const HomeContent = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="w-full text-white/80 dark:text-gray-800 min-h-screen flex flex-col">
      <div className="flex justify-center">
        <Header />
      </div>

      <main className="mx-auto min-h-screen max-w-[768px] px-3 xs:px-4 sm:px-6 pt-[70px]">
        <div>
          <div className="w-full max-w-[90%] md:max-w-[640px] -mt-[120px] -mb-[200px] h-[650px] touch-none mx-auto my-8">
            <ThreeModel />
          </div>

          <article className="relative opacity-100 animate__animated animate__fadeInUp">
            <div className="flex flex-col justify-center w-full xs:max-w-[400px] sm:max-w-[486px] max-w-[320px] mx-auto animate__animated animate__fadeIn animate__slower">
              <div className="flex justify-center mx-auto xs:p-3 xs:mb-4 p-3 mb-4 w-full rounded-md bg-white/5 dark:bg-white/40 backdrop-blur-lg">
                {t("welcome")}
              </div>

              <div className="flex flex-col gap-1 w-full items-center mb-6">
                <h1 className="font-bold text-3xl xs:text-3xl sm:text-4xl text-center">
                  {t("name")}
                </h1>
                <p className="text-center text-white/70 dark:text-gray-800/70">
                  {t("position")}
                </p>
              </div>

              <section className="w-full mb-4">
                <h2 className="font-bold text-xl border-b-4 border-b-white/20 dark:border-b-gray-800/70 w-fit mt-6 mb-2 xs:mt-6">
                  {t("work")}
                </h2>
                <p className="indent-[1em] hyphens-auto text-justify leading-relaxed">
                  {t("workDesc")}
                </p>
                <div className="w-full mt-3">
                  <Link
                    to="/works"
                    className="bg-[#81e6d9] h-[40px] w-full sm:w-[146px] xs:h-[40px] xs:w-[146px] flex justify-center items-center mx-auto text-black dark:text-white/90 dark:bg-[#319795] font-semibold rounded-md hover:opacity-90 transition-opacity"
                    aria-label="View my portfolio"
                  >
                    {t("portfolio")}
                    <span className="ml-2 mt-[1px]" aria-hidden="true">
                      <MdOutlineNavigateNext className="my-auto text-center align-middle flex justify-center items-center" />
                    </span>
                  </Link>
                </div>
              </section>

              <section className="w-full mb-4">
                <h2 className="font-bold text-xl border-b-4 border-b-white/20 dark:border-b-gray-800/70 w-fit mb-2">
                  {t("love")} <span aria-hidden="true">♥</span>
                </h2>
                <p className="indent-[1em] hyphens-auto text-justify leading-relaxed">
                  {t("loveDesc")}
                </p>
              </section>

              <section className="w-full mt-4 xs:mt-4">
                <h2 className="font-bold text-xl border-b-4 border-b-white/20 dark:border-b-gray-800/70 w-fit mb-2">
                  {t("web")}
                </h2>
                <ul className="font-bold text-[#81e6d9] dark:text-[#2c7a7b]">
                  <li>
                    <a
                      href="https://github.com/zshstacks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit my GitHub profile"
                    >
                      <button className="hover:bg-[#81e6d9]/20 dark:hover:bg-[#81e6d9]/50 transition-all duration-200 rounded-md p-2 w-full sm:max-w-40 cursor-pointer flex items-center">
                        <FaGithub className="mr-2" aria-hidden="true" />
                        @zshstacks
                      </button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/zshstacks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit my X (Twitter) profile"
                    >
                      <button className="hover:bg-[#81e6d9]/20 dark:hover:bg-[#81e6d9]/50 transition-all duration-200 rounded-md p-2 w-full sm:max-w-40 cursor-pointer flex items-center">
                        <FaSquareXTwitter className="mr-2" aria-hidden="true" />
                        @zshstacks
                      </button>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
