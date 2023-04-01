import styles from "../styles/index.module.scss";
import Image from "next/image";
import logo from "../public/images/HABIT_ HAVE-IT.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Vector from "../public/images/Vector.png";
import Mask1 from "../public/images/Mask group_1.png";
import Mask2 from "../public/images/Mask group_2.png";
import Mask3 from "../public/images/Mask group_3.png";
import Mask4 from "../public/images/Mask group_4.png";

const index = () => {
  const router = useRouter();

  return (
    <div id={styles.intro}>
      <div id={styles.first}>
        <Image
          style={{ marginTop: "266px" }}
          src={logo}
          height={192}
          width={361}
          alt="logo"
        />
        <div id={styles.introText}>
          <div id={styles.textdiscription}>
            해비터즈는 해빗트래커 기반 습관 성형 커뮤니티 입니다.
          </div>
          <div id={styles.textdiscription}>
            누구나 얼마든지 건강한 습관을 가질 수 있습니다.
          </div>
          <div id={styles.textdiscription}>
            해비터즈와 함께 더 나은 내가 되기 위한 여정을 지금 바로 시작하세요.
          </div>
        </div>
        <div id={styles.btns}>
          <Link
            href={"/signin"}
            style={{ textDecoration: "none" }}
            id={styles.signinbtn}
          >
            로그인하기
          </Link>
          <Link
            href={"/signup"}
            style={{ textDecoration: "none" }}
            id={styles.signupbtn}
          >
            회원가입하기
          </Link>
        </div>
        <div id={styles.scrollText}>
          스크롤을 내려서 해비터즈의 기능을 확인해보세요.
        </div>
        <Image
          style={{ marginTop: "12px" }}
          src={Vector}
          height={50}
          width={25}
          alt="logo"
        />
      </div>
      <div id={styles.second}>
        <div id={styles.title}>쉽게 건강한 습관을 가질 수 있도록</div>
        <div id={styles.subtitle}>
          손쉬운 습관 체크와 회고 작성을 통해 더 나은 내가 될 수 있도록
          도와드려요.
        </div>
        <div>
          <Image
            style={{ marginTop: "72px", marginRight: "12px" }}
            src={Mask1}
            height={500}
            width={380}
            alt="logo"
          />
          <Image
            style={{ marginTop: "72px", marginLeft: "12px" }}
            src={Mask2}
            height={500}
            width={776}
            alt="logo"
          />
        </div>
        <div>
          <Image
            style={{ marginTop: "24px", marginRight: "12px" }}
            src={Mask4}
            height={500}
            width={776}
            alt="logo"
          />
          <Image
            style={{ marginTop: "24px", marginLeft: "12px" }}
            src={Mask3}
            height={500}
            width={380}
            alt="logo"
          />
        </div>
      </div>
      <div id={styles.third}>
        <div id={styles.thirdtitle}>HAVE IT NOW</div>
        <div id={styles.thirdsubtitle}>
          지금 바로 해비터즈와 함께 습관 형성을 시작해보세요.
        </div>
        <div id={styles.thirdbtns}>
          <Link
            href={"/signin"}
            style={{ textDecoration: "none" }}
            id={styles.signinbtn}
          >
            로그인하기
          </Link>
          <Link
            href={"/signup"}
            style={{ textDecoration: "none" }}
            id={styles.signupbtn}
          >
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};
export default index;
