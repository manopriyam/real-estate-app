import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wonderfulServiceParent}>
        <div className={styles.wonderfulService}>Wonderful service!</div>
        <div className={styles.loremIpsumHasBeenTheIndusWrapper}>
          <i className={styles.loremIpsumHas}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries
          </i>
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.thejidmeinsDentistWrapper}>
        <div className={styles.thejidmeinsDentist}>-Thejidmeins, dentist</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
