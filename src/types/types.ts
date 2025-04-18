export interface HeaderProps {
  handleContentChange?: (content: string) => void;
}

export interface ContextProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

export interface Setup {
  title: string;
  descriptionKey: string;
  image: string[];
  longDescription: string;
  download: string;
}

export interface Works {
  title: string;
  descriptionKey: string;
  stackName: string;
  stackKey: string;
  sourceName: string;
  sourceKey: string;
  image: string[];
  longDescription: string;
}

export interface WorkItemProps {
  to: string;
  src: string;
  title: string;
  descKey: string;
}

export interface SetupItemProps {
  to: string;
  src: string;
  title: string;
  descKey: string;
}
