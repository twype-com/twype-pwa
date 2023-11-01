"use client";
import { FC } from "react";
import cn from "classnames";
import { User } from "@/components/User/User";
import styles from "./FollowingAccounts.module.scss";

type FollowingAccountsProps = {
  className?: string;
};

export const FollowingAccounts: FC<FollowingAccountsProps> = ({
  className,
}) => {
  const list = Array.from({ length: 1 }, (_, i) => i + 1).map((item) => ({
    nickName: `nickName${item}`,
    fullName: `fullName${item}`,
    photoUrl: `https://source.unsplash.com/random/120×120/?avatar${item}`,
  }));

  return (
    <div className={cn(styles.following, className)}>
      <h3 className={styles.title}>Following accounts</h3>
      <ul className={styles.list}>
        {list.map((account) => (
          <li className={styles.item} key={account.nickName}>
            <User
              nickName={account.nickName}
              fullName={account.fullName}
              photoUrl={account.photoUrl}
              to={`/user/${account.nickName}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
