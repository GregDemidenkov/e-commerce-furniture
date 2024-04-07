'use client';

import clsx from "clsx";

import { Inter, Lora, Esti } from "@/shared/styles/fonts";
import styles from './style.module.scss';
import { useAppDispatch } from "@/shared/utils/storeHooks";
import { getCookie } from "@/shared/utils/cookie";
import { auth } from "@/entities/auth";
import { useEffect } from "react";

export const BaseLayout = ({
  header,
  children,
  footer
}: {
  header: React.ReactNode,
  children: React.ReactNode,
  footer: React.ReactNode
}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(auth())
    }
  }, [])

  return (
    <html lang="ru">
      <body className={clsx(Inter.variable, Lora.variable, Esti.variable, styles.body)}>
        { header }

        <main>{children}</main>

        { footer }
      </body>
    </html>
  );
};
