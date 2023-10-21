import { FC, PropsWithChildren } from "react";
import { Header } from "@/features/headline/Header/Header";
import { Sidebar } from "@/features/sidebar/Sidebar/Sidebar";
import { Footer } from "@/features/footer/Footer/Footer";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {};

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <Sidebar className={styles.sidebar} />
      <Footer className={styles.footer} />
    </div>
  );
};
