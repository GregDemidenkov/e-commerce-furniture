'use client';

import { useEffect } from "react";

import { PageTitle, ProfilePageWrapper } from "@/shared/ui"
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { getUserOrders } from "../model/actions";
import { Order } from "./Order";

import styles from './styles.module.scss';

export const OrderHistoryPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const { activeUserOrder, closedUserOrder } = useAppSelector(state => state.order);
  
  useEffect(() => {
    if(user.id) {
      dispatch(getUserOrders(user.id));
    }
  }, [user.id]);

  return (
    <ProfilePageWrapper>
      <div className={styles.orderHistory}>
        <PageTitle title={'История заказов'}/>
        {
          !activeUserOrder.length || !closedUserOrder.length ?
          <p>У вас пока нет заказов</p>
          :
          <div className={styles.orderHistory_types}>
            {
              !!activeUserOrder.length &&
              <div className={styles.orderHistory_types__list}>
                <h2>Активные</h2>
                <ul>
                  {
                    activeUserOrder.map(order => (
                      <li key={order.id}>
                        <Order
                          number={order.id}
                          check={order.check}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
            }

            {
              !!closedUserOrder.length &&
              <div className={styles.orderHistory_types__list}>
                <h2>Завершенные</h2>
                <ul>
                  {
                    closedUserOrder.map(order => (
                      <li key={order.id}>
                        <Order
                          number={order.id}
                          check={order.check}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
            }
          </div>
        }
      </div>
    </ProfilePageWrapper>
  );
}