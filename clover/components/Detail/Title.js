import styles from "./index.module.scss";
import TitleKebabBtn from "./TitleKebabBtn";
import { db } from "../../pages/api/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";

const Title = (props) => {
  const router = useRouter();
  const removeBoard = async () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      const replyListCollection = collection(db, "Reply");
      const replyListQuery = query(
        replyListCollection,
        where("boardId", "==", `${props.boardId}`)
      );
      const replyListData = await getDocs(replyListQuery);
      if (replyListData.docs.length !== 0) {
        replyListData.docs.map((item) => {
          deleteDoc(item.ref);
        });
      }
      const boardDoc = doc(db, "Board", `${props.boardId}`);
      await deleteDoc(boardDoc);
      router.push("/");
    }
  };
  return (
    <div id={styles.detailTitle}>
      <h2>{props.title}</h2>
      <div id={styles.titleInfo}>
        <h4>{props.writer}</h4>
        {props.writerEmail === props.email ? (
          <TitleKebabBtn removeBoard={removeBoard} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Title;
