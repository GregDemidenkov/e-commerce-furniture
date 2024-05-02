import { Button, SVG } from "@/shared/ui";
import { formatPrice } from "@/shared/utils/misc";
import { ProductController } from "../../model/types";

import styles from './styles.module.scss';

export const ProductControllerBlock = ({ data }: {data: ProductController}) => {

  return (
    <div className={styles.productControllerBlock}>
      <p className={styles.productControllerBlock_price}>{formatPrice(data.price)} ₽</p>
      <p className={styles.productControllerBlock_count}>В наличии {data.count} шт</p>
      <div className={styles.productControllerBlock_buttons}>
        <SVG type="heart"/>
        <Button
          type="button"
          style="fill"
        >
          В корзину
        </Button>
      </div>
    </div>
  );
}