"use client";
import { FC, useState } from "react";
import cn from "classnames";
import { MeetingControl } from "@/features/meeting/MeetingControl/MeetingControl";
import styles from "./MeetingActions.module.scss";

type MeetingActionsProps = {
  commentsCounter?: number;
};

export const MeetingActions: FC<MeetingActionsProps> = ({
  commentsCounter = 0,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={cn(styles.actions, { [styles.focused]: isFocused })}>
      <div className={styles.comments}>
        <MeetingControl
          className={styles.allComments}
          text="Comments"
          label={`${commentsCounter}`}
          icon="chatText"
          type="compact"
          onClick={() => {}}
        />
        <div className={styles.newComment}>
          <textarea
            className={styles.field}
            placeholder="Add new comment..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <MeetingControl
          text="Poll"
          label="Poll"
          icon="chartBar"
          type="compact"
          onClick={() => {}}
        />
        <MeetingControl
          text="Share"
          label="26"
          icon="shareFat"
          type="compact"
          onClick={() => {}}
        />
        <MeetingControl
          text="Like"
          label="73"
          icon={isLike ? "heartFill" : "heart"}
          type="compact"
          className={cn({ [styles.liked]: isLike })}
          onClick={() => setIsLike(!isLike)}
        />
      </div>
    </div>
  );
};
