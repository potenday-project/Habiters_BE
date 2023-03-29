import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import PagingBtn from "../components/Main/PagingBtn";
import Table from "../components/Main/Table";
import WriteBtn from "../components/Main/WriteBtn";
import { db } from "./api/firebaseConfig";
import styles from "../components/Main/index.module.scss";
import { useState } from "react";
const Home = ({ getBoardList }) => {
  const [selectValue, setSelectValue] = useState("title");

  const [findValue, setFindValue] = useState("");

  const [boardListValue, setBoardListValue] = useState([]);

  const [findCheck, setFindCheck] = useState(false);
  const select = (e) => {
    if (e.target.value === "제목") {
      setSelectValue("title");
    } else if (e.target.value === "작성자") {
      setSelectValue("writer");
    }
  };

  const findInput = (e) => {
    setFindValue(e.target.value);
  };

  const find = async () => {
    const boardListCollectionCollectionRef = collection(db, "Board");
    const data = await getDocs(
      query(
        boardListCollectionCollectionRef,
        where(`${selectValue}`, "==", `${findValue}`),
        orderBy("date")
      )
    );
    setBoardListValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setFindCheck(true);
  };

  return (
    <>
      <div className={styles.find}>
        <select onChange={select}>
          <option>제목</option>
          <option>작성자</option>
        </select>
        <div>
          <input onChange={findInput} value={findValue} type="text" />
          <button onClick={find}>검색</button>
        </div>
      </div>
      <Table
        boardList={getBoardList}
        boardListValue={boardListValue}
        findCheck={findCheck}
      />
      <WriteBtn />
      <PagingBtn />
    </>
  );
};

export async function getServerSideProps() {
  const boardListCollectionCollectionRef = collection(db, "Board");
  let list;
  const getBoards = async () => {
    const data = await getDocs(
      query(boardListCollectionCollectionRef, orderBy("date"))
    );
    list = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return list;
  };
  return {
    props: {
      getBoardList: JSON.parse(JSON.stringify(await getBoards())),
    },
  };
}
export default Home;
