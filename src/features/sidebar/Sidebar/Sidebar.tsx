"use client";
import { FC } from "react";
import cn from "classnames";
import { useLayout } from "@/features/layout/useLayout";
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { breakpoint } = useLayout();

  return (
    <aside className={cn(styles.sidebar, styles[breakpoint], className)}>
      SB
    </aside>
  );
};
