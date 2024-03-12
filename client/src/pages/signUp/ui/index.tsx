import { FC } from "react";

import { SignUpForm } from "@/features/signUpForm";
import { AuthCard } from "@/shared/ui";

import styles from './style.module.scss';

export const SignUpPage: FC = () => {

  return (
    <section className={styles.section}>
      <AuthCard
        type="sign-up"
        label={'Регистрация'}
      >
        <SignUpForm />
      </AuthCard>
    </section>
  );
}