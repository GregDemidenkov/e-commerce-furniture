import styles from './styles.module.scss';
import Image from 'next/image';

export const FeaturesBlock = () => {
  return (
    <div className={styles.featuresBlock}>
      <div className={styles.featuresBlock_el}>
        <div className={styles.featuresBlock_el__img}>
          <Image
            src="/images/features/1.webp"
            alt=''
            width={38}
            height={78}
          />
        </div>
        <h3>Натуральные и экологичные<br /> материалы</h3>
      </div>

      <div className={styles.featuresBlock_el}>
        <div className={styles.featuresBlock_el__img}>
          <Image
            src="/images/features/2.webp"
            alt=''
            width={70}
            height={53}
          />
        </div>
        <h3>Выезд дизайнера и дизайн-проект бесплатно</h3>
      </div>

      <div className={styles.featuresBlock_el}>
        <div className={styles.featuresBlock_el__img}>
          <Image
            src="/images/features/3.webp"
            alt=''
            width={67}
            height={55}
          />
        </div>
        <h3>Быстрая доставка и <br />профессиональная сборка</h3>
      </div>

      <div className={styles.featuresBlock_el}>
        <div className={styles.featuresBlock_el__img}>
          <Image
            src="/images/features/4.webp"
            alt=''
            width={77}
            height={60}
          />
        </div>
        <h3>До 3 лет гарантии на мебель, <br />пожизненная на фурнитуру</h3>
      </div>
    </div>
  );
}