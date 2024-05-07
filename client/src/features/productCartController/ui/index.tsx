'use client';

import { Button } from "@/shared/ui";

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { addProductOrder, deleteProductOrder } from "../model/actions";

export const ProductCartController = ({
  method,
  productId,
}: {
  method: 'add' | 'delete',
  productId: string
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth)

  const handleAddToCart = (e: any) => {
    e.preventDefault();
    dispatch(addProductOrder({
      userId: user.id,
      productOrder: {
        id: productId,
        count: 1
    }
    }))
  };

  const handleDeleteFromCart = (e: any) => {
    e.preventDefault();
    dispatch(deleteProductOrder({
      userId: user.id,
      productId: productId
    }))
  };

  return (
    <>
      {
        method === 'add' ?
        <Button
          type="button"
          style="fill"
          className={styles.button}
          onClick={(e) => handleAddToCart(e)}
        >
          В корзину
        </Button>
        :
        <Button
          type="button"
          style="bordered"
          className={styles.buttonDelete}
          onClick={(e) => handleDeleteFromCart(e)}
        >
          Удалить из корзины
        </Button>
      }
    </>
  );
}