import styles from "./index.module.scss";
import Link from "next/link";

const index = () => {
  return (
    <div id={styles.myhabit}>
      <div id={styles.title}>안녕하세요, 해비터_백재원님!</div>
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
      <div id={styles.myhabitmain}>
        <div id={styles.myhabitcalendar}>
          <div id={styles.myhabittitle}>
            <div id={styles.month}> 2023.04 </div>
            <button id={styles.plusbtn}>+ 새로운 습관 만들기</button>
          </div>
          <div id={styles.maincalendar}></div>
        </div>
        <div id={styles.daycheck}>
          <div id={styles.daychecktitle}>일별 확인</div>
          <div id={styles.daycheckBox}>
            <div id={styles.checkbox}>
              <div id={styles.checkboxtitle}>습관 이름 최대 10자</div>
              <button id={styles.checkboxbtn}>성공했어요</button>
            </div>
            <div id={styles.checkbox1}>
              <div id={styles.checkboxtitle1}>습관 이름 최대 10자</div>
              <button id={styles.checkboxbtn1}>성공했어요</button>
            </div>
            <div id={styles.checkbox2}>
              <div id={styles.checkboxtitle2}>습관 이름 최대 10자</div>
              <button id={styles.checkboxbtn2}>성공했어요</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
