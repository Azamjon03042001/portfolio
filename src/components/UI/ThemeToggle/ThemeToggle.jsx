import React, { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme || (systemPrefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label className={styles.themeSwitch} aria-label="Toggle theme">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-checked={theme === "dark"}
      />
      <span className={styles.themeSwitch__slider}>
        <span className={styles.themeIcon}>
          <span className={styles.sun} aria-hidden="true"></span>
          <span className={styles.moon} aria-hidden="true"></span>
        </span>
      </span>
      <span className={styles.visuallyHidden}>Переключить тему</span>
    </label>
  );
};

export default ThemeToggle;

// <label className={styles.themeSwitch} aria-label="Toggle theme">
//   <input
//     type="checkbox"
//     checked={theme === "dark"}
//     onChange={toggleTheme}
//     aria-checked={theme === "dark"}
//   />
//   <span className={styles.themeSwitch__slider}></span>
//   <span className={styles.visuallyHidden}>Переключить тему</span>
// </label>
