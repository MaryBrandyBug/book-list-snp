import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.header}>
        <div className={styles.pic}>
          <img src="/star.svg" alt="little star" />
        </div>
        <h1>My books</h1>
      </div>
    </main>
  );
}
