import styles from "./Project.module.css";
import PrimaryBtn from "../../../Buttons/Primary/PrimaryBtn.jsx";

const Project = ({ title, description, imageUrl, nextProject, prevProject, isPaused, linkApp, linkCode }) => {
  return (
    <div className={styles.project}>
      {/* btn up */}
      <button onClick={prevProject} className={styles.project__projectBtn}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      {/* Container */}
      <div className={styles.project__container}>
        {/* img container */}
        <div className={styles.project_imgContainer}>
          {/* img content */}
          <div className={styles.project__stopContainer}>
            {isPaused === true && (
              <div className={styles.project__stopBtn}>
                <i className="fa-solid fa-pause"></i>
              </div>
            )}
            <div className={styles.project__img}>
              <img src={imageUrl} alt={title} width={300} />
            </div>
          </div>
        </div>
        {/* info */}
        <div className={styles.project__infoSection}>
          <div className={styles.project__titleContainer}>
            <a href={linkApp} className={styles.project__title} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            <a href={linkCode} className={styles.project__basecode} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
          <div className={styles.project__descriptionContainer}>
            <p className={styles.project__description}>{description[0]}</p>
            <p className={styles.project__description}>{description[1]}</p>
            <p className={styles.project__description}>{description[2]}</p>
            <p className={styles.project__description}>{description[3]}</p>
          </div>
          <div className={styles.project__opcion}>
            <PrimaryBtn type="link" content="Contáctame" link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!" />
            <PrimaryBtn type="navlink" content={"Dercargar CV"} section={"/aboutme"} />
          </div>
        </div>
      </div>
      {/* btn down */}
      <button onClick={nextProject} className={styles.project__projectBtn}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Project;
