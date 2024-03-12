import { FC } from "react";
import Link from "next/link";

import { Button, Input } from "@/shared/ui";
import { AUTH_ROUTES } from "@/shared/routes";

import styles from './style.module.scss';

export const SignInForm: FC = () => {

  return (
    <form action="" className={styles.Form}>
      <div>
        <Input
          style='underline'
          id="sign-in-email"
          type="text"
          placeholder="Почта"
        />
      </div>

      <div>
        <Input
          style='underline'
          id="sign-in-passwordl"
          type="password"
          placeholder="Пароль"
        />
      </div>

      <div className={styles.buttonBlock}>
        <Button
          style="fill"
          type="button"
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
