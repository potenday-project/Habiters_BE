import Image from "next/image";
import styles from "./index.module.scss";
import ReplyKebabBtn from "./ReplyKebabBtn";

const ReplyList = (props) => {
  return (
    <>
      <div id={styles.replyHead}>
        <div id={styles.replyItem}>
          <Image
            id={styles.profile}
            src={props.item.profile}
            alt=""
            width={50}
            height={50}
          ></Image>
          <h4 id={styles.replyer}>{props.item.writer}</h4>
        </div>
        {props.item.email === props.email ? (
          <ReplyKebabBtn
            keydata={props.item.id}
            remove={props.remove}
          ></ReplyKebabBtn>
        ) : (
          ""
        )}
      </div>
      <div id={styles.replyContent}>{props.item.content}</div>
      <div id={styles.rereplyBtn}>
        <button>답글 쓰기</button>
        <button>답글 보기</button>
      </div>
    </>
  );
};
export default ReplyList;
