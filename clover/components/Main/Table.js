import Link from "next/link";
import styles from "./index.module.scss";
const Table = (props) => {
  return (
    <div className={styles.home}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>#</th>
            <th className={styles.th}>제목</th>
            <th className={styles.th}>작성자</th>
            <th className={styles.th}>날짜</th>
            <th className={styles.th}>조회수</th>
          </tr>
        </thead>
        {props.findCheck ? (
          <tbody>
            {props.boardListValue.map((item, num) => {
              return (
                <tr key={item.id}>
                  <td className={styles.td}>{num + 1}</td>
                  <td className={styles.td}>
                    <Link className={styles.link} href={`/detail/${item.id}`}>
                      {item.title}
                    </Link>
                  </td>
                  <td className={styles.td}>{item.writer}</td>
                  <td className={styles.td}></td>
                  <td className={styles.td}>{item.viewCount}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            {props.boardList.map((item, num) => {
              return (
                <tr key={item.id}>
                  <td className={styles.td}>{num + 1}</td>
                  <td className={styles.td}>
                    <Link className={styles.link} href={`/detail/${item.id}`}>
                      {item.title}
                    </Link>
                  </td>
                  <td className={styles.td}>{item.writer}</td>
                  <td className={styles.td}></td>
                  <td className={styles.td}>{item.viewCount}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};
export default Table;
