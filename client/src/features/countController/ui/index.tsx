'use client';

import { SVG } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { changeCountProductOrder } from "../model/actions";

import styles from './styles.module.scss';

export const CountController = ({
  count,
  maxCount,
  productOrderId
}: {
  count: number,
  maxCount: number,
  productOrderId: string
}) => {
  const dispatch = useAppDispatch();
  const { userOrder } = useAppSelector(state => state.order);
  const { user } = useAppSelector(state => state.auth);

  const handleCountChange = (action: 'add' | 'delete') => {
    if(action === 'add' && count+1 > maxCount) {
      return;
    }

    if(action === 'delete' && count-1 <= 0) {
      return;
    }

    dispatch(changeCountProductOrder({
      userId: user.id,
      userOrderId: userOrder?.id || "",
      productOrderId: productOrderId,
      count: action === 'add' ? count+1 : count-1,
      action: action
    }))
  }

  return (
    <div className={styles.countController}>
      <button
        className={styles.countController_button}
        onClick={() => handleCountChange('delete')}
      >
        <SVG type="minus" />
      </button>

      <p className={styles.countController_count}>{count}</p>

      <button
        className={styles.countController_button}
        onClick={() => handleCountChange('add')}
      >
        <SVG type="plus" />
      </button>
    </div>
  );
}