import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "animate.css";

const NotFound = memo(() => {
  const { t } = useTranslation();

  return (
      <main className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
        <div className="flex flex-col justify-center items-center w-full mx-auto animate__animated animate__fadeIn animate__slow xs:w-[300px] sm:w-[400px] md:w-[486px] min-h-[400px]">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-[#ff63c3] dark:text-indigo-400 animate__animated animate__bounceIn">
                404
              </h1>
              <h2 className="text-2xl font-semibold">{t("notfound")}</h2>
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
  );
});

NotFound.displayName = "NotFound";

export default NotFound;