import { FC } from "react";

import { SignInForm } from "@/features/signInForm";
import { AuthCard } from "@/shared/ui";

import styles from './style.module.scss';

export const SignInPage: FC = () => {

  return (
    <section className={styles.section}>
      <AuthCard
        type="sign-in"
        label={'Вход'}
      >
        <SignInForm />
      </AuthCard>
    </section>
  );
};
