import styles from "./SkillsContainer.module.css";
import SkillLogo from "./SkillLogo";

const SkillsContainer = () => {
  return (
    <section className={styles.skillscontainer} data-scroll-to="skillsContainer">
      <h3 className={styles.mySkills}>My Skills</h3>

        <div className={styles.logocontainer}>
          <SkillLogo src="/html.png" tooltip="HTML5" />
          <SkillLogo src="/css.png" tooltip="CSS" />
          <SkillLogo src="/js.png" tooltip="JavaScript" />
          <SkillLogo src="/node.png" tooltip="Node.js" />
          <SkillLogo src="/react.png" tooltip="React" />
          <SkillLogo src="/mongodb.png" tooltip="MongoDB" />
          <SkillLogo src="/postgresql.png" tooltip="PostgreSQL" />
          <SkillLogo src="/git.png" tooltip="Git" />
          <SkillLogo src="/figma.png" tooltip="Figma"/>
          <SkillLogo src="/python.png" tooltip="Python"/>
          <SkillLogo src="/problemSolving.png" tooltip="Problem solving"/>
          <SkillLogo src="/teamwork.png" tooltip="Teamwork" />
          {/* <SkillLogo src="/timeManagement.png" tooltip="Time management"/> */}
        </div>
    </section>
  );
};

export default SkillsContainer;
