import { SVG } from "@/shared/ui";
import { useAppDispatch } from "@/shared/utils/storeHooks";
import { removeFromCart } from "../model/actions";

import styles from './styles.module.scss';

export const RemoveFromCart = ({
  userId,
  productId
}: {
  userId: string
  productId: string
}) => {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
      dispatch(removeFromCart({
        userId: userId,
        productId: productId
      }))
  };

  return (
    <button
      className={styles.removeFromCart}
      onClick={handleClearCart}
    >
      <SVG type="delete" />
    </button>
  );
};
