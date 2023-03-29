import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./index.module.scss";

const WriteBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Link href="/write">
        <button className={styles.write}>글쓰기</button>
      </Link>
    );
  }
};
export default WriteBtn;
