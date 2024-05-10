import { SVG } from "@/shared/ui";

import styles from './styles.module.scss';

export const CountController = () => {
  return (
    <div className={styles.countController}>
      <button className={styles.countController_button}>
        <SVG type="minus" />
      </button>

      <p className={styles.countController_count}>1</p>

      <button className={styles.countController_button}>
        <SVG type="plus" />
      </button>
    </div>
  );
}