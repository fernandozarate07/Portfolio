import styles from "./HomeSection.module.css";
import AvailableBtn from "../Buttons/Available/AvailableBtn.jsx";
import avatar from "../../assets/images/avatar.svg";
import PrimaryBtn from "../Buttons/Primary/PrimaryBtn.jsx";

const HomeSection = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__logoContainer}>
        <img src={avatar} alt="avatar" className={styles.home__avatar} width={150} />
        <AvailableBtn link={"https://www.linkedin.com/in/fernandozaratedev/"} content={"Disponible para trabajar"} />
      </div>
      <div className={styles.home__content}>
        <h1 className={styles.home__title}>Hola, Soy Fernando.</h1>
        <h2 className={styles.home__subtitle}>
          Desarrollador Web Fullstacks <i className="fa-solid fa-hand-peace"></i>
        </h2>
        <p className={styles.home__para}>¿Qué te trae por aquí?</p>
      </div>
      <div className={styles.home__btnsContainer}>
        <PrimaryBtn type={"navlink"} section={"projects"} content="Ver proyectos" />
        <PrimaryBtn type={"navlink"} section={"aboutme"} content="Descargar CV" />
        <PrimaryBtn type={"link"} link={"mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"} content="Contáctame" />
      </div>
    </div>
  );
};

export default HomeSection;
