import styles from "./index.module.scss";
import Link from "next/link";

const index = () => {
  return (
    <div id={styles.myhabit}>
      <div id={styles.title}>안녕하세요, 해비터_해비터님!</div>
      <div id={styles.tab}>
        <Link
          href="/myhabit"
          style={{ textDecoration: "none" }}
          id={styles.habittracker}
        >
          월간 해빗 트래커
        </Link>
        <Link
          href="/retrospect"
          style={{ textDecoration: "none" }}
          id={styles.retrospect}
        >
          월간 회고
        </Link>
      </div>
    </div>
  );
};
export default index;
