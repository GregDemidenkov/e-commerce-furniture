import { ReactNode } from 'react';

import { formatPrice } from '@/shared/utils/misc';
import { ProductOrder } from '../../model/types';
import styles from './styles.module.scss';

export const ProductOrderCard = ({
  productOrder,
  removeFromCart,
  countController
}: {
  productOrder: ProductOrder,
  removeFromCart: ReactNode,
  countController: ReactNode
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_info}>
        <img src={productOrder.product.img} alt={productOrder.product.name} />

        <p className={styles.card_info__name}>
          {productOrder.product.name}
          <br/>
          <span>{productOrder.product.category.categoryName}</span>
        </p>

        <p className={styles.card_info__price}>
          {formatPrice(productOrder.product.price)} ₽
        </p>
      </div>

      <div className={styles.card_controllers}>
        <div>
          { countController }
        </div>

        <p className={styles.card_controllers__price}>
          {formatPrice(productOrder.fullPrice)} ₽
        </p>

        <div>
          { removeFromCart }
        </div>
      </div>
    </div>
  );
};
