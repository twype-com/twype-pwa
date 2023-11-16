import { FC } from "react";
import cn from "classnames";
import styles from "./ProfileDetails.module.scss";
import { UserProfile } from "../types";
import { Link as LinksIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Badge } from "@radix-ui/themes";

type ProfileDetailsProps = {
  className?: string;
  profile: UserProfile
};

export const ProfileDetails: FC<ProfileDetailsProps> = ({ className, profile }) => {
  console.log(profile)
  return (
    <section className={cn(styles.details, className)}>
      <div className={styles.profileValues}>
        <span><b className={styles.value}>{profile.subscriptions}</b> Following</span>
        <span><b className={styles.value}>{profile.subscribers}</b> Followers</span>
        <span>
          {profile.isOnline ? (
            <Badge color="green" size='1' variant="surface">Online</Badge>
          ) : (
            <Badge color="gray" size='1' variant="surface">Offline</Badge>
          )}
        </span>
      </div>
      <div>
        {!!profile.description?.length ? (
          <p className={styles.description}>{profile.description}</p>
        ) : (
          <p className={styles.description}>No description</p>
        )}
      </div>
      {'links' in profile ? (
      <div className={styles.links}>
        <LinksIcon size={24} color='black' />
        {profile.links?.map((oneLink, id) => {
          return (<Link key={id} href={oneLink.link} className={styles.link}>{oneLink.title}</Link>)  
        }) }
      </div>
      ) : <></>}
    </section>
  );
};
