import { FC } from "react";
import { Logo } from "@/components/Logo/Logo";
import styles from "./Header.module.scss";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
