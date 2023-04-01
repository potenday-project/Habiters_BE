import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/images/habitimunity.png";
import styles from "../habitimunity/index.module.scss";
import axios from "axios";
import Link from "next/link";
const index = () => {
  const router = useRouter();
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksImlhdCI6MTY4MDMzNTI5MSwiZXhwIjoxNjgwOTQwMDkxfQ.J8M_Z7Z6ZNMOcy5Pcx2oslObtZG3q_uiqeyYmea_x3E";
  const test = async () => {
    const result = await axios.get("http://223.130.162.40:8080/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(result.data);
  };
  return (
    <div id={styles.errorDiv}>
      <div id={styles.errorImg}>
        <Image src={logo} height={162} width={218} alt="logo" />
      </div>
      <div id={styles.text}>여러분을 얼른 만나기위해 노력하고 있어요!</div>
      <div id={styles.text}>조금만 기다려주시면 곧 만날 수 있을거에요.</div>
      {/* <button onClick={test}></button> */}
    </div>
  );
};
export default index;
