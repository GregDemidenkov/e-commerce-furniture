'use client';

import { FC, useState } from "react";
import Link from "next/link";

import { Button, Input } from "@/shared/ui";
import { AUTH_ROUTES } from "@/shared/routes";
import redirectTo from "@/shared/utils/redirect";

import { FormState } from "../model/types";

import styles from './style.module.scss';

export const SignInForm: FC = () => {
  const [formState, setFormState] = useState<FormState>({} as FormState);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    redirectTo("/");
  }
  
  return (
    <form action="" className={styles.Form}>
      <div>
        <Input
          style='underline'
          id="sign-in-email"
          type="text"
          placeholder="Почта"
          value={formState.email}
          onChange={(e) => setFormState({...formState, email: e.target.value})}
        />
      </div>

      <div>
        <Input
          style='underline'
          id="sign-in-passwordl"
          type="password"
          placeholder="Пароль"
          value={formState.password}
          onChange={(e) => setFormState({...formState, password: e.target.value})}
        />
      </div>

      <div className={styles.buttonBlock}>
        <Button
          style="fill"
          type="button"
          onClick={onSubmit}
        >
          Войти
        </Button>
      </div>

      <div className={styles.registrationRef}>
        Ещё нет аккаунта? <Link href={AUTH_ROUTES.signUp}>Регистрация</Link>
      </div>
    </form>
  );
};
