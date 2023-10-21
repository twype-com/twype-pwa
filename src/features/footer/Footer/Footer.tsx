"use client";
import { FC } from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  return <footer className={cn(styles.footer, className)}>footer</footer>;
};
