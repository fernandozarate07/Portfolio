import { useState, useEffect } from "react";
import styles from "./Loader.module.css";
import logo from "../../assets/images/logo.svg";

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  //logica de loader
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      // deja 1 segundo el fadeOut antes de cambiar el estado de isLoading
      setTimeout(onComplete, 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${fadeOut ? "invisible" : "visible"}`}>
      <img src={logo} alt="logo" width={100} className={styles.loader__logo} />
      <div className={styles.loader__content}>
        <span className={styles.loader__name}>Fernando Zárate</span>
        <span className={styles.loader__subtitle}>Portfolio</span>
      </div>
    </div>
  );
};
export default Loader;
