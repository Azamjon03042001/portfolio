import React from "react";
import mainImage from "../../assets/mainImg.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={`${styles.hero} section`}>
      <div className={`${styles.hero__inner} container`}>
        <div className={styles.hero__body}>
          <span className={styles.highlightText}>
            Hi! I'm Azam — Frontend Developer.
          </span>

          <p className={styles.about__description}>
            Открыт новым задачам и обучению. Готов развивать ваш продукт и
            вносить вклад в проект.
          </p>
        </div>

        <div className={styles.hero__scene}>
          <img
            src={mainImage}
            alt="Иллюстрация frontend разработчика"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
