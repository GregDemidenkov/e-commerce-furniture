import { FC } from "react";
import styles from './style.module.scss';

export const Logo: FC = () => {

  return (
    <div className={styles.logo}>
      Stulchak<span>Off</span>
    </div>
  );
}