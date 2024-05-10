import { Button } from "@/shared/ui";

import styles from './styles.module.scss';

export const Checkout = () => {
  return (
    <Button
      style="fill"
      type="button"
      className={styles.checkout}
    >
      Оформить заказ
    </Button>
  );
};
