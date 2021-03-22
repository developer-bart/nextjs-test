import React from "react";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();

  const handleLanguageChange = (lang) => {
    if (router?.locale !== lang) {
      router.push(router.pathname, router.pathname, { locale: lang });
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleLanguageChange("nl")}>
        🇳🇱
      </button>
      <button type="button" onClick={() => handleLanguageChange("en")}>
        🇬🇧
      </button>
    </div>
  );
};

export default LanguageSwitch;
