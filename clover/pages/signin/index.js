import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/images/logo_habiters@3x.png";
import styles from "./index.module.scss";
import googleLogo from "../../public/images/super-g.png";
import kakaoLogo from "../../public/images/Union.png";
import naverLogo from "../../public/images/naver.png";
const index = () => {
  const router = useRouter();
  return (
    <>
      <div id={styles.logo}>
        <Link
          href={"/myhabit"}
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
          <div id={styles.google}>
            <Image
              src={googleLogo}
              height={16}
              width={16}
              alt="logo"
              style={{ marginRight: "8px" }}
            />
            구글로 로그인하기
          </div>
        </Link>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.kakao}>
            <Image
              src={kakaoLogo}
              height={16}
              width={16}
              alt="logo"
              style={{ marginRight: "8px" }}
            />
            카카오로 로그인하기
          </div>
        </Link>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.naver}>
            <Image
              src={naverLogo}
              height={16}
              width={16}
              alt="logo"
              style={{ marginRight: "8px" }}
            />
            네이버로 로그인하기
          </div>
        </Link>
      </div>
      <div id={styles.signup}>
        <div id={styles.text}>
          처음이신가요?{" "}
          <Link
            href={"/signup"}
            className={router.pathname === "/" ? "active" : ""}
            style={{ textDecoration: "none" }}
          >
            <span id={styles.test}>회원가입하기</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default index;
