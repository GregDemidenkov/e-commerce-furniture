import { FC } from "react";

import styles from './style.module.scss';
import { SignInForm } from "@/features/signInForm";

export const AuthCard: FC = () => {

  return (
    <div className={styles.authCard}>
      <div className={styles.background}></div>

      <div className={styles.content}>
        <h2>Вход</h2>

        <SignInForm />
      </div>
    </div>
  );
}