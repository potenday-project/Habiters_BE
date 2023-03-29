import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { getSession, useSession } from "next-auth/react";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import { db } from "../api/firebaseConfig";
import styles from "./index.module.scss";
const MyPage = ({ boardCount, replyCount, sessionData }) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div id={styles.mypage}>
        <h2 className={styles.headtext}>{session.user.name} 님</h2>
        <div id={styles.activeinfo}>
          <div>
            <h4>작성 게시글 수</h4>
            <h5>{boardCount}</h5>
          </div>
          <div>
            <h4>작성 댓글 수</h4>
            <h5>{replyCount}</h5>
          </div>
        </div>
        <h3 className={styles.headtext}>{">"} 프로필 이미지 변경</h3>
        <ProfileImage sessionData={sessionData}></ProfileImage>
      </div>
    );
  }
};

export async function getServerSideProps(context) {
  const sessionData = await getSession(context);

  const collBoard = collection(db, "Board");
  const boardCountQuery = query(
    collBoard,
    where("email", "==", `${sessionData.user.email}`)
  );
  const boardCountSnapShot = await getCountFromServer(boardCountQuery);
  const boardCount = boardCountSnapShot.data().count;

  const collReply = collection(db, "Reply");
  const replyCountQuery = query(
    collReply,
    where("email", "==", `${sessionData.user.email}`)
  );
  const replyCountSnapShot = await getCountFromServer(replyCountQuery);
  const replyCount = replyCountSnapShot.data().count;
  return {
    props: {
      boardCount: boardCount,
      replyCount: replyCount,
      sessionData: sessionData,
    },
  };
}

export default MyPage;
