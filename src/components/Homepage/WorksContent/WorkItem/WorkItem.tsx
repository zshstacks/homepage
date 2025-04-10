import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { Link, useParams } from "react-router";

const projects = {
  workspace: {
    title: "Workspace",
    description:
      "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Workspace project...",
  },
  todo: {
    title: "Todo",
    description:
      "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Todo project...",
  },
  weather: {
    title: "Weather",
    description:
      "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Weather project...",
  },
  calc: {
    title: "Calc",
    description: "A Workspace app",
    image: "/workspace(r).png",
    longDescription: "Detailed information about the Calc project...",
  },
};

const WorkItem = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId
    ? projects[projectId as keyof typeof projects]
    : null;

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
          <div className="h-[640px] w-[640px]">
            <img src="/resized.png" alt="" className="" />
          </div>
          <article className="relative opacity-100 text-white/80">
            <div className="flex flex-col justify-center w-[486px]  mx-auto  ">
              <h3 className="font-bold text-xl mb-3 ">{project.title}</h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
