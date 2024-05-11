import clsx from 'clsx';
import styles from './styles.module.scss';

export const GenderSwitch = ({
  male,
  onClick
}: {
  male: "male" | "female" | null,
  onClick: (type: "male" | "female") => void
}) => {
  return (
    <div className={styles.genderSwitchWrapper}>
      <label htmlFor="gender">Пол</label>
      <div className={styles.genderSwitchWrapper_cases}>
        <div 
          className={clsx(
            styles.genderSwitchWrapper_cases__gender,
            male === "male" && styles.genderSwitchWrapper_cases__genderActive
          )}
          onClick={() => onClick("male")}
        >
          <span>Мужской</span>
        </div>
        <div
          className={clsx(
            styles.genderSwitchWrapper_cases__gender,
            male === "female" && styles.genderSwitchWrapper_cases__genderActive
          )}
          onClick={() => onClick("female")}
        >
          <span>Женский</span>
        </div>
      </div>
    </div>
  );
};
