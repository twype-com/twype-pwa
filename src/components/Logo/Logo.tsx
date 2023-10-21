import { FC } from "react";
import { Righteous } from "next/font/google";
import cn from "classnames";
import styles from "./Logo.module.scss";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn(styles.logo, righteous.className, className)}>Twype</div>
  );
};
