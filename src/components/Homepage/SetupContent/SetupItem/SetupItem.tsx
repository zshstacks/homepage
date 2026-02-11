import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";
import { MdOutlineArrowBackIos, MdOutlineArrowDownward } from "react-icons/md";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { setups } from "@/utils/Setup/Setup";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";

const SetupItem = () => {
  const { t } = useTranslation();
  const { setupId } = useParams<{ setupId: string }>();

  const setup = useMemo(
    () => (setupId ? setups[setupId as keyof typeof setups] : null),
    [setupId],
  );

  const imageIndices = useMemo(
    () =>
      setup ? Array.from({ length: setup.image.length }, (_, i) => i) : [],
    [setup],
  );

  if (!setup) {
    return (
      <>
        <Header />
        <div className="text-white/80 dark:text-gray-800">
          <div className="flex justify-center min-h-screen">
            <div className="m-auto text-center">
              <h1 className="text-2xl font-bold mb-4">{t("notfoundSetup")}</h1>
              <Link
                to="/setup"
                className="text-[#ff63c3] dark:text-indigo-400 underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {t("backSetup")}
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

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

          <article className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
            <div className="flex flex-col justify-center w-full xs:w-[300px] sm:w-[400px] md:w-[486px] mx-auto">
              <nav className="mb-4">
                <Link
                  to="/setup"
                  className="flex items-center text-[#ff63c3] dark:text-indigo-400 hover:underline hover:underline-offset-4 cursor-pointer transition-opacity hover:opacity-80"
                  aria-label="Back to setup page"
                >
                  <MdOutlineArrowBackIos
                    size={12}
                    className="text-white dark:text-gray-800 mr-1"
                    aria-hidden="true"
                  />
                  {t("backSetup")}
                </Link>
              </nav>

              <div className="flex flex-col justify-center mb-6">
                <p className="indent-[1em] hyphens-auto text-center my-3 leading-relaxed">
                  {t(setup.descriptionKey)}
                </p>
                {setup.download && (
                  <div className="mx-auto text-center">
                    <MdOutlineArrowDownward
                      size={23}
                      className="mx-auto animate-pulse mb-2"
                      aria-hidden="true"
                    />
                    <a
                      href={setup.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff63c3] hover:underline-offset-4 hover:underline transition-opacity hover:opacity-80"
                      aria-label="Download setup files"
                    >
                      {t("download")}
                    </a>
                  </div>
                )}
              </div>

              <section
                className="grid grid-cols-1 gap-3"
                aria-label="Setup screenshots"
              >
                {imageIndices.map((index) => (
                  <div key={`setup-image-${index}`} className="group">
                    <div className="hover:scale-150 transition-all duration-200 ease-in cursor-zoom-in overflow-hidden rounded-xl">
                      <img
                        src={setup.image[index]}
                        alt={`${t(setup.descriptionKey)} screenshot ${index + 1}`}
                        className="rounded-xl w-full"
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index < 2 ? "high" : "low"}
                      />
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </article>
        </div>
      </div>

      <div className="animate__animated animate__fadeIn animate__slow mt-36">
        <Footer />
      </div>
    </div>
  );
};

export default memo(SetupItem);
