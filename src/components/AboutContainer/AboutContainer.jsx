import React from 'react';
import styles from './AboutContainer.module.css'; // Assuming your CSS file is named About.module.css

const AboutContainer = () => {
  return (
    <section className={styles.aboutcontainer} data-scroll-to="aboutContainer">
      <h3 className={styles.aboutMe}>About Me</h3>
      <b className={styles.helloThereImContainer}>
        <p className={styles.helloThere}>
          Hello there! I'm an IT enthusiast with a passion for web development and Python programming. I'm currently on the exciting journey of becoming a top-notch software engineer as I begin to reach the final years of my studies in IT. That is why I'm looking for opportunities where I can apply my knowledge and skills in meaningful projects, while learning more from the experts of the industry.
        </p>
        <p>&nbsp;</p>
        <p className={styles.whenImNot}>
          When I'm not studying, you'll often find me on the football field, either coaching young players or scoring astonishing goals. It's a great source of energy and it keeps my mind and body sharp.
        </p>
        <p>&nbsp;</p>
        <p className={styles.imAlsoKnown}>
          I'm also known as a passionate gamer, who loves diving into virtual worlds and exploring the latest trends in the gaming industry. From team-based action games to immersive RPGs, I'm always up for a gaming adventure that challenges the mind and gets the heart pumping.
        </p>
        <p>&nbsp;</p>
        <p className={styles.letsConnectCollaborate}>
          Let's connect, collaborate, and level up together!
        </p>
      </b>
    </section>
  );
};

export default AboutContainer;
