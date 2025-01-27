import { useEffect, useRef } from "react";
import styles from "./ProfileContainer.module.css";
import Typewriter from "./Typewriter";

const ProfileContainer = () => {

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.profilecontainer} data-animate-on-scroll>

      <Typewriter message={"Hello, I'm"} speed={100} delay={400} className={styles.helloIm}></Typewriter>

      <Typewriter message={"Juhani Manninen"} speed={100} delay={2200} className={styles.juhaniManninen}></Typewriter>

      <Typewriter message={"Bachelor of Information Technology and a web developer"} speed={80} delay={4200} className={styles.aspiringSoftwareEngineer}></Typewriter>
      
      <img className={styles.profilepicIcon} src="/profilepic.png" />
    </div>
  );
};
export default ProfileContainer;
