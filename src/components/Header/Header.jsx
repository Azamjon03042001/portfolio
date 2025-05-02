import React, { useEffect, useState } from "react";
import ThemeToggle from "../UI/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const navItems = [
  { id: 1, href: "#about", text: "Обо мне" },
  { id: 2, href: "#skills", text: "Навыки" },
  { id: 3, href: "#projects", text: "Проекты" },
  { id: 4, href: "#contacts", text: "Контакты" },
];

const SCROLL_THRESHOLD = 100;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      id="header"
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={`${styles.header__inner} container`}>
        <a
          href="#home"
          className={styles.homeLink}
          aria-label="Вернуться на главную"
        >
          <svg
            className={styles.logo__svg}
            width="64"
            height="64"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="65"
              fontFamily="monospace"
              fontWeight="bold"
              className={styles.logo__text}
            >
              &lt;/&gt;
            </text>
          </svg>
        </a>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigation__open : ""
          }`}
          aria-label="Основное меню"
        >
          <ul className={styles.list}>
            {navItems.map(({ id, href, text }) => (
              <li key={id} className={styles.list__item}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={activeSection === href ? "page" : undefined}
                  aria-label={`Перейти к разделу ${text}`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />

        <button
          className={`${styles.burger} ${
            isMenuOpen ? styles.burger__open : ""
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
