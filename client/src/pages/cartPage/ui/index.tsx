'use client';

import { useEffect } from 'react';

import { CartBlock } from '@/widgets/cartBlock';
import { Container } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/shared/utils/storeHooks';
import { getUserOrder } from '../model/actions';
import { CartFooter } from './CartFooter';

import styles from './style.module.scss';
import { Checkout } from '@/features/checkout';
import { ClearCart } from '@/features/clearCart';
import { EmptyStub } from './EmptyStub';


export const CartPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { userOrder, productOrders } = useAppSelector(state => state.order);

  useEffect(() => {
    if (user.id) {
      dispatch(getUserOrder(user.id));
    }
  }, [user.id])

  console.log('order: ', userOrder)

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.cartContent}>
          <h1>Корзина</h1>
          {
            userOrder ?
            <>
              <div className={styles.cartContent_clear}>
                <ClearCart />
              </div>
              <CartBlock productOrders={productOrders}/>
              <CartFooter
                check={userOrder?.check || 0}
                checkout={<Checkout />}
              />
            </>
            : <EmptyStub />
          }
        </div>
      </Container>
    </section>
  );
};