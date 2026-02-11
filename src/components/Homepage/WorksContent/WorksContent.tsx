import { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "animate.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { WorkItemProps } from "@/types/types";
import { items } from "@/utils/Arrays/WorkArr";

const WorkDynamic = memo<WorkItemProps>(({ to, src, title, descKey }) => {
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
          <h3 className="text-xl font-medium mb-1">{title}</h3>
        </div>
        <p className="text-sm text-center text-white/60 dark:text-gray-800/60">
          {t(descKey)}
        </p>
      </Link>
    </article>
  );
});

WorkDynamic.displayName = "WorkDynamic";

const WorksContent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { mainWorks, oldWorks } = useMemo(() => {
    return {
      mainWorks: items.filter((item) => !item.isOld),
      oldWorks: items.filter((item) => item.isOld),
    };
  }, []);

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

          <main
            className={`relative text-white/80 dark:text-gray-800 transition-all duration-700 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col justify-center w-full xs:w-[300px] sm:w-[400px] md:w-[486px] mx-auto ">
              <section className="mb-20" aria-labelledby="main-projects">
                <h2
                  id="main-projects"
                  className="font-bold text-2xl mb-6 border-b border-white/10 dark:border-gray-800/20 pb-2"
                >
                  {t("mainProjects")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
                  {mainWorks.map((item) => (
                    <WorkDynamic
                      key={`${item.to}-${item.src}`}
                      to={item.to}
                      title={item.title}
                      src={item.src}
                      descKey={item.descKey}
                    />
                  ))}
                </div>
              </section>

              {oldWorks.length > 0 && (
                <section aria-labelledby="archive-projects">
                  <div className="relative mb-6">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-white/5 dark:border-gray-800/10"></div>
                    </div>
                    <div className="relative flex justify-start">
                      <h2
                        id="archive-projects"
                        className="bg-[#1a1a1a] dark:bg-[#e6ddcf]   pr-3 text-sm font-medium text-white/40 dark:text-gray-800/40 uppercase tracking-widest"
                      >
                        {t("oldProjects")}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 opacity-60  duration-500">
                    {oldWorks.map((item) => (
                      <WorkDynamic
                        key={`${item.to}-${item.src}`}
                        to={item.to}
                        title={item.title}
                        src={item.src}
                        descKey={item.descKey}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>

      <div className="mt-20 animate__animated animate__fadeInUp animate__slow">
        <Footer />
      </div>
    </div>
  );
};

export default memo(WorksContent);
