import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import { projects } from "@/utils/Works/Works";
import { useTranslation } from "react-i18next";

const WorkItem = () => {
  const { t } = useTranslation();
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId
    ? projects[projectId as keyof typeof projects]
    : null;

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      scrollSnaps: true,
    } as EmblaOptionsType,
    [ClassNames()]
  );

  const SLIDE_COUNT = project?.image.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  if (!project) {
    return (
      <>
        <Header />
        <div className="text-white/80 dark:text-gray-800">
          <div className="flex justify-center min-h-screen">
            <div className="m-auto">
              <h1 className="text-2xl font-bold">{t("notfound")}</h1>
              <Link
                to="/works"
                className="text-[#ff63c3] dark:text-indigo-400 underline underline-offset-4  flex justify-center"
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
        <div>
          <div className="w-full max-w-[90%] md:max-w-[640px] -mt-[120px] -mb-[200px] h-[650px] touch-none mx-auto my-8">
            <ThreeModel />
          </div>
          <article className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
            <div className="flex flex-col justify-center w-full xs:w-[420px] sm:w-[420px] md:w-[486px] mx-auto ">
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
                    to="/works"
                    className="text-[#ff63c3] dark:text-indigo-400 hover:underline hover:underline-offset-4 cursor-pointer ml-1"
                  >
                    {t("back")}
                  </Link>
                </h3>
              </div>

              {/* proj desc */}
              <p className="indent-[1em] hyphens-auto text-justify my-3">
                {t(project.descriptionKey)}
              </p>
              {/* list of tech info */}
              <ul className="list-none xs:w-[300px] sm:w-[400px] md:w-[460px]  mx-auto mb-6">
                <li className="text-start">
                  <span className="uppercase text-sm font-semibold bg-[#9ae6b4]/20 dark:bg-[#9ae6b4]/50 text-[#9ae6b4] dark:text-[#38543d] text-center min-w-[45px] max-w-[65px] inline-block mr-2">
                    {t(project.stackName)}
                  </span>
                  <span>{t(project.stackKey)}</span>
                </li>
              </ul>
              {/* source */}
              <div className="flex justify-center mb-3 text-[#ff63c3] hover:underline hover:underline-offset-4">
                <a href={project.sourceKey} target="_blank">
                  {t(project.sourceName)}
                </a>
              </div>
              {/* img slider */}
              <div className="">
                <section className="embla">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="embla__container ">
                      {slides.map((index) => (
                        <div className="embla__slide " key={index}>
                          <div className="embla__slide__img ">
                            <img
                              src={project.image[index]}
                              alt=""
                              className="sm:w-[486px]  h-[233px] rounded-xl mx-auto"
                            />
                          </div>
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

export default WorkItem;
