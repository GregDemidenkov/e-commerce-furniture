'use client';

import { clearState } from "@/entities/order/model/slice";
import { Button } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { checkout } from "../model/actions";

import styles from './styles.module.scss';

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { userOrder } = useAppSelector(state => state.order);


  function openWidget () {
    var widget = new cp.CloudPayments();
    widget.pay('auth',
      {
          publicId: 'test_api_00000000000000000000002',
          description: 'Оплата заказа в StulchakOFF',
          amount: userOrder?.check,
          currency: 'RUB',
          accountId: user.id,
          invoiceId: userOrder?.id,
          email: user.email,
          skin: "mini",
          autoClose: 3,
          payer: user
      },
      {
          onSuccess: function (options: any) {
            dispatch(checkout({
              userOrderId: options.invoiceId,
              amount: options.amount
            }));
            dispatch(clearState());
          },
          onFail: function (reason: any, options: any) {
            console.log(reason)
          },
          onComplete: function (paymentResult: any, options: any) {
            console.log('result ', paymentResult)
          }
      }
    )
  }
  return (
    <Button
      style="fill"
      type="button"
      className={styles.checkout}
      onClick={openWidget}
    >
      Оформить заказ
    </Button>
  );
};
