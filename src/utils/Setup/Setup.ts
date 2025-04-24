import { Setup } from "@/types/types";

export const setups: Record<string, Setup> = {
  neovim: {
    title: "Neovim",
    descriptionKey: "setups.neovim.description",
    image: [
      "/setup/neovim/main.png",
      "/setup/neovim/code.png",
      "/setup/neovim/expl.png",
      "/setup/neovim/conf.png",
    ],
    download: "https://github.com/zshstacks/nvim-dotfiles",
    longDescription: "Detailed information about the neovim...",
  },
  pwsh: {
    title: "PowerShell",
    descriptionKey: "setups.pwsh.description",
    download: "",
    image: [
      "/setup/pwsh/pwsh.png",
      "/setup/pwsh/settings1.png",
      "/setup/pwsh/settings2.png",
      "/setup/pwsh/colors.png",
    ],
    longDescription: "Detailed information about the pwsh...",
  },
  vscode: {
    title: "PowerShell",
    descriptionKey: "setups.vscode.description",
    download: "",
    image: [
      "/setup/vscode/main.png",
      "/setup/vscode/settings1.png",
      "/setup/vscode/settings2.png",
      "/setup/vscode/settings3.png",
    ],
    longDescription: "Detailed information about the pwsh...",
  },
  arch: {
    title: "Arch Linux",
    descriptionKey: "setups.arch.description",
    image: [
      "/setup/linux/arch.png",
      "/setup/linux/arch2.png",
      "/setup/linux/arch3.png",
    ],
    download: "https://github.com/zshstacks/hyprdots",
    longDescription: "Detailed information about the arch...",
  },
};
