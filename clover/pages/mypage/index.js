import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../public/images/avatar_default.png";

const MyPage = () => {
  return (
    <div id={styles.mypage}>
      <div id={styles.mypageTitle}>마이페이지</div>
      <Image src={logo} height={130} width={130} alt="logo" />
      <div id={styles.email}>
        <div id={styles.emailText}>이메일</div>
        <input id={styles.emailInput} placeholder="bjw1622@gmail.com"></input>
      </div>
      <div id={styles.nickname}>
        <div id={styles.nicknameText}>닉네임</div>
        <div id={styles.nicknameDiv}>
          <input id={styles.nicknameInput} placeholder="해비터해비터"></input>
          <button id={styles.nicknameChange}>수정</button>
        </div>
      </div>
      <button id={styles.logout}>로그아웃</button>
      <button id={styles.exit}>탈퇴하기</button>
    </div>
  );
};
export default MyPage;
