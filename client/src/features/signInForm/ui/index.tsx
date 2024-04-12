'use client';

import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { login, clearMessage } from "@/entities/auth";
import { Button, Input } from "@/shared/ui";
import { AUTH_ROUTES, MAIN_PATH } from "@/shared/routes";
import redirectTo from "@/shared/utils/redirect";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { getCookie } from "@/shared/utils/cookie";

import { FormState } from "../model/types";

import styles from './style.module.scss';

export const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
  const { message, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const [formState, setFormState] = useState<FormState>({} as FormState);

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    }
  }, []);

  const onSubmit = () => {
    dispatch(login(formState));
  };

  if(getCookie('accessToken') && !isLoading) redirectTo(MAIN_PATH);

  return (
    <form action="" className={styles.Form}>
      {
        message.type === 'error' &&
        <div className={styles.error}>
          <p>{message.text}</p>
        </div>
      }
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
