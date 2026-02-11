import { memo, useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MyContext } from "@/App";
import { HeaderProps } from "@/types/types";

const Header = memo<HeaderProps>(({ handleContentChange }) => {
  const [animationClass, setAnimationClass] = useState("");
  const [language, setLanguage] = useState<"en" | "lv">("lv");
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(MyContext);

  if (!context) {
    throw new Error(
      "The Header component should be used within MyContext.Provider.",
    );
  }

  const { theme, setTheme } = context;

  const handleNavigation = useCallback(
    (path: string) => {
      if (handleContentChange) {
        const contentKey =
          path === "/" ? "home" : path === "/works" ? "work" : "setup";
        handleContentChange(contentKey);
      } else {
        navigate(path);
      }
      setMenuOpen(false);
    },
    [handleContentChange, navigate],
  );

  const toggleLang = useCallback(() => {
    const newLang = language === "lv" ? "en" : "lv";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }, [language, i18n]);

  const toggleTheme = useCallback(() => {
    setAnimationClass("animate__animated animate__bounce");

    setTimeout(() => {
      setAnimationClass("");
    }, 1000);

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [setTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname],
  );

  return (
    <nav
      className="w-full backdrop-blur-lg fixed text-white/80 dark:text-gray-800 z-50 dark:bg-white/25"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[768px] h-[56px] flex mx-auto px-4 sm:px-2 relative">
        <div className="flex min-w-full h-[40px] my-auto">
          <div className="flex justify-between w-full my-auto items-center">
            <div className="flex items-center">
              {/* logo */}
              <h1 className="font-bold text-lg mr-4">
                <button
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleNavigation("/")}
                  aria-label="Go to home page"
                >
                  {t("name")}
                </button>
              </h1>

              <div className="hidden md:flex gap-x-4 items-center">
                <button
                  onClick={() => handleNavigation("/works")}
                  className={`hover:underline hover:underline-offset-4 cursor-pointer p-2 rounded transition-colors ${
                    isActive("/works") ? "bg-[#81e6d9] text-black" : ""
                  }`}
                  aria-current={isActive("/works") ? "page" : undefined}
                >
                  {t("works")}
                </button>

                <button
                  onClick={() => handleNavigation("/setup")}
                  className={`cursor-pointer p-2 rounded hover:underline hover:underline-offset-4 transition-colors ${
                    isActive("/setup") ? "bg-[#81e6d9] text-black" : ""
                  }`}
                  aria-current={isActive("/setup") ? "page" : undefined}
                >
                  {t("setup")}
                </button>

                <a
                  href="https://github.com/zshstacks/homepage"
                  className="hover:underline hover:underline-offset-4 flex gap-1 items-center transition-opacity hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code on GitHub"
                >
                  <FaGithub className="my-auto" size={13} aria-hidden="true" />
                  <span>{t("source")}</span>
                </a>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="hidden md:flex gap-2">
                <button
                  className={`bg-amber-500 rounded-md h-[40px] w-[40px] flex cursor-pointer transition-colors ${animationClass} ${
                    theme === "dark" ? "bg-indigo-400" : ""
                  }`}
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                  {theme === "light" ? (
                    <MdOutlineLightMode
                      size={23}
                      color="black"
                      className="m-auto"
                      aria-hidden="true"
                    />
                  ) : (
                    <MdDarkMode
                      size={23}
                      color="white"
                      className="m-auto"
                      aria-hidden="true"
                    />
                  )}
                </button>

                <button
                  className="flex items-center font-semibold rounded-md bg-amber-500 h-[40px] px-4 cursor-pointer hover:bg-amber-600 transition-colors"
                  onClick={toggleLang}
                  aria-label={`Change language to ${language === "lv" ? "English" : "Latvian"}`}
                >
                  {language === "lv" ? "EN" : "LV"}
                </button>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? (
                    <IoClose size={24} aria-hidden="true" />
                  ) : (
                    <RxHamburgerMenu size={24} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-[56px] w-[150px] right-0 bg-[#2d3748] dark:bg-white/90 p-4 flex flex-col gap-4 shadow-lg md:hidden rounded-b-lg">
            <button
              onClick={() => handleNavigation("/works")}
              className={`hover:underline cursor-pointer p-2 w-full text-left rounded transition-colors ${
                isActive("/works") ? "bg-[#81e6d9] text-black" : ""
              }`}
              aria-current={isActive("/works") ? "page" : undefined}
            >
              {t("works")}
            </button>

            <button
              onClick={() => handleNavigation("/setup")}
              className={`cursor-pointer p-2 w-full text-left rounded hover:underline transition-colors ${
                isActive("/setup") ? "bg-[#81e6d9] text-black" : ""
              }`}
              aria-current={isActive("/setup") ? "page" : undefined}
            >
              {t("setup")}
            </button>

            <a
              href="https://github.com/wlr1/homepage"
              className="hover:underline flex gap-1 p-2 items-center transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              aria-label="View source code on GitHub"
            >
              <FaGithub size={13} aria-hidden="true" />
              <span>{t("source")}</span>
            </a>

            <div className="flex justify-center gap-2 pt-2 border-t border-gray-600 dark:border-gray-300">
              <button
                className={`bg-amber-500 rounded-md h-[40px] w-[40px] flex cursor-pointer transition-colors ${animationClass} ${
                  theme === "dark" ? "bg-indigo-400" : ""
                }`}
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <MdOutlineLightMode
                    size={23}
                    color="black"
                    className="m-auto"
                    aria-hidden="true"
                  />
                ) : (
                  <MdDarkMode
                    size={23}
                    color="white"
                    className="m-auto"
                    aria-hidden="true"
                  />
                )}
              </button>

              <button
                className="flex items-center font-semibold rounded-md bg-amber-500 h-[40px] px-4 cursor-pointer hover:bg-amber-600 transition-colors"
                onClick={toggleLang}
                aria-label={`Change language to ${language === "lv" ? "English" : "Latvian"}`}
              >
                {language === "lv" ? "EN" : "LV"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Header.displayName = "Header";

export default Header;
