import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { setups } from "@/utils/Setup/Setup";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos, MdOutlineArrowDownward } from "react-icons/md";
import { Link, useParams } from "react-router";

const SetupItem = () => {
  const { t } = useTranslation();
  const { setupId } = useParams<{ setupId: string }>();
  const setup = setupId ? setups[setupId as keyof typeof setups] : null;

  const IMAGE_COUNT = setup?.image.length;
  const img = Array.from(Array(IMAGE_COUNT).keys());

  if (!setup) {
    return (
      <>
        <Header />
        <div className="text-white/80 dark:text-gray-800">
          <div className="flex justify-center min-h-screen">
            <div className="m-auto">
              <h1 className="text-2xl font-bold">{t("notfoundSetup")}</h1>
              <Link
                to="/setup"
                className="text-[#ff63c3] dark:text-indigo-400 underline  flex justify-center"
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
      <Header />
      <div className="flex  justify-center mx-auto w-[768px]">
        <div>
          <div className=" w-[640px] h-[640px] touch-none -mt-[120px] -mb-[200px] ">
            <ThreeModel />
          </div>
          <article className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
            <div className="flex flex-col justify-center w-[486px]  mx-auto  ">
              {/* back */}
              <div>
                <h3 className="flex ">
                  <span className="my-2">
                    <MdOutlineArrowBackIos
                      size={12}
                      className="text-white dark:text-gray-800"
                    />
                  </span>
                  <Link
                    to="/setup"
                    className="text-[#ff63c3] dark:text-indigo-400 hover:underline cursor-pointer ml-1"
                  >
                    {t("backSetup")}
                  </Link>
                </h3>
              </div>

              {/* proj desc */}
              <div className="flex flex-col justify-center mb-2">
                <p className="indent-[1em] hyphens-auto  text-center my-3">
                  {t(setup.descriptionKey)}
                </p>
                {setup.download === "" ? (
                  ""
                ) : (
                  <div className="mx-auto">
                    <MdOutlineArrowDownward
                      size={23}
                      className=" mx-auto animate-pulse"
                    />
                    <a
                      href={setup.download}
                      target="_blank"
                      className="mx-auto  text-[#ff63c3] hover:underline-offset-4 hover:underline"
                    >
                      {t("download")}
                    </a>
                  </div>
                )}
              </div>

              <section className="grid grid-cols-1 gap-3">
                {img.map((index) => (
                  <div key={index}>
                    <div className="hover:scale-150 transition-all duration-200 cursor-zoom-in ">
                      <img
                        src={setup.image[index]}
                        alt="neovim setup"
                        className="rounded-xl"
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

export default SetupItem;
