import { Button, Input } from '@/shared/ui';
import { GenderSwitch } from './GenderSwitch';

import styles from './styles.module.scss';

export const SettingsForm = () => {
  return (
    <form action="" className={styles.settingsForm}>
      <Input
        id='first_name'
        type='text'
        style='bordered'
        value='Григорий'
        label='Имя'
        labelStyle='column'
        className={styles.settingsForm_settingsInputBig}
      />
      <Input
        id='last_name'
        type='text'
        style='bordered'
        value='Демиденков'
        label='Фамилия'
        labelStyle='column'
        className={styles.settingsForm_settingsInputBig}
      />
      <Input
        id='email'
        type='email'
        style='bordered'
        value='greg.demidenkov@yandex.ru'
        label='Почта'
        labelStyle='column'
        className={styles.settingsForm_settingsInputBig}
      />
      <Input
        id='birthday'
        type='date'
        style='bordered'
        value='30.12.2003'
        label='Дата рождения'
        labelStyle='column'
        className={styles.settingsForm_settingsInputSmall}
      />
      <GenderSwitch />
      <div className={styles.settingsForm_buttonBlock}>
        <Button
          type='button'
          style='fill'
          className={styles.settingsButton}
        >
          Сохранить изменения
        </Button>
      </div>
    </form>
  );
}