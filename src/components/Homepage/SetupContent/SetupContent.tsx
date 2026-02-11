import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SetupItemProps } from "@/types/types";
import { items } from "@/utils/Arrays/SetupArr";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";

const SetupDynamic = memo<SetupItemProps>(({ to, src, title, descKey }) => {
  const { t } = useTranslation();

  return (
    <article className="group">
      <Link to={to} className="block">
        <div className="overflow-hidden rounded-2xl mb-3">
          <img
            src={src}
            alt={title}
            className="rounded-2xl w-full transition-transform duration-300 group-hover:scale-105"
            fetchPriority="high"
          />
        </div>
        <div className="flex justify-center">
          <h3 className="text-xl font-medium mb-1">{t(title)}</h3>
        </div>
        <p className="text-sm text-center text-white/60 dark:text-gray-800/60">
          {t(descKey)}
        </p>
      </Link>
    </article>
  );
});

SetupDynamic.displayName = "SetupDynamic";

const SetupContent = () => {
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

          <main className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeInUp">
            <div className="flex flex-col justify-center w-full mx-auto animate__animated animate__fadeIn animate__slow xs:w-[300px] sm:w-[400px] md:w-[486px]">
              <h2 className="font-bold text-2xl mb-6 border-b border-white/10 dark:border-gray-800/20 pb-2">
                {t("setup")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
                {items.map((item) => (
                  <SetupDynamic
                    key={`${item.to}-${item.src}`}
                    to={item.to}
                    src={item.src}
                    title={item.title}
                    descKey={item.descKey}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp animate__slow mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default SetupContent;
