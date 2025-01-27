import styles from "./ProjectComponent.module.css";
import HoverIcon from "../HoverIcon";

const ProjectComponent = ({title, picture, text, demoLink, gitLink}) => {
  const isLongTitle = title?.length > 15;

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
      <HoverIcon
        icon="play"
        size={48}
        tooltip={demoLink ? "Live demo (loading the website may take a while)" : "Demo not available"}
        disabled={!demoLink}
        link={demoLink}
      />
        <p className={isLongTitle ? styles.smallText : ''}>{title}</p>
      <HoverIcon
        icon="github"
        size={48}
        tooltip="GitHub repository"
        link={gitLink}
      />
      </div>
      <div className={styles.imageContainer}>
        <img src={picture} className={styles.image}></img>
      </div>
      <p className={styles.description}>{text}</p>
    </div>
  )
}

export default ProjectComponent