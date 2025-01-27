import styles from "./PageContainer.module.css";

import Navbar from "../components/Navbar/Navbar";
import AboutContainer from "../components/AboutContainer/AboutContainer";
import EmailContainer from "../components/EmailContainer/EmailContainer";
import ProfileContainer from "../components/ProfileContainer/ProfileContainer";
import SkillsContainer from "../components/SkillsContainer/SkillsContainer";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer";


const PageContainer = () => {

  return (
    <div className={styles.pagecontainer}>
      <Navbar />
      <ProfileContainer />
      <AboutContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <EmailContainer />
      <Navbar />
    </div>
  );
};

export default PageContainer;
