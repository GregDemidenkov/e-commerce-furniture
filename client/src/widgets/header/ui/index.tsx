import { FC } from 'react';
import Link from 'next/link';

import { HeaderNavbar } from '@/features/headerNavbar';
import { Container, Logo } from '@/shared/ui';
import { MAIN_PATH } from '@/shared/routes';
import { CatalogNavbar } from './CatalogNavbar';

import styles from './style.module.scss';

export const Header: FC = () => {

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link href={MAIN_PATH}>
            <Logo />
          </Link>
          <HeaderNavbar />
        </div>
      </Container>

      <div className={styles.navbar}>
        <CatalogNavbar />
      </div>
    </header>
  );
};
