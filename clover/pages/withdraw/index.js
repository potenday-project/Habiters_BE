import styles from "./index.module.scss";
const index = () => {
  return (
    <div id={styles.widthdraw}>
      <div id={styles.title}>HABITERS 탈퇴 안내</div>
      <div id={styles.subtitle}>
        그 동안 HABITERS와 함께한 시간들, 유익하셨나요?
      </div>
      <div id={styles.infodiv}>
        <div id={styles.infotitle}>
          'HABITERS'를 탈퇴하기 전에 확인해주세요.
        </div>
        <div id={styles.frame}>
          <div id={styles.rec}></div>
          <div id={styles.explain}>
            탈퇴가 완료되면 개인정보 및 모든 기록은 즉시 파기되며 복구가
            불가해요.
          </div>
        </div>
        <div id={styles.frame}>
          <div id={styles.rec}></div>
          <div id={styles.explain}>
            기록을 남기고 싶으시면 탈퇴 전 엑셀 파일을 다운받아 주세요.
          </div>
        </div>
        <div id={styles.frame}>
          <div id={styles.rec}></div>
          <div id={styles.explain}>
            추가 문의 사항은 해비터스 개인정보관리팀에 연락주세요.
          </div>
        </div>
      </div>
      <div id={styles.fill}></div>
      <button id={styles.widthdrawBtn}>탈퇴하기</button>
    </div>
  );
};
export default index;
