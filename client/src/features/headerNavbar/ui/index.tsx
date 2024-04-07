'use client';

import { SVG } from '@/shared/ui';
import { useAppSelector } from '@/shared/utils/storeHooks';

import styles from './styles.module.scss';
import Link from 'next/link';
import { AUTH_ROUTES } from '@/shared/routes';


export const HeaderNavbar = () => {
  const { isAuth } = useAppSelector(
    (state) => state.auth
  );

  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNav_el}>
        <Link href={isAuth ? '/profile' : AUTH_ROUTES.signIn}>
          <SVG type='profile'/> <p>{isAuth ? 'Личный кабинет' : 'Войти'}</p>
        </Link>
      </div>

      <div className={styles.headerNav_el}>
        <SVG type='heart'/> <p>Избранное</p>
      </div>

      <div className={styles.headerNav_el}>
        <SVG type='cart'/> <p>Корзина</p>
      </div>
    </nav>
  );
}