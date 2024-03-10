import clsx from "clsx";

import { Inter, Lora } from "@/shared/styles/fonts";
import styles from './style.module.scss';

export const BaseLayout = ({
  header,
  children,
  footer
}: {
  header: React.ReactNode,
  children: React.ReactNode,
  footer: React.ReactNode
}) => {

  return (
    <html lang="ru">
      <body className={clsx(Inter.variable, Lora.variable, styles.body)}>
        { header }

        <main>{children}</main>

        { footer }
      </body>
    </html>
  );
};
