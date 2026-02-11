import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { projects } from "@/utils/Works/Works";

const WorkItem = () => {
  const { t } = useTranslation();
  const { projectId } = useParams<{ projectId: string }>();

  const project = useMemo(
      () => (projectId ? projects[projectId as keyof typeof projects] : null),
      [projectId]
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [ClassNames()]);

  if (!project) {
    return (
        <>
          <Header />
          <div className="text-white/80 dark:text-gray-800">
            <div className="flex justify-center min-h-screen">
              <div className="m-auto text-center">
                <h1 className="text-2xl font-bold mb-4">{t("notfound")}</h1>
                <Link
                    to="/works"
                    className="text-[#ff63c3] dark:text-indigo-400 underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  {t("back")}
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
              <div className="max-w-[500px] mx-auto">

                <nav
                    className="flex items-center gap-2 mb-4 text-sm"
                    aria-label="Breadcrumb"
                >
                  <Link
                      to="/works"
                      className="text-[#ff63c3] dark:text-indigo-400 hover:underline flex items-center gap-1 hover:opacity-80 transition-opacity"
                  >
                    {t("works")}
                  </Link>
                  <span
                      className="text-white/20 dark:text-gray-800/20 text-xs mt-0.5 tracking-tighter mx-1 font-bold"
                      aria-hidden="true"
                  >
                  &gt;
                </span>
                  <h1 className="font-bold text-lg text-white/90 dark:text-gray-800/90">
                    {project.title}
                  </h1>
                </nav>

                <p className="leading-relaxed text-justify mb-8 text-[15px] text-white/70 dark:text-gray-800/70">
                  {t(project.descriptionKey)}
                </p>


                <div className="space-y-4 mb-10 text-sm">
                  <div className="flex items-start gap-4">
                  <span className="uppercase text-[10px] tracking-widest font-bold bg-emerald-500/20 text-emerald-400 dark:bg-emerald-500/30 dark:text-emerald-600 px-2 py-0.5 rounded mt-0.5 min-w-[65px] text-center">
                    {t(project.stackName)}
                  </span>
                    <span className="text-white/80 dark:text-gray-800/80 leading-snug">
                    {project.stackKey}
                  </span>
                  </div>

                  {project.sourceKey && (
                      <div className="flex items-center gap-4">
                    <span className="uppercase text-[10px] tracking-widest font-bold bg-[#ff63c3]/20 text-[#ff63c3] dark:bg-indigo-400/20 dark:text-indigo-600 px-2 py-0.5 rounded min-w-[65px] text-center">
                      {t("source")}
                    </span>
                        <a
                            href={project.sourceKey}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff63c3] dark:text-indigo-400 hover:underline break-all hover:opacity-80 transition-opacity"
                            aria-label="View project source code"
                        >
                          {project.sourceKey.replace("https://", "")}
                        </a>
                      </div>
                  )}
                </div>


                <div className="rounded-2xl overflow-hidden border border-white/5 dark:border-gray-800/10 shadow-2xl bg-black/20 dark:bg-white/10">
                  <section className="embla" aria-label="Project screenshots carousel">
                    <div className="overflow-hidden" ref={emblaRef}>
                      <div className="embla__container flex">
                        {project.image.map((img, index) => (
                            <div
                                className="embla__slide flex-[0_0_100%] min-w-0 cursor-pointer"
                                key={`project-image-${index}`}
                            >
                              <img
                                  src={img}
                                  alt={`${project.title} screenshot ${index + 1} of ${project.image.length}`}
                                  className="w-full aspect-video object-cover"
                                  loading={index === 0 ? "eager" : "lazy"}
                              />
                            </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
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

export default memo(WorkItem);