import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.scss";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../api/firebaseConfig";
const Write = () => {
  const { data: session } = useSession();
  const [titleValue, setTitleValue] = useState("");
  const [writeValue, setwriteValue] = useState("");
  if (session) {
    const titleInput = (e) => {
      setTitleValue(e.target.value);
    };
    const writeInput = (e) => {
      setwriteValue(e.currentTarget.textContent);
    };
    const addBoard = async () => {
      const todoListCollectionCollectionRef = collection(db, "Board");
      await addDoc(todoListCollectionCollectionRef, {
        title: titleValue,
        content: writeValue,
        email: session.user.email,
        writer: session.user.name,
        date: serverTimestamp(),
        hae: 0,
        ma: 0,
        viewCount: 0,
      });
    };
    return (
      <div id={styles.write}>
        <div className={styles.writeinfo}>
          <label className={styles.writelabel} htmlFor="">
            제목
          </label>
          <input
            onChange={titleInput}
            className={styles.writeinputs}
            type="text"
          />
        </div>
        <div className={styles.writeinfo}>
          <label className={styles.writelabel} htmlFor="">
            작성자
          </label>
          <div className={styles.writeinputs} type="text" readOnly>
            {session.user.name}
          </div>
        </div>
        <div>
          <label className={styles.writelabel} htmlFor="">
            내용
          </label>
          <div
            id={styles.writeinput}
            onInput={writeInput}
            contentEditable="true"
          ></div>
        </div>
        <Link href={"/"}>
          <button id={styles.writebutton} onClick={addBoard}>
            글작성
          </button>
        </Link>
      </div>
    );
  }
};
export default Write;
