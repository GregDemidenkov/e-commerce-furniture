import clsx from 'clsx';
import styles from './styles.module.scss';

export const GenderSwitch = () => {
  return (
    <div className={styles.genderSwitchWrapper}>
      <label htmlFor="gender">Пол</label>
      <div className={styles.genderSwitchWrapper_cases}>
        <div 
          className={clsx(
            styles.genderSwitchWrapper_cases__gender,
            styles.genderSwitchWrapper_cases__genderActive
          )}
        >
          <span>Мужской</span>
        </div>
        <div className={styles.genderSwitchWrapper_cases__gender}>
          <span>Женский</span>
        </div>
      </div>
    </div>
  );
};
