import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/images/logo_habiters@3x.png";
import styles from "./index.module.scss";
const index = () => {
  const router = useRouter();
  return (
    <>
      <div id={styles.logo}>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <Image src={logo} height={36} width={305.6} alt="logo" />
        </Link>
      </div>
      <div id={styles.infoDiv}>
        <div id={styles.info}>
          환영합니다, 당신의 습관 메이커 해비터즈입니다!
        </div>
      </div>
      <div id={styles.login}>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.google}>구글로 로그인하기</div>
        </Link>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.kakao}>카카오로 로그인하기</div>
        </Link>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.naver}>네이버로 로그인하기</div>
        </Link>
      </div>
      <div id={styles.signup}>
        <div id={styles.text}>
          처음이신가요?{" "}
          <Link href={"/"} className={router.pathname === "/" ? "active" : ""}>
            회원가입하기
          </Link>
        </div>
      </div>
    </>
  );
};
export default index;
