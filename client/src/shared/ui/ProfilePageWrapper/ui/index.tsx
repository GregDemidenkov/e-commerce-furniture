'use client';

import { useRef } from 'react';
import { Container } from '../../Container';
import { SideNavbar } from './SideNavbar';
import styles from './styles.module.scss';


export const ProfilePageWrapper = ({
  children
}: {
  children: React.ReactNode
}) => {
  const elementRef = useRef(null)

  return (
    <div className={styles.profilePageWrapper}>
      <Container>
        <div className={styles.content} ref={elementRef}>
          <SideNavbar contentRef={elementRef}/>
          <div className={styles.wrapper}>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};
