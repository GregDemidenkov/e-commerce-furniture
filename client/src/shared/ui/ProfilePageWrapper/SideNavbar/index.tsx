'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { SVG } from '../../SVG';


export const SideNavbar = ({contentRef}: {contentRef: any}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateCoordinates = () => {
      const element:any = contentRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        setWidth(rect.x + 300);
      }
    };
    
    updateCoordinates();

    window.addEventListener('resize', updateCoordinates);

    return () => {
      window.removeEventListener('resize', updateCoordinates);
    };
  }, []);



  return (
    <aside className={styles.sideNavbar} style={{width: width}}>
      <nav className={styles.nav}>
        <h3>Личный кабинет</h3>

        <ul className={styles.nav_links}>
          <li className={styles.nav_links__link}>
            <Link href={'/profile/settings'}>
              <SVG type='profile'/> <span>Настройки</span>
            </Link>
          </li>

          <li className={styles.nav_links__link}>
            <Link href={'/profile/settings'}>
              <SVG type='profile'/> <span>Избранное</span>
            </Link>
          </li>

          <li className={styles.nav_links__link}>
            <Link href={'/profile/settings'}>
              <SVG type='profile'/> <span>История заказов</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
