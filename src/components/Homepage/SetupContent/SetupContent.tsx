import {memo} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router";
import {SetupItemProps} from "@/types/types";
import {items} from "@/utils/Arrays/SetupArr";

const SetupDynamic = memo<SetupItemProps & { priority: boolean }>(
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
                            {t(title)}
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

SetupDynamic.displayName = "SetupDynamic";

const SetupContent = () => {
    const {t} = useTranslation();

    return (
        <main className="relative text-white/80 dark:text-gray-800 animate__animated animate__fadeIn">
            <div className="flex flex-col justify-center w-full mx-auto xs:w-[300px] sm:w-[400px] md:w-[486px]">
                <h2 className="font-bold text-2xl mb-6 border-b border-white/10 dark:border-gray-800/20 pb-2">
                    {t("setup")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <SetupDynamic
                            key={`${item.to}-${item.src}`}
                            to={item.to}
                            src={item.src}
                            title={item.title}
                            descKey={item.descKey}
                            priority={index < 4}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default memo(SetupContent);