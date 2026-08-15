import { memo, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";
import "animate.css";

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const HomeContent = memo(() => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const workSection = useInView<HTMLElement>();
  const loveSection = useInView<HTMLElement>();
  const webSection = useInView<HTMLElement>();

  return (
    <article
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col justify-center w-full xs:max-w-[400px] sm:max-w-[486px] max-w-[320px] mx-auto text-white/80 dark:text-gray-800">
        <div className="flex justify-center mx-auto xs:p-3 xs:mb-4 p-3 mb-4 w-full rounded-md bg-white/5 dark:bg-white/40 backdrop-blur-lg">
          {t("welcome")}
        </div>
        <div className="flex flex-col gap-1 w-full items-center mb-6">
          <h1 className="font-bold text-3xl xs:text-3xl sm:text-4xl text-center">
            {t("name")}
          </h1>
          <p className="text-center text-white/70 dark:text-gray-800/70">
            {t("position")}
          </p>
        </div>

        <section
          ref={workSection.ref}
          className={`w-full mb-4 transition-all duration-700 ease-out ${
            workSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-bold text-xl border-b-4 border-b-[#81e6d9]/40 dark:border-b-[#319795]/50 w-fit mt-6 mb-2 xs:mt-6">
            {t("work")}
          </h2>
          <p className="indent-[1em] hyphens-auto text-justify leading-relaxed">
            {t("workDesc")}
          </p>
          <div className="w-full mt-3">
            <Link
              to="/works"
              className="bg-[#81e6d9] h-[40px] w-full sm:w-[146px] xs:h-[40px] xs:w-[146px] flex justify-center items-center mx-auto text-black dark:text-white/90 dark:bg-[#319795] font-semibold rounded-md transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(129,230,217,0.4)] dark:hover:shadow-[0_0_20px_rgba(49,151,149,0.4)]"
              aria-label="View my portfolio"
            >
              {t("portfolio")}
              <span className="ml-2 mt-[1px]" aria-hidden="true">
                <MdOutlineNavigateNext className="my-auto text-center align-middle flex justify-center items-center" />
              </span>
            </Link>
          </div>
        </section>

        <section
          ref={loveSection.ref}
          className={`w-full mb-4 transition-all duration-700 ease-out ${
            loveSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-bold text-xl border-b-4 border-b-[#ff63c3]/40 dark:border-b-indigo-400/40 w-fit mb-2">
            {t("love")} <span aria-hidden="true">♥</span>
          </h2>
          <p className="indent-[1em] hyphens-auto text-justify leading-relaxed">
            {t("loveDesc")}
          </p>
        </section>

        <section
          ref={webSection.ref}
          className={`w-full mt-4 xs:mt-4 transition-all duration-700 ease-out ${
            webSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-bold text-xl border-b-4 border-b-[#81e6d9]/40 dark:border-b-[#319795]/50 w-fit mb-2">
            {t("web")}
          </h2>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/zshstacks"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="flex items-center gap-2 text-[#81e6d9] dark:text-[#2c7a7b] font-semibold hover:opacity-80 transition-opacity"
            >
              <FaGithub size={18} aria-hidden="true" />
              @zshstacks
            </a>
            <span
              className="text-white/20 dark:text-gray-800/20"
              aria-hidden="true"
            >
              |
            </span>
            <a
              href="https://x.com/zshstacks"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my X (Twitter) profile"
              className="flex items-center gap-2 text-[#81e6d9] dark:text-[#2c7a7b] font-semibold hover:opacity-80 transition-opacity"
            >
              <FaSquareXTwitter size={18} aria-hidden="true" />
              @zshstacks
            </a>
          </div>
        </section>
      </div>
    </article>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
