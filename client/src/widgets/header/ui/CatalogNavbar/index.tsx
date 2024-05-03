import Link from "next/link";

import { Category } from "@/entities/category/model/types";
import { CATALOG_ROUTES } from "@/shared/routes";
import { Container } from "@/shared/ui";

import styles from './style.module.scss';

export const CatalogNavbar = ({ categories }: { categories: Category[] }) => {

  return (
    <nav className={styles.nav}>
      <Container>
        <ul>
          {
            categories.map((link) => (
              <li key={link.id}>
                <Link
                  href={CATALOG_ROUTES.catalogCategory(link.id)}
                >
                  {link.categoryName}
                </Link>
              </li>
            ))
          }
        </ul>
      </Container>
    </nav>
  );
}