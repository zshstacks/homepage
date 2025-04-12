import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";

const projects = {
  workspace: {
    title: "Workspace",
    description:
      "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
    stack: "React, TypeScript, Tailwind CSS",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Workspace project...",
  },
  todo: {
    title: "Todo",
    description:
      "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
    stack: "React, TypeScript, Tailwind CSS",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Todo project...",
  },
  weather: {
    title: "Weather",
    description:
      "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
    stack: "React, TypeScript, Tailwind CSS",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Weather project...",
  },
  calc: {
    title: "Calc",
    description: "A Workspace app",
    stack: "React, TypeScript, Tailwind CSS",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Calc project...",
  },
};

const WorkItem = () => {
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

  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  if (!project) {
    return (
      <>
        <Header />
        <div className="text-white/80">
          <div className="flex justify-center min-h-screen">
            <div className="mt-20">
              <h1 className="text-2xl font-bold">Project not found</h1>
              <Link to="/works" className="text-blue-400 underline">
                Back to my works
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
      <div className="flex  justify-center mx-auto min-h-full w-[768px]">
        <div>
          <div className=" w-[640px] h-[640px] touch-none -mt-[120px] -mb-[200px] ">
            <div className=" w-[640px] h-[640px] m-auto  absolute bottom-0 -top-88">
              <ThreeModel />
            </div>
          </div>
          <article className="relative opacity-100 text-white/80">
            <div className="flex flex-col justify-center w-[486px]  mx-auto  ">
              {/* back */}
              <div>
                <h3 className="flex ">
                  <span className="my-2">
                    <MdOutlineArrowBackIos color="white" size={12} />
                  </span>
                  <span className="text-[#ff63c3] hover:underline cursor-pointer ml-1">
                    Back to my works
                  </span>
                </h3>
              </div>
              {/* proj desc */}
              <p className="indent-[1em] hyphens-auto text-justify my-3">
                {project.description}
              </p>
              {/* list of tech info */}
              <ul className="list-none w-[460px] mx-auto mb-6">
                <li className="text-start">
                  <span className="uppercase text-sm font-semibold bg-[#9ae6b4]/20 text-[#9ae6b4] text-center min-w-[45px] max-w-[65px] inline-block mr-2">
                    Stack
                  </span>
                  <span>{project.stack}</span>
                </li>
              </ul>
              {/* img slider */}
              <div className="">
                <section className="embla">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="embla__container">
                      {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                          <div className="embla__slide__img">
                            <img
                              src={project.image}
                              alt=""
                              className="w-[486px] h-[233px] rounded-xl "
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
      <Footer />
    </div>
  );
};

export default WorkItem;
