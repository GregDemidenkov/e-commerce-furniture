'use client';

import { useEffect } from "react";
import clsx from "clsx";

import { Inter, Lora, Esti, Roboto } from "@/shared/styles/fonts";
import styles from './style.module.scss';
import { useAppDispatch } from "@/shared/utils/storeHooks";
import { getCookie } from "@/shared/utils/cookie";
import { auth } from "@/entities/auth";

export const BaseLayout = ({
  header,
  children,
  footer
}: {
  header: React.ReactNode,
  children: React.ReactNode,
  footer: React.ReactNode
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getCookie('accessToken')) {
      dispatch(auth());
    }
  }, [])

  return (
    <html lang="ru">
      <head>
        <script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js"></script>
      </head>
      <body className={clsx(Inter.variable, Lora.variable, Esti.variable, Roboto.variable, styles.body)}>
        { header }

        <main>
          { children }
        </main>

        { footer }
      </body>
    </html>
  );
};
