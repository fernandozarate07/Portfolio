import styles from "./AboutmeSection.module.css";
import PrimaryBtn from "../../Buttons/Primary/PrimaryBtn.jsx";
import resume from "../../../assets/images/resume.png";

const AboutmeSection = () => {
  const handleDownloadPDF = () => {
    const pdfUrl = "/public/fernandozarateresume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "fernandozarateresume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={styles.aboutme}>
      <div className={styles.aboutme__content}>
        <h2 className={styles.aboutme__title}>Sobre Mí</h2>
        <p className={styles.aboutme__infoContainer}>
          <span>
            <i className="fa-solid fa-check"></i>
            Comencé mi formación como programador de manera autodidacta en 2023, y hoy en día me encuentro cursando la
            Tecnicatura en Programación Web en la Universidad Nacional de San Juan.
          </span>
          <span>
            <i className="fa-solid fa-check"></i>
            Manejo un stack basado en tecnologías modernas como HTML, CSS, Bootstrap, JavaScript, TypeScript, React,
            Next.js, Node.js, Express, MySQL, PostgreSQL y MongoDB.
          </span>
          <span>
            <i className="fa-solid fa-check"></i>
            cuento con experiencia en WordPress, lo que me permite ofrecer soluciones personalizadas cuando es
            necesario.
          </span>
          <span>
            <i className="fa-solid fa-check"></i>
            ¿Les cuento algo sobre mí? Soy músico y docente. Me han dicho que soy una persona creativa. Algo de verdad
            debe haber en eso, porque encuentro en los procesos creativos todo lo que me apasiona: desde componer una
            canción hasta desarrollar una aplicación.
          </span>
        </p>
        <div className={styles.btnsContainer}>
          <PrimaryBtn type="button" content={"Descargar CV"} action={handleDownloadPDF} />
        </div>
      </div>
      <div className={styles.aboutme__resume}>
        <img src={resume} alt="resume image" width={400} className={styles.aboutme__resumeImg} />
      </div>
    </div>
  );
};
export default AboutmeSection;
