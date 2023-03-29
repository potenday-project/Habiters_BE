import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div id={styles.footer}>
        <h3 id={styles.habiters}>
          HABITERS<span id={styles.dot}></span>
        </h3>
      </div>
    </>
  );
};
export default Footer;
