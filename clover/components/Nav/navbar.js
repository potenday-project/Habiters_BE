import Link from "next/link";
import styles from "./navbar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/images/logo_habiters@3x.png";
const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div id={styles.nav}>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <Image src={logo} height={24} width={203.73} alt="logo" />
        </Link>

        <div id={styles.category}>
          <Link
            href={"/"}
            style={{ textDecoration: "none" }}
            className={router.pathname === "/" ? "active" : ""}
          >
            <h5 id={styles.myhabit}>마이해빗</h5>
          </Link>
          <Link
            href={"/"}
            style={{ textDecoration: "none" }}
            className={router.pathname === "/" ? "active" : ""}
          >
            <h5 id={styles.habitmunity}>해비티뮤니티</h5>
          </Link>
        </div>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <h5 id={styles.mypage}>마이페이지</h5>
        </Link>
      </div>
      <hr id={styles.line} />
    </>
  );
};
export default Navbar;
