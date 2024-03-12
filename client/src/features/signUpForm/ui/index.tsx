import { FC } from "react";
import Link from "next/link";

import { Button, Input } from "@/shared/ui";
import { AUTH_ROUTES } from "@/shared/routes";

import styles from './style.module.scss';

export const SignUpForm: FC = () => {

  return (
    <form action="" className={styles.Form}>
      <div>
        <Input
          style='underline'
          id="sign-up-first-name"
          type="text"
          placeholder="Имя"
        />
      </div>

      <div>
        <Input
          style='underline'
          id="sign-up-last-name"
          type="text"
          placeholder="Фамилия"
        />
      </div>

      <div>
        <Input
          style='underline'
          id="sign-up-birthday"
          type="text"
          placeholder="Дата рождения"
        />
      </div>
      
      <div>
        <Input
          style='underline'
          id="sign-up-email"
          type="text"
          placeholder="Почта"
        />
      </div>

      <div>
        <Input
          style='underline'
          id="sign-up-email"
          type="password"
          placeholder="Пароль"
        />
      </div>

      <div className={styles.buttonBlock}>
        <Button
          style="fill"
          type="button"
        >
          Зарегистрироваться
        </Button>
      </div>

      <div className={styles.registrationRef}>
        Уже есть аккаунт? <Link href={AUTH_ROUTES.signIn}>Вход</Link>
      </div>
    </form>
  );
};
