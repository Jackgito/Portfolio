import { useCallback, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import HoverIcon from "../HoverIcon"

const Navbar = () => {
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

  const handleTextClick = useCallback((sectionId) => {
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 800); // Initial state

  const handleResize = useCallback(() => {
    setIsDesktopView(window.innerWidth > 800);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <header className={styles.navbar} data-animate-on-scroll>
      {isDesktopView ? (
        <>
          <HoverIcon
            className={`${styles.githubIcon} githubIcon`}
            icon={"github"}
            size={48}
            link={"https://github.com/Jackgito?tab=repositories"}
          />
          <b className={styles.navbarElement} onClick={() => handleTextClick("aboutContainer")}>
            About
          </b>
          <b className={styles.navbarElement} onClick={() => handleTextClick("skillsContainer")}>
            Skills
          </b>
          <b className={styles.navbarElement} onClick={() => handleTextClick("projectsContainer")}>
            Projects
          </b>
          <b className={styles.navbarElement} onClick={() => handleTextClick("contactContainer")}>
            Contact
          </b>
          <HoverIcon
            className={`${styles.socialIcon} linkedinIcon`}
            icon={"linkedin"}
            size={48}
            link={"https://www.linkedin.com/in/juhani-manninen-07b297204/"}
          />
        </>
      ) : (
        <>
          <b className={styles.navbarElement} onClick={() => handleTextClick("aboutContainer")}>
            About
          </b>
          <b className={styles.navbarElement} onClick={() => handleTextClick("skillsContainer")}>
            Skills
          </b>
          <b className={styles.navbarElement} onClick={() => handleTextClick("projectsContainer")}>
            Projects
          </b>
          <b className={styles.navbarElement} onClick={() => handleTextClick("contactContainer")}>
            Contact
          </b>
          <div className={styles.socialIcons}>
            <HoverIcon
              className={`${styles.githubIcon} githubIcon`}
              icon={"github"}
              size={48}
              link={"https://github.com/Jackgito?tab=repositories"}
            />
            <HoverIcon
              className={`${styles.socialIcon} linkedinIcon`}
              icon={"linkedin"}
              size={48}
              link={"https://www.linkedin.com/in/juhani-manninen-07b297204/"}
            />
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
