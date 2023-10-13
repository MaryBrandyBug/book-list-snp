import s from './page.module.scss';

import Book from '../../components/Book';
import Button from '../../components/Button';

export default function Home() {
  return (
    <main className={s.root}>
      <div className={s.header}>
        <div className={s.pic}>
          <img src="/star.svg" alt="little star" />
        </div>
        <h1>My books</h1>
      </div>
      <div className={s.content}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Button />
      </div>
    </main>
  );
}
