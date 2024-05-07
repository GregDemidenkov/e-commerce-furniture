'use client';

import Link from "next/link";

import styles from './styles.module.scss';
import { Button, SVG } from "@/shared/ui";
import { Product } from "../../model/types";
import { formatPrice } from "@/shared/utils/misc";
import { AUTH_ROUTES, CATALOG_ROUTES } from "@/shared/routes";
import { useAppSelector } from "@/shared/utils/storeHooks";
import { ReactNode } from "react";

export const ProductCard = ({
  product,
  cartController,
}: {
  product: Product,
  cartController: ReactNode
}) => {

  const { isAuth } = useAppSelector(
    (state) => state.auth
  )

  return (
    <Link href={CATALOG_ROUTES.product(product.id)} className={styles.productCart}>
      <img src={product.img} alt={product.name} />
      <div className={styles.line}></div>
      
      <p className={styles.productCart_price}>{formatPrice(product.price)} ₽</p>

      <p className={styles.productCart_name}>{product.name}</p>

      {/* Заменить блок ниже на children */}
      {
        isAuth ?
        <div className={styles.productCart_buttons}>
          <SVG type="heart"/>
          {/* <Button
            type="button"
            style="fill"
          >
            В корзину
          </Button> */}
          {
            cartController
          }
        </div>
        : <div className={styles.signInBlock}><Link href={AUTH_ROUTES.signIn}>Войдите</Link> <span>в профиль, чтобы добавить товар в корзину</span></div>
      }
    </Link>
  );
};
