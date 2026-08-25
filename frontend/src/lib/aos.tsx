"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
      offset: 80,
    });

    const timeoutId = setTimeout(() => {
      AOS.refresh();
    }, 500);

    window.addEventListener("load", AOS.refresh);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return null;
}
