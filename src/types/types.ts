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
