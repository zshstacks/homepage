import { Works } from "@/types/types";

export const projects: Record<string, Works> = {
  workspace: {
    title: "Workspace",
    descriptionKey: "projects.workspace.description",
    stackName: "projects.workspace.stack",
    stackKey:
      "React, Redux, TypeScript, Tailwind CSS, Golang(Gin), MySQL, SupaBase, Redis, Docker",
    sourceName: "projects.workspace.source",
    sourceKey: "https://github.com/zshstacks/workspace_go",
    image: [
      "/works/workspace/main.png",
      "/works/workspace/appearance.png",
      "/works/workspace/signin.png",
      "/works/workspace/signup.png",
    ],
    longDescription: "Detailed information about the Workspace project...",
  },
  dropmusic: {
    title: "DropMusic",
    descriptionKey: "projects.dropmusic.description",
    stackName: "projects.workspace.stack",
    stackKey: "React, TypeScript, Tailwind CSS",
    sourceName: "projects.dropmusic.source",
    sourceKey: "https://github.com/zshstacks/DropMusic",
    image: [
      "/works/dropmusic/drag.png",
      "/works/dropmusic/main.png",
      "/works/dropmusic/menu.png",
    ],
    longDescription: "Detailed information about the Todo project...",
  },
  mybooks: {
    title: "MyBooks",
    descriptionKey: "projects.mybooks.description",
    stackName: "projects.workspace.stack",
    stackKey: "React, TypeScript, Tailwind CSS",
    sourceName: "projects.mybooks.source",
    sourceKey: "https://github.com/zshstacks/MyBooks",
    image: [
      "/works/mybooks/main.png",
      "/works/mybooks/search.png",
      "/works/mybooks/details.png",
    ],
    longDescription: "Detailed information about the Weather project...",
  },
  calc: {
    title: "Calc",
    descriptionKey: "projects.calc.description",
    stackName: "projects.workspace.stack",
    stackKey: "React, TypeScript, Tailwind CSS",
    sourceName: "",
    sourceKey: "",
    image: ["/workspace(r).png"],
    longDescription: "Detailed information about the Calc project...",
  },
};
