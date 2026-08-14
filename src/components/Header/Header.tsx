import {memo, useCallback, useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router";
import {FaGithub} from "react-icons/fa";
import {
    MdDarkMode,
    MdOutlineArrowOutward,
    MdOutlineLightMode,
} from "react-icons/md";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";
import {MyContext} from "@/App";
import {HeaderProps} from "@/types/types";

const Header = memo<HeaderProps>(({handleContentChange}) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [animationClass, setAnimationClass] = useState("");
    const [language, setLanguage] = useState<"en" | "lv">(
        i18n.language === "en" ? "en" : "lv",
    );
    const [menuOpen, setMenuOpen] = useState(false);
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("The Header component should be used within MyContext.Provider.");
    }

    const {theme, setTheme} = context;

    const handleNavigation = useCallback(
        (path: string) => {
            if (handleContentChange) {
                const contentKey = path === "/" ? "home" : path === "/works" ? "work" : "setup";
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
        setTimeout(() => setAnimationClass(""), 1000);
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, [setTheme]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);

    const isActive = useCallback(
        (path: string) => location.pathname === path,
        [location.pathname],
    );


    const themeButtonClass = `border border-white/20 dark:border-gray-800/40 rounded-lg h-[36px] w-[36px] flex cursor-pointer transition-all backdrop-blur-sm bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 ${animationClass}`;
    const langButtonClass = "flex items-center font-semibold rounded-lg border border-white/20 dark:border-gray-800/40 h-[36px] px-3 text-sm cursor-pointer backdrop-blur-sm bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all";

    return (
        <nav
            className="w-full backdrop-blur-xl fixed text-white/90 dark:text-gray-800 z-50 bg-[#202023]/25 dark:bg-[#f0e7db]/60 border-b border-white/5 dark:border-gray-800/10"
            role="navigation" aria-label="Main navigation">
            <div className="max-w-[768px] h-[56px] flex mx-auto px-4 sm:px-2 relative">
                <div className="flex min-w-full my-auto items-center justify-between">
                    <div className="flex items-center gap-6">
                        <h1 className="font-bold text-lg">
                            <button className="cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => handleNavigation("/")} aria-label="Go to home page">
                                {t("name")}
                            </button>
                        </h1>

                        <div className="hidden md:flex gap-x-4 items-center">
                            <button onClick={() => handleNavigation("/works")}
                                    className={`hover:underline hover:underline-offset-4 cursor-pointer p-1.5 rounded-md transition-colors ${isActive("/works") ? "bg-[#81e6d9]/20 text-[#81e6d9] dark:text-[#2c7a7b] font-semibold" : ""}`}
                                    aria-current={isActive("/works") ? "page" : undefined}>
                                {t("works")}
                            </button>
                            <button onClick={() => handleNavigation("/setup")}
                                    className={`cursor-pointer p-1.5 rounded-md hover:underline hover:underline-offset-4 transition-colors ${isActive("/setup") ? "bg-[#81e6d9]/20 text-[#81e6d9] dark:text-[#2c7a7b] font-semibold" : ""}`}
                                    aria-current={isActive("/setup") ? "page" : undefined}>
                                {t("setup")}
                            </button>
                            <a href="https://zshlibrary.vercel.app/"
                               className="hover:underline hover:underline-offset-4 flex gap-1 items-center transition-opacity hover:opacity-80"
                               target="_blank" rel="noopener noreferrer" aria-label="View my library">
                                {t("library")} <MdOutlineArrowOutward className="mt-2" size={11} aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/zshstacks/homepage"
                               className="hover:underline hover:underline-offset-4 flex gap-1 items-center transition-opacity hover:opacity-80"
                               target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub">
                                <FaGithub className="my-auto" size={13} aria-hidden="true"/> <span>{t("source")}</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="hidden md:flex gap-2">
                            <button className={themeButtonClass} onClick={toggleTheme}
                                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                                {theme === "light" ? <MdOutlineLightMode size={18} className="m-auto text-amber-300"
                                                                         aria-hidden="true"/> :
                                    <MdDarkMode size={18} className="m-auto text-indigo-400" aria-hidden="true"/>}
                            </button>
                            <button className={langButtonClass} onClick={toggleLang}
                                    aria-label={`Change language to ${language === "lv" ? "English" : "Latvian"}`}>
                                {language === "lv" ? "EN" : "LV"}
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}
                                    className="p-2 cursor-pointer hover:opacity-80 transition-opacity"
                                    aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
                                {menuOpen ? <IoClose size={24} aria-hidden="true"/> :
                                    <RxHamburgerMenu size={24} aria-hidden="true"/>}
                            </button>
                        </div>
                    </div>
                </div>


                {menuOpen && (
                    <div
                        className="absolute top-[56px] w-[180px] right-0 bg-[#2d3748]/90 dark:bg-white/90 backdrop-blur-xl p-4 flex flex-col gap-3 shadow-2xl md:hidden rounded-b-xl border border-white/10 dark:border-gray-800/10">
                        <button onClick={() => handleNavigation("/works")}
                                className={`hover:underline cursor-pointer p-2 w-full text-left rounded-md transition-colors ${isActive("/works") ? "bg-[#81e6d9]/20 text-[#81e6d9]" : ""}`}
                                aria-current={isActive("/works") ? "page" : undefined}>
                            {t("works")}
                        </button>
                        <button onClick={() => handleNavigation("/setup")}
                                className={`cursor-pointer p-2 w-full text-left rounded-md hover:underline transition-colors ${isActive("/setup") ? "bg-[#81e6d9]/20 text-[#81e6d9]" : ""}`}
                                aria-current={isActive("/setup") ? "page" : undefined}>
                            {t("setup")}
                        </button>
                        <a href="https://zshlibrary.vercel.app/"
                           className="hover:underline flex gap-1 p-2 items-center transition-opacity hover:opacity-80"
                           target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                           aria-label="View my library">
                            {t("library")} <MdOutlineArrowOutward size={11} aria-hidden="true"/>
                        </a>
                        <a href="https://github.com/zshstacks/homepage"
                           className="hover:underline flex gap-1 p-2 items-center transition-opacity hover:opacity-80"
                           target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                           aria-label="View source code on GitHub">
                            <FaGithub size={13} aria-hidden="true"/> <span>{t("source")}</span>
                        </a>
                        <div
                            className="flex justify-center gap-2 pt-3 border-t border-white/10 dark:border-gray-800/20">
                            <button className={themeButtonClass} onClick={toggleTheme}
                                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                                {theme === "light" ? <MdOutlineLightMode size={18} className="m-auto text-amber-300"
                                                                         aria-hidden="true"/> :
                                    <MdDarkMode size={18} className="m-auto text-indigo-400" aria-hidden="true"/>}
                            </button>
                            <button className={langButtonClass} onClick={toggleLang}
                                    aria-label={`Change language to ${language === "lv" ? "English" : "Latvian"}`}>
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