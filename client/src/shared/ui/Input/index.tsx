'use client';

import { ChangeEvent, FC } from "react";
import clsx from "clsx";
import InputMask from 'react-input-mask';

import styles from './style.module.scss';

type InputProps = {
  style: 'bordered' | 'underline',
  id: string,
  type: 'text' | 'email' | 'date' | 'password',
  value: any,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  error?: string | null,
  placeholder?: string,
  className?: string,
  label?: string,
  labelStyle?: 'row' | 'column'
}

export const Input: FC<InputProps> = ({
  style,
  type,
  id,
  value = '',
  onChange = () => console.log(),
  error,
  placeholder,
  className,
  label,
  labelStyle
}) => {

  if(label) {
    return (
      <div 
        className={clsx(
          styles[`input-wrapper`],
          styles[`input-wrapper-${labelStyle}`]
        )}>
        <label htmlFor={id}>{label}</label>
        {
          type === 'date' ?
          <InputMask 
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder || ""}
            className={clsx(
              styles[`input`],
              styles[`input-${style}`],
              className
            )}
            mask="99.99.9999"
            maskChar={'_'}
          />
        :
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder || ""}
            className={clsx(
              styles[`input`],
              styles[`input-${style}`],
              className
            )}
          />
        }
        <p className={styles.errorColumn}>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles[`input-wrapper`]}>
      {
        type === 'date' ?
        <InputMask 
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder || ""}
          className={clsx(
            styles[`input`],
            styles[`input-${style}`],
            className
          )}
          mask="99.99.9999"
          maskChar={'_'}
        />
      :
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder || ""}
          className={clsx(
            styles[`input`],
            styles[`input-${style}`],
            className
          )}
        />
      }
      <p className={styles.error}>{error}</p>
    </div>
  );
};