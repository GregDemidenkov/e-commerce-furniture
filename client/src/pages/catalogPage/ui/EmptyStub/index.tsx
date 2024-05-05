import styles from './styles.module.scss';

export const EmptyStub = () => {
  return (
    <div className={styles.emptyStub}>
      <h2>Товары данной категории ещё не поступили на склад 🙁</h2>
    </div>
  );
};
