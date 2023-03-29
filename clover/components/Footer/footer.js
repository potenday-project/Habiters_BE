import styles from "./footer.module.scss";
import logo from "../../public/images/logo_habiters@3x.png";
import cloverLogo from "../../public/images/© 2023 TEAM CLOVER🍀, All rights reserved..png";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div id={styles.footer}>
        <div id={styles.logodiv}>
          <Image
            id={styles.logo}
            src={logo}
            height={24}
            width={203.73}
            alt="logo"
          />
        </div>
        <div id={styles.servicediv}>
          <div id={styles.service}>서비스 소개</div>
          <div id={styles.block}></div>
          <div id={styles.use}>이용 약관</div>
          <div id={styles.block}></div>
          <div id={styles.private}>개인정보 처리방침</div>
        </div>
        <div id={styles.cloverdiv}>
          © 2023 TEAM CLOVER🍀, All rights reserved.
        </div>
      </div>
    </>
  );
};
export default Footer;
