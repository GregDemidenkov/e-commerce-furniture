import { Container } from '@/shared/ui';
import styles from './styles.module.scss';
import { InfoBlock } from './InfoBlock';
import { FeaturesBlock } from './FeaturesBlock';

export const Main = () => {
  return (
    <section>
      <Container>
        <div className={styles.content}>
          <InfoBlock />
          <FeaturesBlock />
        </div>
      </Container>
    </section>
  );
}