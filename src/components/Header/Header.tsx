import { MyContext } from "@/App";
import { HeaderProps } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header: React.FC<HeaderProps> = ({ handleContentChange }) => {
  const [animationClass, setAnimationClass] = useState("");
  const [language, setLanguage] = useState<"en" | "lv">("lv");
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(MyContext);

  if (!context) {
    throw new Error(
      "The Header component should be used within MyContext.Provider."
    );
  }

  const { theme, setTheme } = context;

  const handleNavigation = (path: string) => {
    if (handleContentChange) {
      const contentKey =
        path === "/" ? "home" : path === "/works" ? "work" : "setup";
      handleContentChange(contentKey);
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  const toggleLang = () => {
    setLanguage((prev) => (prev === "lv" ? "en" : "lv"));
  };

  const toggleTheme = () => {
    setAnimationClass("animate__animated animate__bounce ");

    setTimeout(() => {
      setAnimationClass("");
    }, 1000);

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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

  return (
    <nav className="w-full backdrop-blur-lg fixed text-white/80 dark:text-gray-800 z-50 dark:bg-white/25">
      <div className="max-w-[768px] h-[56px] flex mx-auto px-4 sm:px-2 relative">
        <div className="flex min-w-full h-[40px] my-auto">
          <div className="flex justify-between w-full my-auto items-center">
            <div className="flex items-center">
              {/* Logo */}
              <h1 className="font-bold text-lg mr-4">
                <button
                  className="cursor-pointer"
                  onClick={() => handleNavigation("/")}
                >
                  {t("name")}
                </button>
              </h1>

              {/* main navigation(pc) */}
              <div className="hidden md:flex gap-x-4 items-center">
                <div className="flex">
                  <button
                    onClick={() => handleNavigation("/works")}
                    className={`hover:underline hover:underline-offset-4 cursor-pointer p-2 ${
                      location.pathname === "/works"
                        ? "bg-[#81e6d9] text-black"
                        : ""
                    }`}
                  >
                    {t("works")}
                  </button>
                </div>

                <button
                  onClick={() => handleNavigation("/setup")}
                  className={`cursor-pointer p-2 hover:underline hover:underline-offset-4 ${
                    location.pathname === "/setup"
                      ? "bg-[#81e6d9] text-black"
                      : ""
                  }`}
                >
                  {t("setup")}
                </button>

                <a
                  href="https://github.com/wlr1/homepage"
                  className="hover:underline hover:underline-offset-4 flex gap-1 items-center"
                  target="_blank"
                >
                  <FaGithub className="my-auto" size={13} />
                  <span>{t("source")}</span>
                </a>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              {/* Theme and lang(pc) */}
              <div className="hidden md:flex gap-2">
                {/* Theme toggle */}
                <div
                  className={`bg-amber-500 rounded-md h-[40px] w-[40px] flex cursor-pointer ${animationClass} ${
                    theme === "dark" ? "bg-indigo-400" : ""
                  }`}
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <MdOutlineLightMode
                      size={23}
                      color="black"
                      className="m-auto"
                    />
                  ) : (
                    <MdDarkMode size={23} color="white" className="m-auto" />
                  )}
                </div>

                {/* Language toggle */}
                <div
                  className="flex items-center font-semibold rounded-md bg-amber-500 h-[40px] cursor-pointer"
                  onClick={toggleLang}
                >
                  {language === "lv" ? (
                    <div
                      onClick={() => changeLanguage("en")}
                      className="h-[40px] flex items-center px-4"
                    >
                      EN
                    </div>
                  ) : (
                    <div
                      onClick={() => changeLanguage("lv")}
                      className="h-[40px] flex items-center px-4"
                    >
                      LV
                    </div>
                  )}
                </div>
              </div>

              {/* mobile */}
              <div className="md:hidden ">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 cursor-pointer "
                >
                  {menuOpen ? (
                    <IoClose size={24} />
                  ) : (
                    <RxHamburgerMenu size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        {menuOpen && (
          <div className="absolute top-[56px] w-[150px]  right-0 bg-[#2d3748] dark:bg-white/90 p-4 flex flex-col gap-4 shadow-lg md:hidden">
            <button
              onClick={() => handleNavigation("/works")}
              className={`hover:underline cursor-pointer p-2 w-full text-left ${
                location.pathname === "/works" ? "bg-[#81e6d9] text-black" : ""
              }`}
            >
              {t("works")}
            </button>

            <button
              onClick={() => handleNavigation("/setup")}
              className={`cursor-pointer p-2 w-full text-left hover:underline ${
                location.pathname === "/setup" ? "bg-[#81e6d9] text-black" : ""
              }`}
            >
              {t("setup")}
            </button>

            <a
              href="https://github.com/wlr1/homepage"
              className="hover:underline flex gap-1 p-2 items-center"
              target="_blank"
              onClick={() => setMenuOpen(false)}
            >
              <FaGithub size={13} />
              <span>{t("source")}</span>
            </a>

            <div className="flex justify-center gap-2 pt-2 border-t border-gray-600 dark:border-gray-300">
              {/* Theme toggle mobile */}
              <div
                className={`bg-amber-500 rounded-md h-[40px] w-[40px] flex cursor-pointer ${animationClass} ${
                  theme === "dark" ? "bg-indigo-400" : ""
                }`}
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <MdOutlineLightMode
                    size={23}
                    color="black"
                    className="m-auto"
                  />
                ) : (
                  <MdDarkMode size={23} color="white" className="m-auto" />
                )}
              </div>

              {/* Language toggle mobile */}
              <div
                className="flex items-center font-semibold rounded-md bg-amber-500 h-[40px] cursor-pointer"
                onClick={toggleLang}
              >
                {language === "lv" ? (
                  <div
                    onClick={() => changeLanguage("en")}
                    className="h-[40px] flex items-center px-4"
                  >
                    EN
                  </div>
                ) : (
                  <div
                    onClick={() => changeLanguage("lv")}
                    className="h-[40px] flex items-center px-4"
                  >
                    LV
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
