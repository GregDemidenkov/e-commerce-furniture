import Link from 'next/link';
import styles from './styles.module.scss';
import { CATALOG_ROUTES } from '@/shared/routes';

export const EmptyStub = () => {
  return (
    <div className={styles.emptyStub}>
      <h2>Ваша корзина пуста 🙁</h2>
      <p>Добавьте товары из <Link href={CATALOG_ROUTES.main}>каталога</Link>, чтобы оформить заказ</p>
    </div>
  );
};
