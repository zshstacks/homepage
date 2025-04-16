import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="flex justify-center mt-12 mb-6">
        <p className="text-sm text-white/30 dark:text-gray-800/30">
          {t("footer")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
