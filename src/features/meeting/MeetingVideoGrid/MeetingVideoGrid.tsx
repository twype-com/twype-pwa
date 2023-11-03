"use client";
import { FC } from "react";
import styles from "./MeetingVideoGrid.module.scss";

type MeetingVideoGridProps = {
  onClick: () => void;
};

export const MeetingVideoGrid: FC<MeetingVideoGridProps> = ({ onClick }) => {
  return (
    <div className={styles.grid} onClick={onClick}>
      <video
        src="/video/cat.webm"
        autoPlay
        muted
        loop
        className={styles.video}
      />
    </div>
  );
};
