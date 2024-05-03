import Link from "next/link";

import styles from './styles.module.scss';
import { Button, SVG } from "@/shared/ui";
import { Product } from "../../model/types";
import { formatPrice } from "@/shared/utils/misc";
import { CATALOG_ROUTES } from "@/shared/routes";
import { useAppSelector } from "@/shared/utils/storeHooks";

export const ProductCart = ({
  product
}: {
  product: Product
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
          <Button
            type="button"
            style="fill"
          >
            В корзину
          </Button>
        </div>
        : <p><Link href={config.login}>Войдите</Link> в профиль, чтобы добавить товар в корзину</p>
      }
    </Link>
  );
};
