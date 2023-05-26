import styles from "./LayoutAside.module.scss";

const LayoutAside = () => {
  return (
    <aside className={styles.layout_aside}>
      <div className={styles.layout_aside__options}>
        <div className={styles.aside_options__square}></div>
      </div>
    </aside>
  );
};

export { LayoutAside };
