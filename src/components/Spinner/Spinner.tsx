import { FC } from "react";
import cn from "classnames";
import styles from "./Spinner.module.scss";

type SpinnerProps = {
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return <span className={cn(styles.spinner, className)} />;
};
