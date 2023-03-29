import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../../pages/api/firebaseConfig";
import Loading from "../Loading";
import styles from "./index.module.scss";
import ReplyList from "./ReplyList";
const Reply = (props) => {
  const { data: session } = useSession();
  const [inputReply, setInputReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const textInputValue = (event) => {
    setInputReply(event.target.value);
  };

  const getReplyList = async () => {
    const replyListColleciton = await getDocs(
      query(
        collection(db, "Reply"),
        where("boardId", "==", `${props.boardId}`),
        orderBy("date")
      )
    );
    setReplyList(
      replyListColleciton.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const addReply = async () => {
    const replyCollection = collection(db, "Reply");
    setLoading(true);
    await addDoc(replyCollection, {
      boardId: props.boardId,
      content: inputReply,
      date: serverTimestamp(),
      email: session.user.email,
      writer: session.user.name,
      parentReplyNo: 0,
      profile: session.user.image,
    });
    setInputReply("");
    getReplyList();
    setLoading(false);
  };

  const removeReply = async (event) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      const removeReplyDoc = doc(
        db,
        "Reply",
        event.target.attributes.getNamedItem("keydata").value
      );
      await deleteDoc(removeReplyDoc);
    }
    getReplyList();
  };
  useEffect(() => {
    getReplyList();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <div id={styles.reply}>
        <textarea
          id={styles.replyArea}
          placeholder="댓글을 입력해주세요"
          rows="5"
          onChange={textInputValue}
          value={inputReply}
        ></textarea>
        <button id={styles.replyBtn} onClick={addReply}>
          작성
        </button>
      </div>
      <div id={styles.replyList}>
        <h3>
          댓글 {replyList.length} {">"}
        </h3>
        {replyList.map((item) => {
          return (
            <ReplyList
              key={item.id}
              item={item}
              remove={removeReply}
              email={props.email}
            />
          );
        })}
      </div>
    </>
  );
};

export default Reply;
