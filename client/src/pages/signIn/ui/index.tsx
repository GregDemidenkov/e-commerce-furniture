import { FC } from "react";

import { AuthCard } from "@/widgets/authCard";

import styles from './style.module.scss';

export const SignInPage: FC = () => {

  return (
    <section className={styles.section}>
      <AuthCard />
    </section>
  );
}