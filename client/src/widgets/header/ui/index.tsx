'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { HeaderNavbar } from '@/features/headerNavbar';
import { getCategories, Category } from '@/entities/category';
import { Container, Logo, SVG } from '@/shared/ui';
import { CATALOG_ROUTES, MAIN_PATH } from '@/shared/routes';
import { CatalogNavbar } from './CatalogNavbar';

import styles from './style.module.scss';

export const Header: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const data = getCategories();
    data.then(res => {
      setCategories(res);
    });
  }, []);

  console.log(categories)
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <Link href={MAIN_PATH}>
              <Logo />
            </Link>
            <Link className={styles.content_left__catalogLink} href={CATALOG_ROUTES.main}>
              <SVG type="catalog" />
              <span>Каталог</span>
            </Link>
          </div>
          <HeaderNavbar />
        </div>
      </Container>

      <div className={styles.navbar}>
        <CatalogNavbar categories={categories}/>
      </div>
    </header>
  );
};
