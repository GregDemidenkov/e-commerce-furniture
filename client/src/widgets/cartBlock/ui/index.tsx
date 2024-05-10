'use client';

import { RemoveFromCart } from "@/features/removeFromCart";
import { CountController } from "@/features/countController";
import { ProductOrder, ProductOrderCard } from "@/entities/order";
import { useAppSelector } from "@/shared/utils/storeHooks";
import { CartHeader } from "./CartHeader";

import styles from './style.module.scss';

export const CartBlock = ({
  productOrders
}: {
  productOrders: ProductOrder[]
}) => {
  const { user } = useAppSelector(state => state.auth);

  return (
    <div className={styles.cartBlock}>
      <CartHeader />
      <ul className={styles.cartBlock_list}>
        {
          productOrders.map((prOrder) => (
            <li key={prOrder.id}>
              <ProductOrderCard
                productOrder={prOrder}
                removeFromCart={<RemoveFromCart
                  userId={user.id}
                  productId={prOrder.product.id}
                />}
                countController={<CountController
                  count={prOrder.count}
                  maxCount={prOrder.product.count}
                  productOrderId={prOrder.id}
                />}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
