import { FC } from 'react';
import Link from 'next/link';

import { HeaderNavbar } from '@/features/headerNavbar';
import { Container, Logo, SVG } from '@/shared/ui';
import { MAIN_PATH } from '@/shared/routes';
import { CatalogNavbar } from './CatalogNavbar';

import styles from './style.module.scss';

export const Header: FC = () => {

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <Link href={MAIN_PATH}>
              <Logo />
            </Link>
            <Link className={styles.content_left__catalogLink} href={'/catalog'}>
              <SVG type="catalog" />
              <span>Каталог</span>
            </Link>
          </div>
          <HeaderNavbar />
        </div>
      </Container>

      <div className={styles.navbar}>
        <CatalogNavbar />
      </div>
    </header>
  );
};
