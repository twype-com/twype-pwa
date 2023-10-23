import { FC } from "react";
import cn from "classnames";
import { Avatar } from "@radix-ui/themes";
import styles from "./User.module.scss";

type UserProps = {
  className?: string;
  size?: "small" | "medium" | "large";
  nickName: string;
  fullName: string;
  photoUrl?: string;
  to?: string;
  isOnline?: boolean;
  isVerified?: boolean;
};

export const User: FC<UserProps> = ({
  className,
  size = "medium",
  nickName,
  fullName,
  photoUrl,
  isOnline,
  isVerified,
}) => {
  const AvatarImg = () => {
    return <Avatar size="3" src={photoUrl} fallback="AT" radius="full" />;
  };

  return (
    <div className={cn(styles.user, className)}>
      <div className={styles.avatar}>
        <AvatarImg />
      </div>
      <div className={styles.info}>
        <div className={styles.nickName}>{nickName}</div>
        <div className={styles.fullName}>{fullName}</div>
      </div>
    </div>
  );
};
