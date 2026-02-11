import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import "animate.css";

const NotFound = memo(() => {
  const { t } = useTranslation();

  return (
      <div className="w-full">
        <div className="flex justify-center">
          <Header />
        </div>

        <div className="flex justify-center mx-auto w-full px-4 md:w-[768px] min-h-screen">
          <div className="w-full">
            <div className="w-full max-w-[90%] md:max-w-[640px] -mt-[120px] -mb-[200px] h-[650px] touch-none mx-auto my-8">
              <ThreeModel />
            </div>

            <main className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
              <div className="flex flex-col justify-center items-center w-full mx-auto animate__animated animate__fadeIn animate__slow xs:w-[300px] sm:w-[400px] md:w-[486px] min-h-[400px]">
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-8xl font-bold text-[#ff63c3] dark:text-indigo-400 animate__animated animate__bounceIn">
                      404
                    </h1>
                    <h2 className="text-2xl font-semibold">
                      {t("notfound")}
                    </h2>
                  </div>

                  <p className="text-white/60 dark:text-gray-800/60 max-w-md mx-auto">
                    {t("notfoundDesc")}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link
                        to="/"
                        className="bg-[#81e6d9] hover:bg-[#81e6d9]/80 h-[40px] px-6 flex justify-center items-center text-black dark:text-white/90 dark:bg-[#319795] dark:hover:bg-[#319795]/80 font-semibold rounded-md transition-colors duration-200"
                    >
                      {t("backHome")}
                    </Link>

                    <Link
                        to="/works"
                        className="border border-[#81e6d9] dark:border-[#319795] hover:bg-[#81e6d9]/10 dark:hover:bg-[#319795]/10 h-[40px] px-6 flex justify-center items-center text-[#81e6d9] dark:text-[#319795] font-semibold rounded-md transition-colors duration-200"
                    >
                      {t("viewWorks")}
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="animate__animated animate__fadeIn animate__slow mt-36">
          <Footer />
        </div>
      </div>
  );
});

NotFound.displayName = "NotFound";

export default NotFound;