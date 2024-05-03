import { Product, ProductCart } from "@/entities/product";
import { Container } from "@/shared/ui";

import styles from './styles.module.scss';

export const CatalogPage = ({
  products,
  category
}: {
  products: Product[],
  category: string
}) => {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.catalogContent}>
          <div className={styles.catalogContent_header}>
            <h1 className={styles.catalogContent_header__title}>Каталог{category ? `: ${category}`: ""}</h1>
            {/* CatalogFilter */}
          </div>

          <ul className={styles.catalogContent_list}>
            {
              products.map((pr: Product) => (
                <li key={pr.id}>
                  <ProductCart 
                    product={pr}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </section>
  );
}