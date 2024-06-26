import { FunctionComponent } from "react";
import styles from "./Nav1.module.css";

export type Nav1Type = {
  className?: string;

  /** Action props */
  onLOGOTextClick?: () => void;
  onHomeLinkContainerClick?: () => void;
};

const Nav1: FunctionComponent<Nav1Type> = ({
  className = "",
  onLOGOTextClick,
  onHomeLinkContainerClick,
}) => {
  return (
    <header className={[styles.nav2, className].join(" ")}>
      <div className={styles.nav2Child} />
      <a className={styles.logo} onClick={onLOGOTextClick}>
        LOGO
      </a>
      <div className={styles.homeLinkWrapper}>
        <div className={styles.homeLink} onClick={onHomeLinkContainerClick}>
          <div className={styles.tablerhomeParent}>
            <div className={styles.tablerhome} />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.homeContent}>
            <a className={styles.home}>Home</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav1;
