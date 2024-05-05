'use client';

import { useEffect } from "react";

import { Product, ProductCart } from "@/entities/product";
import { Category } from "@/entities/category";
import { setProducts, setSortParams } from "@/entities/product/model/slice";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { Container } from "@/shared/ui";

import styles from './styles.module.scss';
import { CatalogFilter } from "@/features/catalogFilter";
import { EmptyStub } from "./EmptyStub";

export const CatalogPage = ({
  initialProducts,
  category
}: {
  initialProducts: Product[],
  category: Category | null
}) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(
    (state) => state.product
  );
  
  useEffect(() => {
    dispatch(setProducts(initialProducts));
    dispatch(setSortParams({
      category: category?.id,
      sort: 'default'
    }));
  }, [initialProducts])

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.catalogContent}>
          <div className={styles.catalogContent_header}>
            <h1 className={styles.catalogContent_header__title}>
              Каталог{category ? `: ${category.categoryName}`: ""}
            </h1>
            {
              !!products.length && <CatalogFilter />
            }
          </div>

          {
            !!products.length ?
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
            : <EmptyStub />
          }

        </div>
      </Container>
    </section>
  );
}