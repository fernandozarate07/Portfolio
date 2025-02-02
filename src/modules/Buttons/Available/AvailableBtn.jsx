import styles from "./AvailableBtn.module.css";

const AvailableBtn = ({ link, content }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
      {content}
    </a>
  );
};

export default AvailableBtn;
