'use client';

import { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from './style.module.scss';

type ButtonProps = {
  style: 'fill' | 'bordered',
  type: 'button' | 'submit',
  onClick?: (e: any) => void,
  children: ReactNode,
  className?: string
}

export const Button: FC<ButtonProps> = ({
  style,
  type = 'button',
  onClick,
  children,
  className
}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles['button'],
        styles[`button-${style}`],
        className
      )}
    >
      {children}
    </button>
  );
}