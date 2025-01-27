import styles from "./ProjectsContainer.module.css";

import ProjectComponent from "./ProjectComponent";

const projectTexts = [
  `
  React website built in two-week hackathon that uses PokeApi for creating "Who's that Pokemon" quiz.
  Still a work in progress, but the basic functionality is there.
  Provides settings to customize the quiz, such as the difficulty, selected generations and game modes (Retro, Modern and Sound).
  `
  ,
  
  `
  Quiz Masters is a real-time multiplayer quiz game platform where players can compete in themed quiz rooms.
  This project uses a distributed database architecture with MongoDB for scalability, high availability, and performance optimization.
  `
  
  ,
  
  `
  CodeBook is a Stack Overflow clone designed for users to share code
  snippets, engage in discussions, and collaborate on programming-related
  topics. The platform ensures a seamless experience for both mobile and
  desktop users with its responsive design. Authentication is implemented
  to allow registered users to post code snippets and comment on existing posts.
  `
  ]
  

const ProjectsContainer = () => {
  return (
    <section
      className={styles.projectsContainer}
      data-scroll-to="projectsContainer"
    >
      <h3 className={styles.header}>Projects</h3>
      <div className={styles.projects}>

        <ProjectComponent
            title="Who's that Pokémon?"
            picture="projectPokemon.png"
            text={projectTexts[0]}
            demoLink="https://pokemon-quiz-eta.vercel.app/"
            gitLink="https://github.com/Jackgito/pokemon-quiz"
        />

        <ProjectComponent
          title="Quiz Master"
          picture="projectQuizMaster.png"
          text={projectTexts[1]}
          // demoLink="https://space-rush-phaser3.vercel.app/"
          gitLink="https://github.com/Jackgito/quiz-master"
        />

        <ProjectComponent
          title="Codebook"
          picture="projectCodebook.png"
          text={projectTexts[2]}
          demoLink="https://codebook-4k27.onrender.com"
          gitLink="https://github.com/Jackgito/CodeBook"
        />

      </div>

    </section>
  );
};

export default ProjectsContainer;
