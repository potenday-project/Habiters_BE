import React from "react";
import { Menu, MenuGroup, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import styles from "./index.module.scss";
const TitleKebabBtn = (props) => {
  return (
    <Menu
      id={styles.menu}
      arrow
      menuButton={<button id={styles.menuBtnTitleInfo}>...</button>}
    >
      <MenuGroup id={styles.menuGroup}>
        <MenuButton className={styles.groupBtn}>수정</MenuButton>
        <MenuButton className={styles.groupBtn} onClick={props.removeBoard}>
          삭제
        </MenuButton>
      </MenuGroup>
    </Menu>
  );
};
export default TitleKebabBtn;
