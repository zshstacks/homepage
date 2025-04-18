import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SetupItemProps } from "@/types/types";
import { items } from "@/utils/Arrays/SetupArr";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const SetupDynamic: React.FC<SetupItemProps> = ({
  to,
  src,
  title,
  descKey,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Link to={to}>
        <img src={src} alt={title} className="rounded-2xl" />
        <div className="flex justify-center">
          <p className="text-xl">{t(title)}</p>
        </div>
        <p className="text-sm text-center">{t(descKey)}</p>
      </Link>
    </div>
  );
};

const SetupContent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Header />
      </div>

      <div className="flex justify-center mx-auto w-full px-4 md:w-[768px] min-h-screen">
        <div>
          <div className=" w-full max-w-[90%] md:max-w-[640px] -mt-[120px] -mb-[200px] h-[650px] touch-none mx-auto my-8 ">
            <ThreeModel />
          </div>
          <article className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeInUp  ">
            <div className="flex flex-col justify-center w-full mx-auto animate__animated animate__fadeIn animate__slow xs:w-[300px] sm:w-[400px] md:w-[486px]">
              <h3 className="font-bold text-xl  mb-3 ">{t("setup")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 ">
                {items.map((item) => (
                  <SetupDynamic
                    key={item.to + item.src}
                    to={item.to}
                    src={item.src}
                    title={item.title}
                    descKey={item.descKey}
                  />
                ))}
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
