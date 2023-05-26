import { Notification } from "../../../shared";
import styles from "./LayoutHeader.module.scss";

const LayoutHeader = () => {
  return (
    <section className={styles.layout_header}>
      <div className={styles.layout_header__project}>
        <div className={styles.header_project__logo}></div>
        <h1 className={styles.header_project__title}>Проэкт</h1>
      </div>

      <div className={styles.layout_header__auth}>
        <Notification className={styles.header_auth__notification} />
        <div className={styles.header_auth__avatar}></div>
        <div className={styles.header_auth__info}>
          <span className={styles.header_auth__name}>Иванов В. А.</span>
          <span className={styles.header_auth__description}>Должность</span>
        </div>
      </div>
    </section>
  );
};

export { LayoutHeader };
