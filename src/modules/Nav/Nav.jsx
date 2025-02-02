import Bar from "./Bar/Bar.jsx";
import styles from "./Nav.module.css";
import logo from "../../assets/images/logo.svg";
import SecondaryBtn from "../Buttons/Secondary/SecondaryBtn.jsx";

const Nav = () => {
  return (
    <div className={styles.nav}>
      {/* logo */}
      <div className={styles.nav__logo}>
        <img src={logo} alt="logo" className={styles.logo} width={120} />
      </div>
      {/* main */}
      <Bar />
      {/* contact */}
      <div className={styles.nav__contact}>
        <div className={styles.nav__btnsContainer}>
          <SecondaryBtn content="fa-brands fa-square-github" link="https://github.com/fernandozarate07" />
          <SecondaryBtn content="fa-solid fa-envelope" link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!" />
          <SecondaryBtn content="fa-brands fa-linkedin" link="https://www.linkedin.com/in/fernandozaratedev/" />
        </div>
        {/* copy */}
        <span className={styles.nav__copy}>&copy; {new Date().getFullYear()} Fernando Zárate</span>
      </div>
    </div>
  );
};
export default Nav;
