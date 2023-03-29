import styles from "./index.module.scss";
import { MyChart } from "../../components/DashBoardChart/MyChart";
import { useEffect } from "react";
const DashBoard = () => {
  return (
    <div id={styles.dashboard}>
      <h2>나의 해마</h2>
      <MyChart />
    </div>
  );
};
export default DashBoard;
