import { FC } from "react";
import Link from "next/link";

import { Container } from "@/shared/ui";

import styles from './style.module.scss';

const mockNavLinks = ['Диваны', 'Кровати', 'Шкафы', 'Столы', 'Стулья'];

export const CatalogNavbar: FC = () => {

  return (
    <nav className={styles.nav}>
      <Container>
        <ul>
          {
            mockNavLinks.map((link, i) => (
              <li>
                <Link key={i} href='/'>{link}</Link>
              </li>
            ))
          }
        </ul>
      </Container>
    </nav>
  );
}