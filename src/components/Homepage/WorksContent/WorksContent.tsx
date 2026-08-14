import {memo, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router";
import "animate.css";
import {WorkItemProps} from "@/types/types";
import {items} from "@/utils/Arrays/WorkArr";

const WorkDynamic = memo<WorkItemProps & { priority: boolean }>(
    ({to, src, title, descKey, priority}) => {
        const {t} = useTranslation();

        return (
            <article
                className="group relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 dark:border-white/10">
                <Link to={to} className="block w-full h-full">
                    <img
                        src={src}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={priority ? "eager" : "lazy"}
                        fetchPriority={priority ? "high" : "low"}
                    />

                    <div
                        className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-black/30 dark:bg-black/40 border-t border-white/10 px-4 py-3">
                        <h3 className="text-white font-semibold text-base mb-0.5">
                            {title}
                        </h3>
                        <p className="text-white/70 text-xs line-clamp-2">
                            {t(descKey)}
                        </p>
                    </div>
                </Link>
            </article>
        );
    },
);

WorkDynamic.displayName = "WorkDynamic";

const WorksContent = () => {
    const {t} = useTranslation();

    const {mainWorks, oldWorks} = useMemo(() => {
        return {
            mainWorks: items.filter((item) => !item.isOld),
            oldWorks: items.filter((item) => item.isOld),
        };
    }, []);

    return (
        <main className="relative text-white/90 dark:text-gray-800 animate__animated animate__fadeIn">
            <div className="flex flex-col justify-center w-full max-w-xl mx-auto">
                <section className="mb-20" aria-labelledby="main-projects">
                    <h2
                        id="main-projects"
                        className="font-bold text-2xl mb-6 border-b border-white/10 dark:border-gray-800/20 pb-2"
                    >
                        {t("mainProjects")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mainWorks.map((item, index) => (
                            <WorkDynamic
                                key={`${item.to}-${item.src}`}
                                to={item.to}
                                title={item.title}
                                src={item.src}
                                descKey={item.descKey}
                                priority={index < 4}
                            />
                        ))}
                    </div>
                </section>

                {oldWorks.length > 0 && (
                    <section aria-labelledby="archive-projects">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-white/5 dark:border-gray-800/10"></div>
                            </div>
                            <div className="relative flex justify-start">
                                <h2
                                    id="archive-projects"
                                    className="bg-[#202023] dark:bg-[#f0e7db] pr-3 text-sm font-medium text-white/40 dark:text-gray-800/40 uppercase tracking-widest"
                                >
                                    {t("oldProjects")}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-40 duration-500 ">
                            {oldWorks.map((item) => (
                                <WorkDynamic
                                    key={`${item.to}-${item.src}`}
                                    to={item.to}
                                    title={item.title}
                                    src={item.src}
                                    descKey={item.descKey}
                                    priority={false}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
};

export default memo(WorksContent);