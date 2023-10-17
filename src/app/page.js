import s from './page.module.scss';

import MainSection from '../../components/MainSection';
import AddBook from '../../components/AddBook';

export default function Home() {
  return (
    <main className={s.root}>
      <div className={s.header}>
        <div className={s.pic}>
          <img src="/star.svg" alt="little star" />
        </div>
        <h1>My books</h1>
      </div>
      <AddBook />
      <MainSection />
    </main>
  );
}
