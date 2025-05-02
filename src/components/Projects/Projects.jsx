import React, { useState } from "react";
import styles from "./Projects.module.css";

import firebaseIcon from "../../assets/techIcons/firebase.svg";
import formikIcon from "../../assets/techIcons/formik.svg";
import ghpagesIcon from "../../assets/techIcons/githubpages.svg";
import materialUIIcon from "../../assets/techIcons/mui.svg";
import reactIcon from "../../assets/techIcons/react.svg";
import reactrouterIcon from "../../assets/techIcons/reactrouter.svg";
import reduxIcon from "../../assets/techIcons/redux.svg";
import reduxpersistIcon from "../../assets/techIcons/reduxpersist.svg";
import reduxToolkitIcon from "../../assets/techIcons/reduxtoolkit.svg";
import typescriptIcon from "../../assets/techIcons/typescript.svg";
import viteIcon from "../../assets/techIcons/vite.svg";
import yupIcon from "../../assets/techIcons/yup.svg";

import AuthFormImage from "../../assets/projectImages/auth-project-img.png";
import DodoPizzaCloneImage from "../../assets/projectImages/dodo-pizza-project-img-menu.png";
import TodoManagerImage from "../../assets/projectImages/todo-project-img.png";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      imageProjectSrc: AuthFormImage,
      titleProject: "Auth Form",
      linkProject: "https://azamjon03042001.github.io/auth-form-app/",
      description:
        "Форма авторизации и регистрации с валидацией полей и адаптивным дизайном. Реализовал обработку данных формы и локальное хранилище для сохранения пользовательских данных.",
      technologies: [
        {
          id: "a1",
          icon: reactIcon,
        },
        {
          id: "a2",
          icon: reduxIcon,
        },
        {
          id: "a3",
          icon: reduxToolkitIcon,
        },
        {
          id: "a4",
          icon: materialUIIcon,
        },
        {
          id: "a5",
          icon: formikIcon,
        },
        {
          id: "a6",
          icon: yupIcon,
        },
        {
          id: "a7",
          icon: reactrouterIcon,
        },
        {
          id: "a8",
          icon: firebaseIcon,
        },
        {
          id: "a9",
          icon: ghpagesIcon,
        },
      ],
    },
    {
      id: 2,
      imageProjectSrc: TodoManagerImage,
      titleProject: "Todo Manager",
      linkProject: "https://azamjon03042001.github.io/personal-todo-app/",
      description:
        "Приложение для управления задачами с возможностью добавления, редактирования, удаления задач, фильтрация, drag&drop, анимации через Framer Motion, хранение задач в localStorage.",
      technologies: [
        {
          id: "b1",
          icon: reactIcon,
        },
        {
          id: "b2",
          icon: viteIcon,
        },
        {
          id: "b3",
          icon: materialUIIcon,
        },
        {
          id: "b4",
          icon: ghpagesIcon,
        },
      ],
    },
    {
      id: 3,
      imageProjectSrc: DodoPizzaCloneImage,
      titleProject: "Dodo Pizza Clone",
      linkProject: "https://azamjon03042001.github.io/dodo-pizza-clone-app/#/",
      description:
        "Клон сайта Dodo Pizza с каталогом пицц, корзиной и адаптивной вёрсткой. Реализовал динамическое добавление в корзину с использованием Redux Toolkit и TypeScript, а также настроил маршрутизацию через React Router. Особое внимание уделил оптимизации производительности и адаптивности для мобильных устройств.",
      technologies: [
        {
          id: "c1",
          icon: reactIcon,
        },
        {
          id: "c2",
          icon: viteIcon,
        },
        {
          id: "c3",
          icon: typescriptIcon,
        },
        {
          id: "c4",
          icon: reduxIcon,
        },
        {
          id: "c5",
          icon: reduxToolkitIcon,
        },
        {
          id: "c6",
          icon: reduxpersistIcon,
        },
        {
          id: "c7",
          icon: materialUIIcon,
        },
        {
          id: "c8",
          icon: reactrouterIcon,
        },
        {
          id: "c9",
          icon: ghpagesIcon,
        },
      ],
    },
  ]);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2
          // className={styles.section__title}
          className="section__title"
          style={{ backgroundImage: "var(--section-title-gradient-projects)" }}
        >
          Мои проекты
        </h2>

        <ul className={styles.portfolio__list}>
          {projects.map(
            ({
              id,
              imageProjectSrc,
              titleProject,
              linkProject,
              description,
              technologies,
            }) => (
              <li key={id} className={styles.portfolio__item}>
                <div className={styles.portfolio__card__imageWrapper}>
                  <img
                    className={styles.portfolio__card__image}
                    src={imageProjectSrc}
                    alt={titleProject}
                    width="400"
                    height="320"
                    loading="lazy"
                  />
                </div>

                <div className={styles.portfolio__card__body}>
                  <h3 className={styles.portfolio__card__title}>
                    {titleProject}
                  </h3>

                  <div className={styles.projectDescription}>{description}</div>

                  <ul className={styles.stack__list}>
                    {technologies.map(({ id, icon }) => (
                      <li key={id} className={styles.stack__item}>
                        <img
                          src={icon}
                          alt={`${titleProject} technology icon`}
                          className={styles.techIcon}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>

                  <a
                    className={styles.portfolio__card__link}
                    target="_blank"
                    href={linkProject}
                    title={`Открыть проект ${titleProject} в новой вкладке`}
                    rel="noopener noreferrer"
                  >
                    Открыть проект
                  </a>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
