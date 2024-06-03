import { formatPrice } from '@/shared/utils/misc';

import styles from './styles.module.scss';

export const Order = ({
  number,
  check
}: {
  number: string,
  check: number
}) => {
  return (
    <div className={styles.order}>
      <p className={styles.order_number}>№ {number}</p>
      <p className={styles.order_check}>{formatPrice(check)} RUB</p>
    </div>
  );
}