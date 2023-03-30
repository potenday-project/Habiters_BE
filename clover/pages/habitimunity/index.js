import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/images/habitimunity.png";
import styles from "../habitimunity/index.module.scss";
import Link from "next/link";
const index = () => {
  const router = useRouter();

  return (
    <div id={styles.errorDiv}>
      <div id={styles.errorImg}>
        <Image src={logo} height={162} width={218} alt="logo" />
      </div>
      <div id={styles.text}>여러분을 얼른 만나기위해 노력하고 있어요!</div>
      <div id={styles.text}>조금만 기다려주시면 곧 만날 수 있을거에요.</div>
    </div>
  );
};
export default index;
