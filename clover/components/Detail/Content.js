import styles from "./index.module.scss";
const Content = (props) => {
  return <div id={styles.detailWrite}>{props.content}</div>;
};
export default Content;
