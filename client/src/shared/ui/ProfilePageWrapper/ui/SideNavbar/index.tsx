'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { SVG } from '../../../SVG';
import navData from '../../model/navData';

import styles from './styles.module.scss';
import { removeCookie } from '@/shared/utils/cookie';
import redirectTo from '@/shared/utils/redirect';
import { MAIN_PATH } from '@/shared/routes';

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

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };
  console.log(1)
  return (
    <aside className={styles.sideNavbar} style={{width: width}}>
      <nav className={styles.nav}>
        <h3>Личный кабинет</h3>

        <ul className={styles.nav_links}>
          {
            navData.map((link, i) => (
              <li
                key={i}
                className={clsx(
                  styles.nav_links__link,
                  isActiveLink(link.href) ? styles.activeLink : ''
                )}
              >
                <Link href={link.href}>
                  <SVG type={link.icon}/> <span>{link.title}</span>
                </Link>
              </li>
            ))
          }
          <li
            className={clsx(
              styles.nav_links__link,
            )}
          >
            <div onClick={() => {removeCookie('accessToken'); redirectTo(MAIN_PATH)}}>
              <SVG type={'logout'}/> <span>Выйти</span>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
