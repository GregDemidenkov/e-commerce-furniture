import { ProductControllerBlock } from "@/widgets/productController";
import { Product } from "@/entities/product";
import { Container } from "@/shared/ui";

import styles from './styles.module.scss';

export const ProductPage = ({data}: {data: Product}) => {
  const optionsList = [
    {label: "Цвет", value: data.color},
    {label: "Размер", value: data.size},
    {label: "Вес", value: `${data.weight} кг`},
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.productPageContent}>
          <h1 className={styles.productPageContent_title}>{data.name}</h1>
          <div className={styles.productPageContent_up}>
            <div className={styles.productPageContent_up__images}>
              <img
                src={data.img}
                alt={data.name}
                // fill
              />
              {
                data.schemeImg &&
                <img
                  src={data.schemeImg}
                  alt={data.name}
                  // fill
                />
              }
            </div>
            <ProductControllerBlock
              data={{
                price: data.price,
                count: data.count
              }}
            />
          </div>

          <div className={styles.line} />

          <div className={styles.productPageContent_down}>
            <div className={styles.productPageContent_down__description}>
              <p>{data.description}</p>
            </div>

            <div className={styles.productPageContent_down__options}>
              {
                optionsList.map((opt) => (
                  <p><b>{opt.label}:</b> {opt.value}</p>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}