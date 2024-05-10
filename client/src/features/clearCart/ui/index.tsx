'use client';

import { SVG } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { clearCart } from "../model/actions";

import styles from './styles.module.scss';

export const ClearCart = () => {
  const dispatch = useAppDispatch();
  const { userOrder } = useAppSelector(state => state.order);

  const handleClearCart = () => {
    if(userOrder) {
      dispatch(clearCart({
        userId: userOrder?.userId,
        userOrderId: userOrder?.id
      }))
    }
  }

  return (
    <div
      className={styles.clearCart}
      onClick={handleClearCart}
    >
      <span>Очистить корзину</span>
      <SVG type="delete"/>
    </div>
  );
}