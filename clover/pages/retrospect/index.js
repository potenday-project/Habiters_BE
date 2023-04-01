import styles from "./index.module.scss";
import Link from "next/link";
import logo from "../../public/images/trash.png";
import Image from "next/image";

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
          </div>
          <div id={styles.maincard}>
            <div id={styles.leftcard}>
              <div id={styles.dayweek}>토요일</div>
              <div id={styles.day}>01</div>
              <button id={styles.deletebtn}>
                <Image src={logo} height={32} width={32} alt="logo" />
              </button>
            </div>
            <div id={styles.rightcard}>
              오늘의 회고내용을 어쩌구 저쩌구 쓰게 됩니다. 그게 200자가 넘으면은
              글자수가 제한되는데, 이게 어떻게 보면 너무 길어질 수도 있는데 이걸
              영역을 늘려야 할지 아니면 애초에 스크롤로 가야할지...참 고민이
              되네요. 근데 생각보다 200자가 그렇게 많지 않을 것 같기도 하네요?
              이것 참참.. 공백은 포함해서 가는건가요? 공백 포함하면 이게 200자
            </div>
          </div>
          <div id={styles.maincard}>
            <div id={styles.leftcard}>
              <div id={styles.dayweek}>일요일</div>
              <div id={styles.day}>02</div>
              <button id={styles.deletebtn}>
                <Image src={logo} height={32} width={32} alt="logo" />
              </button>
            </div>
            <div id={styles.rightcard}>
              오늘의 회고내용을 어쩌구 저쩌구 쓰게 됩니다. 그게 200자가 넘으면은
              글자수가 제한되는데, 이게 어떻게 보면 너무 길어질 수도 있는데 이걸
              영역을 늘려야 할지 아니면 애초에 스크롤로 가야할지...참 고민이
              되네요. 근데 생각보다 200자가 그렇게 많지 않을 것 같기도 하네요?
              이것 참참.. 공백은 포함해서 가는건가요? 공백 포함하면 이게 200자
            </div>
          </div>
        </div>
        <div id={styles.retrospectInput}>
          <div id={styles.retrospecttitle}>오늘의 회고</div>
          <textarea
            id={styles.retrospectdiv}
            placeholder="오늘의 회고를 작성해주세요.  작성한 회고는 24시간 이내로만 수정이 가능해요."
          ></textarea>
          <div id={styles.retrospectfont}>0/200</div>
          <button id={styles.retrospectbtn}>버튼</button>
        </div>
      </div>
    </div>
  );
};
export default index;
