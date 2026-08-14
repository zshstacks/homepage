import {memo, useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router";
import {
    MdChevronLeft,
    MdChevronRight,
    MdClose,
    MdOutlineArrowDownward,
    MdZoomIn,
} from "react-icons/md";
import {setups} from "@/utils/Setup/Setup";

const SetupItem = () => {
    const {t} = useTranslation();
    const {setupId} = useParams<{ setupId: string }>();

    const setup = useMemo(
        () => (setupId ? setups[setupId as keyof typeof setups] : null),
        [setupId],
    );

    const images = useMemo(() => setup?.image ?? [], [setup]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const goTo = (index: number) => {
        if (images.length === 0) return;
        setActiveIndex((index + images.length) % images.length);
    };

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
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

    if (!setup) {
        return (
            <div className="flex justify-center min-h-[400px] text-white/80 dark:text-gray-800">
                <div className="m-auto text-center">
                    <h1 className="text-2xl font-bold mb-4">{t("notfoundSetup")}</h1>
                    <Link
                        to="/setup"
                        className="text-[#ff63c3] dark:text-indigo-400 underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                        {t("backSetup")}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <article
                className="relative opacity-100 text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
                <div className="max-w-2xl mx-auto">
                    {/* Breadcrumb */}
                    <nav
                        className="flex items-center gap-2 mb-4 text-xs"
                        aria-label="Breadcrumb"
                    >
                        <Link
                            to="/setup"
                            className="  text-[#ff63c3] dark:text-indigo-400 transition-colors"
                        >
                            {t("setup")}
                        </Link>
                        <span className="text-white/20 dark:text-gray-800/20" aria-hidden="true">
              &gt;
            </span>
                        <span className="text-white/50 dark:text-gray-800/50">
              {setup.title}
            </span>
                    </nav>

                    {/* Title */}
                    <h1 className="font-bold text-3xl sm:text-4xl mb-4 text-white dark:text-gray-900 tracking-tight">
                        {setup.title}
                    </h1>

                    <div className="flex flex-col mb-6">
                        <p className="leading-relaxed text-left text-[15px] text-white/60 dark:text-gray-800/60">
                            {t(setup.descriptionKey)}
                        </p>
                        {setup.download && (
                            <div className="mt-4">
                                <a
                                    href={setup.download}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[#ff63c3] dark:text-indigo-400 hover:underline hover:underline-offset-4 transition-opacity hover:opacity-80"
                                    aria-label="Download setup files"
                                >
                                    <MdOutlineArrowDownward size={16} aria-hidden="true"/>
                                    {t("download")}
                                </a>
                            </div>
                        )}
                    </div>

                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        aria-label="Setup screenshots"
                    >
                        {images.map((img, index) => (
                            <div
                                key={`setup-image-${index}`}
                                className="group relative overflow-hidden rounded-xl border border-white/10 dark:border-gray-800/10 bg-white/5 dark:bg-black/5 cursor-zoom-in"
                                onClick={() => openLightbox(index)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Open screenshot ${index + 1} full size`}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") openLightbox(index);
                                }}
                            >
                                <div
                                    className="absolute top-3 left-3 z-10 bg-black/40 dark:bg-white/30 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-[#81e6d9] dark:text-[#2c7a7b]">
                                    {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                                </div>

                                <div
                                    className="absolute bottom-3 right-3 z-10 h-8 w-8 rounded-full bg-black/40 dark:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white dark:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <MdZoomIn size={18} aria-hidden="true"/>
                                </div>

                                <img
                                    src={img}
                                    alt={`${t(setup.descriptionKey)} screenshot ${index + 1}`}
                                    className="w-full"
                                    loading={index < 2 ? "eager" : "lazy"}
                                    fetchPriority={index < 2 ? "high" : "low"}
                                />
                            </div>
                        ))}
                    </section>
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
                        alt={`${t(setup.descriptionKey)} screenshot ${activeIndex + 1}`}
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg animate__animated animate__fadeIn animate__faster"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {images.length > 1 && (
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

export default memo(SetupItem);