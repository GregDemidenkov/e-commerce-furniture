'use client';

import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { registration, clearMessage } from "@/entities/auth";
import { Button, Input } from "@/shared/ui";
import { AUTH_ROUTES } from "@/shared/routes";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import redirectTo from "@/shared/utils/redirect";
import { FormState, FormStateErrors } from "../model/types";
import isValidForm from "../utils/isValidForm";

import styles from './style.module.scss';

export const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();
  const { message, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const [formState, setFormState] = useState<FormState>({} as FormState);
  const [errors, setErrors] = useState<FormStateErrors | null>(null);

  const validate = () => {
    const newErrors = isValidForm(formState);
    setErrors(newErrors);

    if(!newErrors) return false;
    return true;
  };

  const onSubmit = () => {
    if(!validate()) {
      dispatch(registration(formState));
    }
  };

  useEffect(() => {
    if(errors) {
      validate();
    }

    return () => {
      dispatch(clearMessage());
    }
  }, [formState]);

  if(message.type === 'success' && !isLoading) redirectTo(AUTH_ROUTES.signIn);
  console.log(message)
  return (
    <form action="" className={styles.Form}>
      {
        message.type === 'error' &&
        <div className={styles.error}>
          <p>{message.text}</p>
        </div>
      }

      <Input
        style='underline'
        id="sign-up-first-name"
        type="text"
        placeholder="Имя"
        value={formState.firstName}
        onChange={(e) => setFormState({...formState, firstName: e.target.value})}
        error={errors?.firstName}
      />

      <Input
        style='underline'
        id="sign-up-last-name"
        type="text"
        placeholder="Фамилия"
        value={formState.lastName}
        onChange={(e) => setFormState({...formState, lastName: e.target.value})}
        error={errors?.lastName}
      />

      <Input
        style='underline'
        id="sign-up-birthday"
        type="date"
        placeholder="Дата рождения"
        value={formState.birthday}
        onChange={(e) => setFormState({...formState, birthday: e.target.value})}
        error={errors?.birthday}
      />
      
      <Input
        style='underline'
        id="sign-up-email"
        type="text"
        placeholder="Почта"
        value={formState.email}
        onChange={(e) => setFormState({...formState, email: e.target.value})}
        error={errors?.email}
      />

      <Input
        style='underline'
        id="sign-up-email"
        type="password"
        placeholder="Пароль"
        value={formState.password}
        onChange={(e) => setFormState({...formState, password: e.target.value})}
        error={errors?.password}
      />

      <div className={styles.buttonBlock}>
        <Button
          style="fill"
          type="button"
          onClick={onSubmit}
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
