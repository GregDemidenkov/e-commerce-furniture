import { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from './style.module.scss';

type AuthCardProps = {
  type: 'sign-in' | 'sign-up'
  label: string,
  children: ReactNode
}

export const AuthCard: FC<AuthCardProps> = ({
  type,
  label,
  children
}) => {

  return (
    <div className={styles.authCard}>
      <div 
        className={clsx(
          styles.background,
          styles[`background-${type}`]
        )}
      />

      <div className={styles.content}>
        <h2>{label}</h2>

        { children }
      </div>
    </div>
  );
}