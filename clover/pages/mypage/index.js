import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../public/images/avatar_default.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MyPage = () => {
  const router = useRouter();
  // const routerIndex = router.query.accessToken;
  // const [data, setData] = useState("");
  // const getData = async () => {
  //   try {
  //     await Axios.get(`http://223.130.162.40:8080/users/me`, {
  //       headers: { Authorization: `Bearer ${routerIndex}` },
  //     }).then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   getData();
  // }, [router.isReady]);

  return (
    <div id={styles.mypage}>
      <div id={styles.mypageTitle}>마이페이지</div>
      <Image src={logo} height={130} width={130} alt="logo" />
      <div id={styles.email}>
        <div id={styles.emailText}>이메일</div>
        <input id={styles.emailInput} readOnly></input>
      </div>
      <div id={styles.nickname}>
        <div id={styles.nicknameText}>닉네임</div>
        <div id={styles.nicknameDiv}>
          <input id={styles.nicknameInput} placeholder="해비터해비터"></input>
          <button id={styles.nicknameChange}>수정</button>
        </div>
      </div>
      <button id={styles.logout}>로그아웃</button>
      <Link
        href={"/withdraw"}
        style={{ textDecoration: "none" }}
        className={router.pathname === "/" ? styles.active : ""}
      >
        <button id={styles.exit}>탈퇴하기</button>
      </Link>
    </div>
  );
};
export default MyPage;
