import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { Link } from "react-router";
import "animate.css";
import { useTranslation } from "react-i18next";

const WorksContent = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Header />
      </div>

      <div className="flex justify-center mx-auto w-full px-4 md:w-[768px] min-h-screen">
        <div>
          <div className="w-full max-w-[90%] md:max-w-[640px] -mt-[120px] -mb-[200px] h-[650px] touch-none mx-auto my-8">
            <ThreeModel />
          </div>
          <article className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeInUp">
            <div className="flex flex-col justify-center w-full xs:w-[300px] sm:w-[400px] md:w-[486px] mx-auto animate__animated animate__fadeIn animate__slow">
              <h3 className="font-bold text-xl mb-3">{t("works")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
                <div>
                  <Link to="/works/workspace">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl w-full"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">Workspace</p>
                    </div>
                    <p className="text-sm text-center">{t("workspaceDesc")}</p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/dropmusic">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl w-full"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">DropMusic</p>
                    </div>
                    <p className="text-sm text-center">{t("dropmusicDesc")}</p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/mybooks">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl w-full"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">MyBooks</p>
                    </div>
                    <p className="text-sm text-center">{t("mybooksDesc")}</p>
                  </Link>
                </div>
                <div>
                  <Link to="/works/mybooks">
                    <img
                      src="/works/workspace/main.png"
                      alt=""
                      className="rounded-2xl w-full"
                    />
                    <div className="flex justify-center">
                      <p className="text-xl">MyBooks</p>
                    </div>
                    <p className="text-sm text-center">{t("mybooksDesc")}</p>
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
