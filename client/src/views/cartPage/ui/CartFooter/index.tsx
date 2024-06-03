import { ReactNode } from 'react';

import { formatPrice } from '@/shared/utils/misc';
import styles from './styles.module.scss';

export const CartFooter = ({
  check,
  checkout
}: {
  check: number,
  checkout: ReactNode
}) => {
  return (
    <div className={styles.cartFooter}>
      <p>Итого: <span>{formatPrice(check)} ₽</span></p>
      { checkout }
    </div>
  );
};
