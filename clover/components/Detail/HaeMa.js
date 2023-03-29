import { useRouter } from "next/router";
import styles from "./index.module.scss";
const HaeMa = (props) => {
  const router = useRouter();
  const routerIndex = router.query.index;
  const clickHae = (e) => {};
  const clickMa = (e) => {};
  return (
    <div id={styles.recommand}>
      <div className={styles.btnDiv}>
        <button id={styles.doBtn} onClick={clickHae}>
          해?
        </button>
        <h3>{props.hae}</h3>
      </div>
      <div className={styles.btnDiv}>
        <button id={styles.dontBtn} onClick={clickMa}>
          마!
        </button>
        <h3>{props.ma}</h3>
      </div>
    </div>
  );
};
export default HaeMa;
