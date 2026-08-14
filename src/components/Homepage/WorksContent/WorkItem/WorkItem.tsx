import {memo, useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router";
import {
    MdChevronLeft,
    MdChevronRight,
    MdClose,
    MdZoomIn,
} from "react-icons/md";
import {projects} from "@/utils/Works/Works";

const WorkItem = () => {
    const {t} = useTranslation();
    const {projectId} = useParams<{ projectId: string }>();

    const project = useMemo(
        () => (projectId ? projects[projectId as keyof typeof projects] : null),
        [projectId],
    );

    const images = useMemo(() => project?.image ?? [], [project]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const goTo = (index: number) => {
        if (images.length === 0) return;
        setActiveIndex((index + images.length) % images.length);
    };

    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (e.key === "ArrowLeft") goTo(activeIndex - 1);
            if (e.key === "ArrowRight") goTo(activeIndex + 1);
        };

        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [lightboxOpen, activeIndex, images.length]);

    if (!project) {
        return (
            <div className="flex justify-center min-h-[400px] text-white/80 dark:text-gray-800">
                <div className="m-auto text-center">
                    <h1 className="text-2xl font-bold mb-4">{t("notfound")}</h1>
                    <Link
                        to="/works"
                        className="text-[#ff63c3] dark:text-indigo-400 underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                        {t("back")}
                    </Link>
                </div>
            </div>
        );
    }

    const hasMultiple = images.length > 1;

    return (
        <>
            <article className="relative text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
                <div className="max-w-2xl mx-auto">
                    {/* Breadcrumb */}
                    <nav
                        className="flex items-center gap-2 mb-4 text-xs"
                        aria-label="Breadcrumb"
                    >
                        <Link
                            to="/works"
                            className="text-[#ff63c3] dark:text-indigo-400 transition-colors"
                        >
                            {t("works")}
                        </Link>
                        <span className="text-white/20 dark:text-gray-800/20" aria-hidden="true">
              &gt;
            </span>
                        <span className="text-white/50 dark:text-gray-800/50">
              {project.title}
            </span>
                    </nav>

                    {/* Title */}
                    <h1 className="font-bold text-3xl sm:text-4xl mb-4 text-white dark:text-gray-900 tracking-tight">
                        {project.title}
                    </h1>

                    {/* Description */}
                    <p className="leading-relaxed text-left mb-8 text-[15px] text-white/60 dark:text-gray-800/60">
                        {t(project.descriptionKey)}
                    </p>

                    {/* Metadata Block */}
                    <div
                        className="mb-10 p-4 rounded-lg bg-white/[0.03] dark:bg-black/[0.02] border border-white/5 dark:border-white/5 space-y-3 text-sm">
                        <div className="flex items-start gap-4">
              <span
                  className="uppercase text-[10px] tracking-widest font-bold bg-emerald-500/20 text-emerald-400 dark:bg-emerald-500/30 dark:text-emerald-600 px-2 py-0.5 rounded mt-0.5 min-w-[65px] text-center">
                {t(project.stackName)}
              </span>
                            <span className="text-white/80 dark:text-gray-800/80 leading-snug">
                {project.stackKey}
              </span>
                        </div>

                        {project.sourceKey && (
                            <div className="flex items-center gap-4">
                <span
                    className="uppercase text-[10px] tracking-widest font-bold bg-[#ff63c3]/20 text-[#ff63c3] dark:bg-indigo-400/20 dark:text-indigo-600 px-2 py-0.5 rounded min-w-[65px] text-center">
                  {t("source")}
                </span>
                                <a
                                    href={project.sourceKey}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#ff63c3] dark:text-indigo-400 hover:underline break-all hover:opacity-80 transition-opacity"
                                    aria-label="View project source code"
                                >
                                    {project.sourceKey.replace("https://", "")}
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Gallery: hero  + filmstrip */}
                    <div className="space-y-3">
                        <div
                            className="group relative rounded-2xl overflow-hidden border border-white/10 dark:border-gray-800/10 bg-white/5 dark:bg-black/5 cursor-zoom-in"
                            onClick={() => setLightboxOpen(true)}
                            role="button"
                            tabIndex={0}
                            aria-label="Open full-size screenshot viewer"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") setLightboxOpen(true);
                            }}
                        >
                            <div
                                className="absolute top-3 left-3 z-10 bg-black/40 dark:bg-white/30 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-[#81e6d9] dark:text-[#2c7a7b]">
                                {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                            </div>

                            <div
                                className="absolute bottom-3 right-3 z-10 h-8 w-8 rounded-full bg-black/40 dark:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white dark:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <MdZoomIn size={18} aria-hidden="true"/>
                            </div>

                            <img
                                key={activeIndex}
                                src={images[activeIndex]}
                                alt={`${project.title} screenshot ${activeIndex + 1} of ${images.length}`}
                                className="w-full h-auto animate__animated animate__fadeIn animate__faster"
                                loading="eager"
                                fetchPriority="high"
                            />

                            {hasMultiple && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goTo(activeIndex - 1);
                                        }}
                                        aria-label="Previous screenshot"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/40 dark:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white dark:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    >
                                        <MdChevronLeft size={20} aria-hidden="true"/>
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goTo(activeIndex + 1);
                                        }}
                                        aria-label="Next screenshot"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/40 dark:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white dark:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    >
                                        <MdChevronRight size={20} aria-hidden="true"/>
                                    </button>
                                </>
                            )}
                        </div>

                        {hasMultiple && (
                            <div
                                className="flex gap-2 overflow-x-auto pb-1"
                                role="tablist"
                                aria-label="Screenshot thumbnails"
                            >
                                {images.map((img, index) => (
                                    <button
                                        key={`thumb-${index}`}
                                        onClick={() => goTo(index)}
                                        role="tab"
                                        aria-selected={index === activeIndex}
                                        aria-label={`View screenshot ${index + 1}`}
                                        className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                                            index === activeIndex
                                                ? "border-[#81e6d9] dark:border-[#319795]"
                                                : "border-white/10 dark:border-gray-800/10 opacity-60 hover:opacity-100"
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </article>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate__animated animate__fadeIn animate__faster"
                    onClick={() => setLightboxOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Screenshot viewer"
                >
                    <button
                        onClick={() => setLightboxOpen(false)}
                        aria-label="Close viewer"
                        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                        <MdClose size={22} aria-hidden="true"/>
                    </button>

                    <div
                        className="absolute top-4 left-4 z-10 font-mono text-xs text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                    </div>

                    <img
                        key={activeIndex}
                        src={images[activeIndex]}
                        alt={`${project.title} screenshot ${activeIndex + 1} of ${images.length}`}
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg animate__animated animate__fadeIn animate__faster"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {hasMultiple && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goTo(activeIndex - 1);
                                }}
                                aria-label="Previous screenshot"
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                            >
                                <MdChevronLeft size={24} aria-hidden="true"/>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goTo(activeIndex + 1);
                                }}
                                aria-label="Next screenshot"
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                            >
                                <MdChevronRight size={24} aria-hidden="true"/>
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default memo(WorkItem);