'use client';

import { FC } from "react";
import clsx from "clsx";

import styles from './style.module.scss';

type InputProps = {
  style: 'bordered' | 'underline',
  id: string,
  type: string,
  value?: string,
  onChange?: () => void,
  error?: string,
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
      </div>
    );
  }

  return (
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
  );
};