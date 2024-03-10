import { FC } from 'react';

import { Navbar } from './Navbar';
import { Container, Logo } from '@/shared/ui';

import styles from './style.module.scss';
import Link from 'next/link';

const mockisAuth = false;

export const Header: FC = () => {

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />

          <div className={styles.authBlock}>
            {
              mockisAuth 
              ?
                <>Личный кабинет</>
              :
                <Link className={styles.signIn} href='/'>Войти</Link>
            }
          </div>
        </div>
      </Container>

      <div className={styles.navbar}>
        <Navbar />
      </div>
    </header>
  );
};
