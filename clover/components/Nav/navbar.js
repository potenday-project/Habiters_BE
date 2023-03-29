import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <>
      <div id={styles.nav}>
        <h3 id={styles.habiters}>
          HABITERS<span id={styles.dot}></span>
        </h3>
        <h5 id={styles.myhabit}>마이해빗</h5>
        <h5 id={styles.habitmunity}>해비티뮤니티</h5>
        <h5 id={styles.mypage}>마이페이지</h5>
      </div>
      <hr />
    </>
  );
};
export default Navbar;
