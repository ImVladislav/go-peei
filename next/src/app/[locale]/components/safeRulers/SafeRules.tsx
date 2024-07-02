"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Translator from "../translator/Translator";
import s from "./rulers.module.scss";

const SafeRules = () => {
  const [isHidden, setIsHidden] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const hideMenu = () => {
    setIsHidden(true);
  };

  const resetTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setIsHidden(false);
    timeoutRef.current = window.setTimeout(hideMenu, 5000);
  };

  useEffect(() => {
    timeoutRef.current = window.setTimeout(hideMenu, 5000);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className={s.linkSecurityThumb} onMouseEnter={resetTimeout}></div>
      <Link
        href="https://dsns.gov.ua/uk/abetka-bezpeki/diyi-naselennya-v-umovax-nadzvicainix-situacii-vojennogo-xarakteru"
        target="_blank"
        rel="noreferrer"
        className={`${s.linkSecurity} ${isHidden ? s.linkSecurityHidden : ""}`}
      >
        <Translator>safetyRulesDuringMartialLaw</Translator>
      </Link>
    </div>
  );
};

export default SafeRules;
