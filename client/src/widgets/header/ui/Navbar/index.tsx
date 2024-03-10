import { FC } from "react";

import styles from './style.module.scss';
import Link from "next/link";
import { Container } from "@/shared/ui";

const mockNavLinks = ['Диваны', 'Кровати', 'Шкафы', 'Столы', 'Стулья'];

export const Navbar: FC = () => {

  return (
    <nav className={styles.nav}>
      <Container>
        <ul>
          {
            mockNavLinks.map((link, i) => (
              <li>
                <Link href='/'>{link}</Link>
              </li>
            ))
          }
        </ul>
      </Container>
    </nav>
  );
}