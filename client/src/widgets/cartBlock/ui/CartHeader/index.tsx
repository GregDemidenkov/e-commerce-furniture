import styles from './style.module.scss';

export const CartHeader = () => {
  return (
    <div className={styles.cartHeader}>
      <div className={styles.cartHeader_info}>
        <p></p>

        <p>Название</p>

        <p>Цена</p>
      </div>

      <div className={styles.cartHeader_controllers}>
        <p>Кол-во</p>

        <p>Итог</p>

        <p></p>
      </div>
    </div>
  );
};
