'use client';

import { useEffect } from "react";

import { CatalogFilter } from "@/features/catalogFilter";
import { Product, ProductCard } from "@/entities/product";
import { Category } from "@/entities/category";
import { setProducts, setSortParams } from "@/entities/product/model/slice";
import { clearActiveProducts } from "@/entities/order/model/slice";
import { getActiveProducts } from "@/entities/order/model/actions";
import { ProductCartController } from "@/features/productCartController";
import { useAppDispatch, useAppSelector } from "@/shared/utils/storeHooks";
import { Container } from "@/shared/ui";
import { EmptyStub } from "./EmptyStub";

import styles from './styles.module.scss';

export const CatalogPage = ({
  initialProducts,
  category
}: {
  initialProducts: Product[],
  category: Category | null
}) => {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector(state => state.auth)
  const { products } = useAppSelector(
    (state) => state.product
  );
  const { activeProducts } = useAppSelector(state => state.order)
  
  useEffect(() => {
    dispatch(setProducts(initialProducts));
    dispatch(setSortParams({
      category: category?.id,
      sort: 'default'
    }));
  }, [initialProducts])

  useEffect(() => {
    dispatch(clearActiveProducts())
    if(isAuth) {
        dispatch(getActiveProducts(user.id))
    }
  }, [isAuth])

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
                    <ProductCard 
                      product={pr}
                      cartController={<ProductCartController
                        method={!activeProducts.includes(pr.id) ? 'add' : 'delete'}
                        productId={pr.id}
                      />}
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