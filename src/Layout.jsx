import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Aside from "./components/sidebar/sidebar";
import * as styles from "./App.module.css";

export function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.aside}>
        <Aside open={open} onClose={() => setOpen(false)} />

        <div className={styles.header}>
          <Header onMenu={() => setOpen(true)} />
          <main className={styles.page}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
