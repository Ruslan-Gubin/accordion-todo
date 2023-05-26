import { LayoutHeader, LayoutAside, Todo } from "../widgets";

import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <LayoutHeader />
      <section className={styles.content}>
        <LayoutAside />
        <Todo />
      </section>
    </div>
  );
}

export { App };
