'use client';

import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { Button, Input } from "@/shared/ui";
import { AUTH_ROUTES } from "@/shared/routes";
import { FormState, FormStateErrors } from "../model/types";
import isValidForm from "../utils/isValidForm";

import styles from './style.module.scss';

export const SignUpForm: FC = () => {
  const [formState, setFormState] = useState<FormState>({} as FormState);
  const [errors, setErrors] = useState<FormStateErrors | null>(null);

  const validate = () => {
    const newErrors = isValidForm(formState);

    if(newErrors) {
      setErrors(newErrors);
    }
  };

  const onSubmit = () => {
    validate();
  }

  useEffect(() => {
    if(errors) {
      validate();
    }
  }, [formState])

  return (
    <form action="" className={styles.Form}>
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
