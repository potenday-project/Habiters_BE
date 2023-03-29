import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/images/illust.png";
import styles from "../styles/error.module.scss";
import Link from "next/link";

const notFound = () => {
  const router = useRouter();

  return (
    <div id={styles.errorDiv}>
      <div id={styles.errorImg}>
        <Image src={logo} height={298} width={379} alt="logo" />
      </div>
      <div id={styles.text}>미지의 공간으로 와버렸네요!</div>
      <div id={styles.text}>다시 해빗 페이지로 돌아갈 수 있게 도와드릴게요</div>
      <div id={styles.main}>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <button id={styles.mainBtn}>메인으로 돌아가기</button>
        </Link>
      </div>
    </div>
  );
};
export default notFound;
