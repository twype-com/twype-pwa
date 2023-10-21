import { FC } from "react";
import { Righteous } from "next/font/google";
import cn from "classnames";
import styles from "./Logo.module.scss";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

type LogoProps = {};

export const Logo: FC<LogoProps> = () => {
  return <div className={cn(styles.logo, righteous.className)}>Twype</div>;
};
