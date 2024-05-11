'use client';

import { useEffect, useState } from 'react';
import { User } from '@/entities/auth';
import { useAppDispatch, useAppSelector } from '@/shared/utils/storeHooks';
import { Button, Input } from '@/shared/ui';
import { FormStateErrors } from '../model/types';
import { updateUser } from '../model/actons';
import isValidForm from '../utils/isValidForm';
import { GenderSwitch } from './GenderSwitch';

import styles from './styles.module.scss';

export const SettingsForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const [userData, setUserData] = useState<User>({} as User);
  const [errors, setErrors] = useState<FormStateErrors | null>(null);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setUserData(user)
  }, [user]);

  useEffect(() => {
    if(errors) {
      validate();
    }
  }, [userData]);

  const validate = () => {
    const newErrors = isValidForm(userData);
    setErrors(newErrors);

    if(!newErrors) return false;
    return true;
  };

  const onSubmit = () => {
    if(!validate()) {
      const status = dispatch(updateUser(userData))
      status.then(res => {
        setSuccess(true)
      })
      setTimeout(() => {
        setSuccess(false)
      }, 2000)
    }
  };


  return (
    <form action="" className={styles.settingsForm}>
      <Input
        id='first_name'
        type='text'
        style='bordered'
        value={userData.firstName}
        onChange={(e) => setUserData({...userData, firstName: e.target.value})}
        label='Имя'
        labelStyle='column'
        className={styles.settingsForm_settingsInputBig}
        error={errors?.firstName}
      />
      <Input
        id='last_name'
        type='text'
        style='bordered'
        value={userData.lastName}
        onChange={(e) => setUserData({...userData, lastName: e.target.value})}
        label='Фамилия'
        labelStyle='column'
        className={styles.settingsForm_settingsInputBig}
        error={errors?.lastName}
      />
      <Input
        id='email'
        type='email'
        style='bordered'
        value={userData.email}
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        label='Почта'
        labelStyle='column'
        className={styles.settingsForm_settingsInputBig}
        error={errors?.email}
      />
      <Input
        id='birthday'
        type='date'
        style='bordered'
        value={userData.birthday}
        onChange={(e) => setUserData({...userData, birthday: e.target.value})}
        label='Дата рождения'
        labelStyle='column'
        className={styles.settingsForm_settingsInputSmall}
        error={errors?.birthday}
      />
      <GenderSwitch
        male={userData.gender}
        onClick={(type) => setUserData({...userData, gender: type})}
      />
      <div className={styles.settingsForm_buttonBlock}>
        <Button
          type='button'
          style='fill'
          className={styles.settingsButton}
          onClick={onSubmit}
        >
          Сохранить изменения
        </Button>
        {
          isSuccess &&
          <p className={styles.successMessage}>Данные обновлены!</p>
        }
      </div>
    </form>
  );
}