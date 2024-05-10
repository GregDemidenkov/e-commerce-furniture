'use client';

import Link from 'next/link';

import { SVG } from '@/shared/ui';
import { useAppSelector } from '@/shared/utils/storeHooks';
import { AUTH_ROUTES, CART_ROOT_PATH, PROFILE_ROUTES } from '@/shared/routes';

import styles from './styles.module.scss';

export const HeaderNavbar = () => {
  const { isAuth } = useAppSelector(
    (state) => state.auth
  );

  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNav_el}>
        <Link href={isAuth ? PROFILE_ROUTES.main : AUTH_ROUTES.signIn}>
          <SVG type='profile'/> <p>{isAuth ? 'Личный кабинет' : 'Войти'}</p>
        </Link>
      </div>

      <div className={styles.headerNav_el}>
        <SVG type='heart'/> <p>Избранное</p>
      </div>

      <div className={styles.headerNav_el}>
        <Link href={isAuth ? CART_ROOT_PATH : AUTH_ROUTES.signIn}>
          <SVG type='cart'/> <p>Корзина</p>
        </Link>
      </div>
    </nav>
  );
}