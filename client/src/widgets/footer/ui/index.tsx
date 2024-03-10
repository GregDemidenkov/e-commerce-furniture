import { FC } from "react";

import styles from './style.module.scss';

export const Footer: FC = () => {

  const date = new Date();

  return (
    <footer className={styles.footer}>
      <p>© Торговый дом «StulchackOff», {date.getFullYear()}</p>
    </footer>
  );
};